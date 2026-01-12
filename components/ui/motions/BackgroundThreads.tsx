import React from "react";
import Image from "next/image";
import MNBlurWrapper from "./MNBlurWrapper";

const BackgroundThreads = ({ className }: { className?: string }) => (
  <div className="absolute inset-0 bg-(--color-background) mask-y-from-80% mask-y-to-100% size-full overflow-hidden select-none -z-9999">
    <div
      className={`absolute size-full mix-blend-screen opacity-40 ${
        className || ""
      }`}
    >
      <MNBlurWrapper initialPosition="center" delay={0.5} className="size-full">
        <Image
          src={
            "https://res.cloudinary.com/dzcarbymi/image/upload/v1767737215/imd_texture_black_c7la3c.webp"
          }
          className="w-full h-full object-cover mask-x-from-70% mask-x-to-100% select-none"
          alt="threads-image"
          sizes="100%"
          fill
          priority
        />
      </MNBlurWrapper>
    </div>
  </div>
);

export default React.memo(BackgroundThreads);