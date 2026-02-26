"use client";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import industrie from '../../../../public/images/speakers/industriePlantManager.png';

const RoyalImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative w-full flex justify-center lg:justify-end">

      {/* Clip-reveal: image slides in from right */}
      <motion.div
        className="relative w-4/5 lg:w-full overflow-hidden"
        style={{ aspectRatio: '3/4', borderRadius: 4 }}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <Image
          src={industrie}
          alt="Industrie Plant Manager"
          className="object-cover w-full h-full select-none pointer-events-none"
          fill
          sizes="(max-width: 1024px) 80vw, 420px"
          priority
          decoding="async"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent-9) 12%, transparent) 0%, transparent 50%)',
          }}
        />
      </motion.div>

      {/* Edition badge — floats top-left of image */}
      <motion.div
        className="absolute -top-4 -left-4 lg:-left-6 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: -4 } : {}}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'var(--accent-9)',
          color: '#000',
        }}
      >
        <span className="text-[9px] font-black tracking-[0.2em] uppercase">1ère</span>
        <span className="text-lg font-black leading-none">Éd.</span>
      </motion.div>

      {/* Thin accent line — bottom right extends out */}
      <motion.div
        className="absolute -bottom-6 right-0 h-px"
        style={{ background: 'color-mix(in srgb, var(--accent-9) 50%, transparent)' }}
        initial={{ width: 0 }}
        animate={isInView ? { width: '130%' } : {}}
        transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
      />

    </div>
  );
};

export default RoyalImage;