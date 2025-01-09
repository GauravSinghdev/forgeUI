import { RedirectServer } from "@/components/RedirectServer";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};
export default async function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <RedirectServer />
      <main className="flex-grow max-w-7xl mx-auto">
        <h1 className="h1-grad">Dashboard</h1>
        <div>
          <Link href={"/codes"}>
            <Button size={"lg"} className="text-3xl">Visit my codes</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
