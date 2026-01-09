import Image from "next/image";
import React from "react";

interface SponsorPropsType {
  image: string;
}

export default function SponsorCard({ image }: SponsorPropsType) {
  return (
    <div className="w-full aspect-video bg-[#FFFDFD] shadow-lg active:shadow-xs duration-200 rounded-md relative z-10">
      {image != "" ? (
        <div className="relative w-full h-full mix-blend-multiply">
          <Image
            src={image}
            alt={`sponsor`}
            fill
            className="w-full h-full object-contain inset-0 pointer-events-none select-none"
            // Responsive sizes for different breakpoints
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
            // Performance optimizations
            //   priority={shouldPrioritize}
            //   loading={shouldPrioritize ? "eager" : "lazy"}
            // Image quality and format optimization
            quality={85} // Good balance between quality and file size
            // Performance hints
            decoding="async"
            // Prevent layout shift
            // Additional optimization for modern formats
            unoptimized={false}
          />
        </div>
      ) : (
        <div className="w-full h-full text-black/50 animate-pulse flex items-center justify-center">
          <h6 className="capitalize font-medium whitespace-pre-line text-center text-lg ">
            coming {"\n"} soon
          </h6>
        </div>
      )}
    </div>
  );
}
