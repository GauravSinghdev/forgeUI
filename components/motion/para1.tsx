"use client";

import { motion } from "framer-motion";

const HeroSecPara = () => {
  return (
    <>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="max-w-[600px] text-muted-foreground md:text-xl"
      >
        ForgeUI helps you create stunning components with ease. Build faster,
        design better, and save time.
      </motion.p>
    </>
  );
};

export default HeroSecPara;
