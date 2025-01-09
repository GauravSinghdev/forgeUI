"use client";
import { motion } from "framer-motion";

const HeroSecHead = () => {
  return (
    <>
      <motion.h1
        // style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="font-bold overflow-hidden whitespace-nowrap py-1 tracking-tighter text-2xl sm:text-3xl xl:text-5xl dark:text-[#FAF9F6] bg-gradient-to-r from-blue-500 via-slate-300 to-orange-700 text-transparent bg-clip-text"
      >
        Design with confidence
      </motion.h1>
    </>
  );
};

export default HeroSecHead;
