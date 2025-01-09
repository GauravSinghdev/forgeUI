import { Metadata } from "next";
import Link from "next/link";
import { FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Code",
};

export default function CodePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Link href={"/save-code"} className="flex items-center justify-center">
        <div className="relative">
            <div className="absolute inset-0 bg-pink-600 bg-gradient-to-r from-pink-600 to-blue-500 rounded-lg blur"></div>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <FlaskConical className="size-6 text-pink-600 -rotate-6" />
              <span className="text-primary pr-6">follow codewithkara</span>
            </span>
            <span className="text-indigo-400 pl-6">
              See what&apos;s new &rarr;
            </span>
          </button>
        </div>
      </Link>
      <main className=""></main>
    </div>
  );
}
