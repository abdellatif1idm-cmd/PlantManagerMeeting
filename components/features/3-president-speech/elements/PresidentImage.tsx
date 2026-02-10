"use client";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import { motion } from "motion/react";
import Image from "next/image";

const PresidentImage = () => {
  return (
    <MNBlurWrapper
      className="w-4/5 lg:w-1/2 order-1 lg:order-2"
      initialPosition="right"
      delay={0.2}
    >
      <div className="w-full aspect-3/4 overflow-hidden p-2 relative">
        <Image
          src="https://res.cloudinary.com/dzcarbymi/image/upload/v1758731065/Hicham_RAHIOUI_al4qy1.jpg"
          alt="BackgroundImage"
          className="object-cover object-top w-full h-full pointer-events-none select-none"
          fill
          sizes="100%"
          priority
          decoding="async"
        />
        <ImageTexture/>
      </div>
    </MNBlurWrapper>
  );
};

const ImageTexture = () => {
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        className="size-full absolute inset-0 bg-(--accent-5)"
      />
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="size-full absolute inset-0 bg-(--color-background)"
      />
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="size-full absolute inset-0 bg-(--accent-8)"
      />
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 1 }}
        className="size-full absolute inset-0 bg-(--accent-12)"
      />
    </>
  );
};

export default PresidentImage;
