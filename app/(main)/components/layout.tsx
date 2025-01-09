import React from "react";
import { Sidebar } from "./_component/Sidebar";

export default function ComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
      <Sidebar />
      </div>
      {children}
    </div>
  );
}
