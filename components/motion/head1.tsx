"use client";
import { motion } from "framer-motion";

const HeroSecHead = () => {
  return (
    <>
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="font-bold overflow-hidden whitespace-nowrap lg:py-2 text-3xl sm:text-4xl xl:text-6xl bg-gradient-to-r from-cyan-700 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient leading-8"
      >
        Design with confidence
      </motion.h1>
    </>
  );
};

export default HeroSecHead;
