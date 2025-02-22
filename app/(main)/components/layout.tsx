import React from "react";
import { Sidebar } from "./Sidebar";

export default function ComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 p-2">
      <div className="lg:col-span-2 xl:col-span-3">
        <Sidebar />
      </div>
      <div className="hidden lg:block lg:col-span-10 xl:col-span-9">{children}</div>
    </div>
  );
}
