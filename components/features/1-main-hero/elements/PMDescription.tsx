"use client";
import { motion } from "motion/react";

const PMDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-8"
    >
      <p className="flex items-center justify-center gap-2 text-base lg:text-lg bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
        <i className="ri-dart-fill text-(--accent-9)" />
        <span>Le rendez-vous exclusif des directeurs d'usines et décideurs industriels</span>
      </p>
    </motion.div>
  );
};

export default PMDescription;