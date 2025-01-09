"use client";

import { Shapes } from "lucide-react";
import { motion } from "motion/react";

export default function CodeMotion() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      drag
      whileDrag={{ scale: 1.2 }}
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
    >
      <Shapes className="w-1/2 h-1/2 text-primary dark:text-primary-foreground" />
    </motion.div>
  );
}
