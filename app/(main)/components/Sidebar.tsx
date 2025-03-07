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
    {
      href: "/components",
      path: "/components",
      label: "Home",
      isButton: false,
    },
    {
      href: "/components/tilt-card",
      path: "/tilt-card",
      label: "Tilt Card",
      isButton: false,
    },
    {
      href: "/components/auth-form",
      path: "/auth-form",
      label: "Auth Form",
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
      label: "All Buttons",
      isButton: false,
    },
    {
      href: "/components/hanging-card",
      path: "/hanging-card",
      label: "Hanging Card",
      isButton: false,
    },
    {
      href: "/components/image-card",
      path: "/image-card",
      label: "Image Card",
      isButton: false,
    },
    {
      href: "/components/animated-accordian",
      path: "/animated-accordian",
      label: "Animated Accordian",
      isButton: false,
    },
    {
      href: "/components/animated-progress",
      path: "/animated-progress",
      label: "Animated Scrollbar",
      isButton: false,
    },
    {
      href: "/components/scramble-text",
      path: "/scramble-text",
      label: "Scramble Text",
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
                <Link
                  href={link.href}
                  className="flex justify-center text-center"
                >
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
                path === link.href
                  ? "border-primary text-primary tracking-widest font-bold text-lg border-r-2"
                  : ""
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
