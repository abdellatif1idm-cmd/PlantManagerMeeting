"use client";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

interface ProgrammeCardProps {
  time: string;
  title: string;
  subTitles?: string[];
  activities?: string[];
  index: number;
}

export default function ProgrammeCard({ time, title, subTitles, activities, index }: ProgrammeCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState(false);
  const hasDetails = (subTitles?.length ?? 0) + (activities?.length ?? 0) > 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        onClick={() => hasDetails && setOpen(o => !o)}
        className="w-full text-left group"
        style={{ cursor: hasDetails ? 'pointer' : 'default' }}
      >
        <div
          className="w-full grid gap-4 py-4 px-4 lg:px-0 lg:py-5 transition-all duration-200 rounded-lg lg:rounded-none"
          style={{
            gridTemplateColumns: 'auto 1fr auto',
            background: open ? 'color-mix(in srgb, var(--accent-9) 5%, transparent)' : 'transparent',
            borderLeft: open ? '2px solid var(--accent-9)' : '2px solid transparent',
          }}
        >
          {/* Time — monospace, accent */}
          <div
            className="flex items-center justify-end pr-6 lg:pr-8 min-w-[88px] lg:min-w-[112px]"
          >
            <time
              className="text-xs lg:text-sm font-bold tabular-nums whitespace-nowrap transition-colors duration-200"
              style={{
                fontFamily: "'Share Tech Mono', 'Courier New', monospace",
                color: open ? 'var(--accent-9)' : 'rgba(255,255,255,0.3)',
                letterSpacing: '0.05em',
              }}
            >
              {time}
            </time>
          </div>

          {/* Dot on the rail */}
          <div className="absolute hidden lg:flex items-center" style={{ left: 108, top: '50%', transform: 'translateY(-50%)' }}>
            <div
              className="w-2 h-2 rounded-full transition-all duration-200"
              style={{ background: open ? 'var(--accent-9)' : 'rgba(255,255,255,0.15)' }}
            />
          </div>

          {/* Title */}
          <div className="flex items-center">
            <h3
              className="text-sm lg:text-base font-semibold leading-snug transition-colors duration-200"
              style={{ color: open ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.72)' }}
            >
              {title}
            </h3>
          </div>

          {/* Chevron */}
          {hasDetails && (
            <div className="flex items-center pr-2">
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ color: open ? 'var(--accent-9)' : 'rgba(255,255,255,0.2)' }}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.div>
            </div>
          )}
        </div>
      </button>

      {/* Expanded details */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              className="ml-0 lg:ml-[128px] mb-4 px-4 py-4 rounded-lg flex flex-col gap-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {subTitles?.length ? (
                <div className="flex flex-col gap-1.5">
                  {subTitles.map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 flex-none" style={{ background: 'var(--accent-9)' }} />
                      <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{s}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              {activities?.length ? (
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    Activités
                  </span>
                  {activities.map((a, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 flex-none" style={{ background: 'rgba(255,255,255,0.2)' }} />
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{a}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Separator line */}
      <div className="h-px mx-4 lg:mx-0" style={{ background: 'rgba(255,255,255,0.04)' }} />
    </motion.div>
  );
}