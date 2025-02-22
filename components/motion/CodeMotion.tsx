"use client";

import { Shapes } from "lucide-react";
import { motion } from "motion/react";

export default function CodeMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // initial={{ x: 200 }}
      // animate={{ x: 0 }}
      // transition={{ duration: 0.8, ease: "easeInOut" }}
      whileHover={{ scale: 1.2 }}
      drag
      whileDrag={{ scale: 1.2 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
    >
      <Shapes className="w-1/2 h-1/2 text-primary dark:text-primary-foreground" />
    </motion.div>
  );
}
