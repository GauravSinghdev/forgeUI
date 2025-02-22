"use client";
import { motion } from "framer-motion";

const HeroSecHead = () => {
  return (
    <>
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="font-bold overflow-hidden whitespace-nowrap py-1 text-3xl sm:text-4xl xl:text-5xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient"
      >
        Design with confidence
      </motion.h1>
    </>
  );
};

export default HeroSecHead;
