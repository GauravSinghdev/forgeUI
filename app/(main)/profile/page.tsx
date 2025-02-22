import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { IconPencil } from "@tabler/icons-react";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  const user = session.user;

  const profileDetails = [
    { label: "Username", value: user?.name || "N/A" },
    { label: "Email", value: user?.email || "N/A" },
    { label: "Bio", value: "No bio available" },
    { label: "Location", value: "Not set" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow max-w-7xl mx-auto border p-10">
        <div className="flex flex-col items-center gap-5">
          <Avatar className="size-20 xl:size-60 rounded">
            <AvatarImage src={user?.image || "https://github.com/shadcn.png"} />
            <AvatarFallback>{user?.name?.[0] || "?"}</AvatarFallback>
          </Avatar>
          <div className="space-y-2 text-center">
            <div className="text-2xl font-bold xl:text-3xl">{user?.name}</div>
            <div className="text-xl text-gray-500">@{user?.email?.split("@")[0]}</div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {profileDetails.map((detail, index) => (
            <div key={index} className="flex items-center justify-between border-b py-3">
              <span className="text-lg font-semibold text-gray-600">{detail.label}</span>
              <span className="text-lg">{detail.value}</span>
              <IconPencil stroke={2} className="cursor-pointer text-gray-500 hover:text-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
