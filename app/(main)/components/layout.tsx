import React from "react";
import { Sidebar } from "./Sidebar";

export default function ComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 p-2">
      {/* Main Content: Full width on small screens, adjusted on lg and above */}
      <div className="col-span-12 lg:col-span-9.5 xl:col-span-9 order-1 sm:order-2">
        {children}
      </div>
      {/* Sidebar: Full width below content on small screens, side column on lg and above */}
      <div className="col-span-12 lg:col-span-2.5 xl:col-span-3 order-2 sm:order-1">
        <Sidebar />
      </div>
    </div>
  );
}