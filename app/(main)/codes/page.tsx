import { Metadata } from "next";
import Link from "next/link";
import { FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Code",
};

export default function CodePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow max-w-7xl mx-auto p-2 px-5">Hey</main>
    </div>
  );
}
