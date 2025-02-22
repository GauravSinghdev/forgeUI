import { FlaskConical } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Components",
};

export default function ComponentsPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen gap-10 p-4 justify-center">
        <Link
          href={"https://x.com/codewithkara"}
          target="_blank"
          className="flex items-center justify-center hover:scale-105 transition-all"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-500 rounded-lg blur"></div>
            <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center sm:divide-x divide-gray-600">
              <span className="sm:flex items-center justify-center space-x-5 hidden">
                <FlaskConical className="size-6 text-pink-600 -rotate-6" />
                <span className="text-primary pr-6">follow codewithkara</span>
              </span>
              <span className="text-indigo-400 sm:pl-6">See what&apos;s new →</span>
            </button>
          </div>
        </Link>

        <p className="text-sm sm:text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          libero tenetur magni nobis ipsa asperiores aperiam eveniet sequi!
          Voluptatem, nemo!
        </p>

        {/* Corrected Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div>
            <div className="w-full h-60 md:h-80 border border-gray-300 rounded-lg shadow-xl flex items-center justify-center">
            1 Component Here 
            </div>
            <div className="py-5 px-2 flex flex-col gap-1">
              <h1 className="font-bold text-xl">Lorem1</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-60 md:h-80 border border-gray-300 rounded-lg shadow-xl flex items-center justify-center">
              2 Component Here
            </div>
            <div className="py-5 px-2 flex flex-col gap-1">
              <h1 className="font-bold text-xl">Lorem1</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-60 md:h-80 border border-gray-300 rounded-lg shadow-xl flex items-center justify-center">
              3 Component Here
            </div>
            <div className="py-5 px-2 flex flex-col gap-1">
              <h1 className="font-bold text-xl">Lorem1</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-60 md:h-80 border border-gray-300 rounded-lg shadow-xl flex items-center justify-center">
              4 Component Here
            </div>
            <div className="py-5 px-2 flex flex-col gap-1">
              <h1 className="font-bold text-xl">Lorem1</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-60 md:h-80 border border-gray-300 rounded-lg shadow-xl flex items-center justify-center">
              5 Component Here
            </div>
            <div className="py-5 px-2 flex flex-col gap-1">
              <h1 className="font-bold text-xl">Lorem1</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-60 md:h-80 border border-gray-300 rounded-lg shadow-xl flex items-center justify-center">
              6 Component Here
            </div>
            <div className="py-5 px-2 flex flex-col gap-1">
              <h1 className="font-bold text-xl">Lorem1</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
