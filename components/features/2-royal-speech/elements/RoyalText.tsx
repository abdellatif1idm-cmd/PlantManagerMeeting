"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const TITLE = "ORIENTATIONS STRATÉGIQUES";
const PARAGRAPHS = [
  "Dans un environnement industriel en pleine transformation, marqué par l'accélération de l'Industrie 4.0, la pression sur la performance opérationnelle et les exigences croissantes en matière de durabilité, le rôle des dirigeants d'usines évolue profondément.",
  "Aujourd'hui, l'usine n'est plus seulement un centre de production. Elle devient un écosystème intelligent où la data, l'excellence opérationnelle et le capital humain convergent pour créer de la valeur durable.",
  "Face à des chaînes d'approvisionnement de plus en plus complexes, les Plant Managers sont appelés à devenir de véritables architectes de la performance industrielle.",
];
const CALLOUT = "Construire une industrie plus agile, plus résiliente et plus durable n'est plus une option : c'est une nécessité stratégique pour rester compétitif à l'échelle régionale et internationale.";

const RoyalText = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex flex-col gap-8 relative">

      {/* Label */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="h-px w-10" style={{ background: 'var(--accent-9)' }} />
        <span className="text-[10px] font-bold tracking-[0.5em] uppercase"
          style={{ color: 'color-mix(in srgb, var(--accent-9) 80%, white)' }}>
        </span>
      </motion.div>

      {/* Title — each word reveals from below with clip */}
      <div className="overflow-hidden">
        <motion.h2
          className="font-black leading-tight"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-0.02em',
            color: 'rgba(255,255,255,0.97)',
          }}
          initial={{ y: '105%' }}
          animate={isInView ? { y: '0%' } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        >
          {TITLE}
        </motion.h2>
      </div>

      {/* Accent line — grows left to right */}
      <motion.div
        className="h-px"
        style={{ background: 'var(--accent-9)', originX: 0, maxWidth: 80 }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Paragraphs — staggered fade + slide */}
      <div className="flex flex-col gap-4">
        {PARAGRAPHS.map((p, i) => (
          <motion.p
            key={i}
            className="text-sm lg:text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '56ch' }}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {p}
          </motion.p>
        ))}
      </div>

      {/* Callout block — slides in from left */}
      <motion.div
        className="relative pl-5 py-1"
        style={{ borderLeft: '2px solid var(--accent-9)' }}
        initial={{ opacity: 0, x: -24 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
      >
        <p
          className="text-sm lg:text-base leading-relaxed font-semibold"
          style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '52ch' }}
        >
          {CALLOUT}
        </p>
      </motion.div>

    </div>
  );
};

export default RoyalText;