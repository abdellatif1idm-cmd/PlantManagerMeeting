"use client";
import React from "react";
import { motion } from "motion/react";
const MNBenefitCard = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.8,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: 3,
          delay: index * 0.05,
          type: "spring",
          stiffness: 500,
          damping: 30,
        },
      }}
      viewport={{ once: true, amount: 0.9 }}
      className="benefit-card transform-gpu transition-all aspect-9/3 sm:aspect-6/3 lg:aspect-9/3 xl:aspect-video rounded-lg p-0.5"
    >
      {children}
    </motion.div>
  );
};

export default React.memo(MNBenefitCard);
