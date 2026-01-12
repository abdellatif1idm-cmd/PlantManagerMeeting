"use client";
import React, { memo } from "react";
import Image from "next/image";
import MNBlurWrapper from "./MNBlurWrapper";

const BackgroundThreads = ({ className }: { className?: string }) => {
  return (
    <div className="absolute inset-0 bg-(--color-background) mask-y-from-80% mask-y-to-100% overflow-hidden select-none pointer-events-none -z-10">
      <div
        className={`absolute inset-0 mix-blend-screen opacity-40 ${
          className ?? ""
        }`}
      >
        <MNBlurWrapper
          initialPosition="center"
          delay={0.2}
          duration={0.6}
          className="absolute inset-0"
        >
          <Image
            src="https://res.cloudinary.com/dzcarbymi/image/upload/v1767737215/imd_texture_black_c7la3c.webp"
            alt="Background texture"
            fill
            sizes="100vw"
            className="object-cover mask-x-from-70% mask-x-to-100%"
          />
        </MNBlurWrapper>
      </div>
    </div>
  );
};

export default memo(BackgroundThreads);
