"use client";
import { setDisplayed } from "@/context/slices/SpeakerSlice";
import { SpeakerInfos } from "@/types/SpeakerInfosTypes";
import { Badge } from "@radix-ui/themes";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { motion } from "motion/react";

export default function SpeakerCard({
  speaker,
  delay = 0,
}: {
  speaker: SpeakerInfos;
  delay: number;
}) {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: delay }}
      onClick={() => dispatch(setDisplayed({ isDisplayed: true, ...speaker }))}
      className="w-full cursor-pointer aspect-3/4 flex items-end relative group overflow-hidden rounded-md shadow-[0px_2px_1px_2px_var(--gray-4)] backdrop-blur-xs"
    >
      <div className="w-full h-4/5 rounded-t-xl bg-pattern" />
      <SpeakerImage image={speaker.image} />
      <div className="w-full absolute left-0 bottom-0 h-20 bg-linear-to-b from-transparent to-(--accent-8)/10 text-white flex flex-col items-center justify-end pb-2 -space-y-1">
        <div className="absolute size-full backdrop-blur-2xl inset-0 z-0 mask-t-from-10% mask-t-to-100%" />
        <p className=" font-medium tracking-wide text-base relative">
          {speaker.firstName}
        </p>
        <p className=" font-semibold tracking-wide text-lg relative ">
          {speaker.lastName}
        </p>
      </div>
      <Badge className="bg-linear-to-br! text-sm! from-(--accent-4) to-(--accent-8) text-white! text-shadow-xs text-shadow-text absolute left-1 top-1 rounded-tl-md! rounded-br-md! rounded-none!">
        {speaker.passageType}
      </Badge>
      <div className="absolute w-full h-full pointer-events-none flex items-start justify-end p-1 duration-100">
        <div className=" hidden lg:flex items-center justify-center duration-200 bg-linear-to-br from-(--gray-4) to-(--gray-8)  px-1 py-0.5 shadow-md rounded-tr-md rounded-bl-md">
          <i className="ri-information-line content-center text-white" />
          <span className="text-white text-sm font-medium w-0 overflow-hidden text-nowrap duration-200 group-hover:w-8 text-center">
            Info
          </span>
        </div>
      </div>
      <i className="ri-information-line text-sm size-5 flex items-center justify-center absolute right-1 top-1 text-white lg:hidden bg-linear-to-br from-(--accent-4) to-(--accent-8)  px-0.5 py-0.5 rounded-tr-md rounded-bl-md" />
    </motion.div>
  );
}

const SpeakerImage = ({ image }: { image: string }) => {
  return (
    <div className="absolute inset-0">
      <Image
        src={image}
        alt={`Portrait of speaker`}
        fill
        className="w-full h-full object-cover"
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
        style={{
          objectFit: "cover",
          objectPosition: "center top", // Focus on face area for portraits
        }}
        // Additional optimization for modern formats
        unoptimized={false}
      />
    </div>
  );
};
