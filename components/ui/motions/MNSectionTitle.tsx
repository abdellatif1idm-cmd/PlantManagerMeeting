"use client";
import React from "react";
import { motion } from "motion/react";

const MNSectionTitle = ({ title }: { title: string }) => {
  // Split title into letters for staggered animation
  const letters = title.split("");

  return (
    <h2 className="text-2xl lg:text-3xl  text-center mb-8 overflow-hidden">
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.8 }}
        className="inline-flex flex-wrap px-2"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                rotate: -10,
                scale: 0.8,
                filter: "blur(10px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.3,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                },
              },
            }}
            className="inline-block font-normal uppercase"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
    </h2>
  );
};

export default React.memo(MNSectionTitle);
