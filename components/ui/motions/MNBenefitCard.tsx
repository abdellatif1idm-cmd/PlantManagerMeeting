"use client";
import React, { memo } from "react";
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
        y: 40,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="benefit-card aspect-9/3 sm:aspect-6/3 lg:aspect-9/3 xl:aspect-video rounded-lg p-0.5"
    >
      {children}
    </motion.div>
  );
};

export default memo(MNBenefitCard);
