"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

interface KeyFiguresCardProps {
  label: string;
  value: string;
  icon: string;
  isPlus: boolean;
  index: number;
}

const KeyFiguresCard = ({ label, value, icon, isPlus, index }: KeyFiguresCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView) setStarted(true);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group flex flex-col"
    >
      {/* Top accent bar — full width, thin */}
      <motion.div
        className="w-full h-px"
        style={{ background: 'color-mix(in srgb, var(--accent-9) 40%, rgba(255,255,255,0.08))' }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
      />

      {/* Main body */}
      <div
        className="flex flex-col gap-6 pt-8 pb-6 px-2 relative overflow-hidden"
      >
        {/* Big number — dominates */}
        <div
          className="flex items-end gap-1 leading-none font-black"
          style={{
            fontSize: 'clamp(4rem, 8vw, 6rem)',
            letterSpacing: '-0.04em',
            color: 'rgba(255,255,255,0.95)',
          }}
        >
          <CountUp
            start={0}
            end={started ? parseInt(value) : 0}
            duration={2.5}
            separator=""
            useEasing
          />
          {isPlus && (
            <span
              className="mb-2 text-3xl font-black"
              style={{ color: 'var(--accent-9)' }}
            >
              +
            </span>
          )}
        </div>

        {/* Bottom row: icon + label */}
        <div className="flex items-center gap-3">
          <div
            className="flex-none flex items-center justify-center rounded-lg"
            style={{
              width: 36,
              height: 36,
              background: 'color-mix(in srgb, var(--accent-9) 15%, transparent)',
              border: '1px solid color-mix(in srgb, var(--accent-9) 30%, transparent)',
            }}
          >
            <i className={`${icon} text-base`} style={{ color: 'var(--accent-9)' }} />
          </div>
          <span
            className="text-xs font-semibold tracking-widest uppercase leading-snug"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {label}
          </span>
        </div>
      </div>

      {/* Bottom accent bar — grows on hover */}
      <motion.div
        className="h-px"
        style={{ background: 'rgba(255,255,255,0.07)' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{ background: 'var(--accent-9)' }}
        initial={{ width: '0%' }}
        animate={isInView ? { width: '35%' } : {}}
        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
      />
    </motion.div>
  );
};

export default KeyFiguresCard;