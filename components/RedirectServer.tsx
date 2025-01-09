"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export function RedirectServer() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const search = searchParams.get("success");
    if (search === "true") {
      setTimeout(() => {
        toast.success("You are logged in.");
        redirect("/dashboard");
      }, 100);
    }
  }, [searchParams]);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/");
    }
  }, [session, status, router]);

  return null;
}
