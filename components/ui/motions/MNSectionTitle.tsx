"use client";
import React, { memo, useMemo } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const MNSectionTitle = ({ title }: { title: string }) => {
  const letters = useMemo(() => title.split(""), [title]);

  return (
    <h2 className="text-2xl lg:text-3xl text-center mb-8 overflow-hidden">
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="inline-flex flex-wrap px-2"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block font-normal uppercase"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </h2>
  );
};

export default memo(MNSectionTitle);
