"use client";
import { motion } from "motion/react";

const PMTopic = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-4"
    >
      PLANT MANAGER MEETING
      <span className="block text-xl md:text-2xl lg:text-3xl font-light mt-4 text-white/90">
        L'excellence opérationnelle au cœur de la compétitivité industrielle
      </span>
    </motion.h1>
  );
};

export default PMTopic;