import React from "react";
import { Sidebar } from "./Sidebar";

export default function ComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 p-2">
      <div className="hidden col-span-3 sm:col-span-2 lg:col-span-3 sm:block ">
        <Sidebar />
      </div>
      <div className="col-span-12 sm:col-span-10 lg:col-span-9">{children}</div>
    </div>
  );
}
