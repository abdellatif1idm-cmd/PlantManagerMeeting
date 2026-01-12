"use client";
import React from "react";
import { motion } from "motion/react";

interface MNBlurWrapperProps {
  initialPosition?: "top" | "left" | "bottom" | "right" | "center";
  duration?: number;
  children?: React.ReactNode;
  delay?: number;
  mode?: "animate" | "whileInView";
  className?: string;
}

const MNBlurWrapper = ({
  initialPosition = "bottom",
  duration = 0.5,
  delay = 0,
  mode = "whileInView",
  className,
  children,
}: MNBlurWrapperProps) => {
  const getInitialPosition = () => {
    switch (initialPosition) {
      case "top":
        return { x: 0, y: -60 };
      case "bottom":
        return { x: 0, y: 60 };
      case "left":
        return { x: -60, y: 0 };
      case "right":
        return { x: 60, y: 0 };
      case "center":
        return { x: 0, y: 0 };
      default:
        return { x: 0, y: 60 };
    }
  };

  return (
    <>
      {mode === "whileInView" ? (
        <motion.div
          initial={{
            ...getInitialPosition(),
            opacity: 0,
            filter: "blur(10px)",
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration,
            ease: "easeOut",
            delay,
          }}
          viewport={{ once: true, amount: "some" }}
          className={className}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial={{
            ...getInitialPosition(),
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration,
            ease: "easeOut",
            delay,
          }}
          viewport={{ once: true, amount: "some" }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default React.memo(MNBlurWrapper);
