import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { AuthCompoSec } from "./AuthCompoSec";
import { authOptions } from "@/lib/auth";

export default async function AuthPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow items-center justify-center">
        <AuthCompoSec />
      </div>
    </div>
  );
}
