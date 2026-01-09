"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect } from "react";

export default function Modal({
  children,
  open,
  closeModal,
}: {
  children: Readonly<React.ReactNode>;
  open: boolean;
  closeModal: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed w-full h-full left-0 top-0 bg-black/35 flex items-center justify-center backdrop-blur-md z-9999!"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
