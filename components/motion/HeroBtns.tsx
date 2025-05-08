"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const HeroBtns = () => {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col items-center gap-5 min-[400px]:flex-row"
    >
      <Link href="/components">
        <div className="relative group">
          <div className="absolute inset-0 bg-pink-800 bg-gradient-to-r from-pink-600 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="relative px-7 py-4 bg-black  dark:bg-black rounded-lg leading-none flex items-center text-white/90 hover:text-white">
            Browse Components
          </button>
        </div>
      </Link>
      <Link href="/customize">
        <Button variant="outline" className="border-2" size="lg">
          Customized
        </Button>
      </Link>
    </motion.div>
  );
};

export default HeroBtns;
