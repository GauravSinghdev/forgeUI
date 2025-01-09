import type { Metadata } from "next";

import "./globals.css";
import { Appbar } from "@/components/Appbar";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Providers from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Forge UI",
    default: "Forge UI",
  },
  description: "Take your fav components code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Appbar />
            <main className="my-5">{children}</main>
            <footer className="py-6 px-6 bg-background border-t">
              <div className="container mx-auto text-center text-sm text-muted-foreground">
                © 2025 ForgeUI. All rights reserved.
              </div>
            </footer>
            <Toaster
              position="bottom-right"
              reverseOrder={false}
              toastOptions={{
                duration: 1500,
                style: {
                  padding: "10px",
                },
              }}
            />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
