"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const path = usePathname();
  console.log(path);
  const sidebarLinks = [
    { href: "/pricing", label: "Request for Custom", isButton: true },
    // {
    //   href: "/components/all-basic",
    //   path: "/all-basic",
    //   label: "All Basic",
    //   isButton: false,
    // },
    // {
    //   href: "/components/card1",
    //   path: "/card1",
    //   label: "Card 1",
    //   isButton: false,
    // },
    // {
    //   href: "/components/card2",
    //   path: "/card2",
    //   label: "Card 2",
    //   isButton: false,
    // },
    // {
    //   href: "/components/analytics",
    //   path: "/analytics",
    //   label: "Analytics",
    //   isButton: false,
    // },
    {
      href: "/components",
      path: "/components",
      label: "Home",
      isButton: false,
    },
    {
      href: "/components/tilt-Card",
      path: "/tilt-Card",
      label: "Tilt Card",
      isButton: false,
    },
    {
      href: "/components/reveal-Link",
      path: "/reveal-Link",
      label: "Reveal Link",
      isButton: false,
    },
    {
      href: "/components/circle-SVG",
      path: "/circle-SVG",
      label: "Circle SVG",
      isButton: false,
    },
    {
      href: "/components/all-button",
      path: "/all-button",
      label: "All Button",
      isButton: false,
    },
    {
      href: "/components/hanging-card",
      path: "/hanging-card",
      label: "Hanging Card",
      isButton: false,
    },
  ];

  return (
    <div className="py-1 px-2">
      <nav className="space-y-4 flex flex-col">
        {sidebarLinks.map((link, index) => {
          // If it's a button link
          if (link.isButton) {
            return (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 60, // Adds a spring effect
                  damping: 15, // Controls the bounciness
                }}
                key={index}
                >
                <Link href={link.href} className="text-center">
                  <Button variant={"secondary"}>{link.label}</Button>
                </Link>
              </motion.div>
            );
          }
          // Regular links (internal)
          return (
            <Link
              key={index}
              href={link.href}
              className={`transition-colors hover:text-primary border-b-2 ps-3 ${
                path === link.href ? "border-primary text-primary tracking-widest font-bold text-lg border-r-2" : ""
              }`}
            >
              <motion.div initial={{ x: -5 }} whileHover={{ x: 0 }}>
                {link.label}
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
