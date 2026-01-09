"use client";
import { motion } from "motion/react";

const HeroPathTexture = () => {
  return (
    <>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 backdrop-blur-2xl bg-(--color-background)/80 mask-r-from-20% mask-r-to-100%"
      />
    </>
  );
};

export default HeroPathTexture;
