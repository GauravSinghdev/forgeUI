import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components",
};

export default function ComponentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-7xl mx-auto">
        Component Page
      </main>
    </div>
  )
}
