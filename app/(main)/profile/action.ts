"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

interface UpdateProfileData {
  name: string;
  email: string;
  avatarUrl?: string;
}

export async function updateProfile(data: UpdateProfileData) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: data.name,
        email: data.email, // Note: Email updates might be restricted for OAuth providers
        avatarUrl: data.avatarUrl || session.user.image || null,
      },
    });

    revalidatePath("/dashboard/profile");
    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("Error updating profile:", error);
    return { success: false, error: "Failed to update profile" };
  }
}

export async function changePassword(currentPassword: string, newPassword: string) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return { success: false, error: "Unauthorized" };
  }

  if (session.user.provider !== "Credentials") {
    return { success: false, error: "Password change is only available for Credentials provider" };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user || !user.password) {
      return { success: false, error: "User not found or no password set" };
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return { success: false, error: "Current password is incorrect" };
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { email: session.user.email },
      data: { password: hashedNewPassword },
    });

    revalidatePath("/dashboard/profile");
    return { success: true };
  } catch (error) {
    console.error("Error changing password:", error);
    return { success: false, error: "Failed to change password" };
  }
}