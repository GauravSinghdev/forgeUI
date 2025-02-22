"use server"

import { revalidatePath } from "next/cache"

export async function updateProfile(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const bio = formData.get("bio") as string

  // In a real application, you would update the profile in your database here
  console.log("Updating profile:", { name, email, bio })

  // Revalidate the profile page to show the updated data
  revalidatePath("/profile")
}

