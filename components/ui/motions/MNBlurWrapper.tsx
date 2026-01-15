"use client";
import React, { memo } from "react";
import { motion } from "motion/react";

interface MNBlurWrapperProps {
  initialPosition?: "top" | "left" | "bottom" | "right" | "center";
  duration?: number;
  delay?: number;
  mode?: "animate" | "whileInView";
  className?: string;
  children?: React.ReactNode;
}

const POSITION_MAP = {
  top: { x: 0, y: -60 },
  bottom: { x: 0, y: 60 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
  center: { x: 0, y: 0 },
} as const;

const MNBlurWrapper = ({
  initialPosition = "bottom",
  duration = 0.5,
  delay = 0,
  mode = "whileInView",
  className,
  children,
}: MNBlurWrapperProps) => {
  const initial = {
    ...POSITION_MAP[initialPosition],
    opacity: 0,
    filter: "blur(5px)",
  };

  const animate = {
    x: 0,
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  };

  return (
    <motion.div
      initial={initial}
      animate={mode === "animate" ? animate : undefined}
      whileInView={mode === "whileInView" ? animate : undefined}
      transition={{
        duration,
        ease: "easeOut",
        delay,
      }}
      viewport={
        mode === "whileInView"
          ? { once: true, amount: 0.3 }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default memo(MNBlurWrapper);
