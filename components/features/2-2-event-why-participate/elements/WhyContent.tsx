'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import whyData from '@/data/fr/2-2-Event-why-participate.json';

interface Benefit {
  icon: string;
  title: string;
  text: string;
}

interface WhyData {
  title: string;
  benefits: Benefit[];
}

function FlipCard({ benefit, index, isVisible }: {
  benefit: Benefit;
  index: number;
  isVisible: boolean;
}) {
  const [phase, setPhase] = useState<'idle' | 'out' | 'in' | 'done'>('idle');

  useEffect(() => {
    if (!isVisible) return;
    const t = setTimeout(() => {
      setPhase('out');
      setTimeout(() => setPhase('in'), 380);
      setTimeout(() => setPhase('done'), 760);
    }, 300 + index * 200);
    return () => clearTimeout(t);
  }, [isVisible]); // eslint-disable-line

  return (
    <div
      className="relative w-full"
      style={{ zIndex: phase === 'out' || phase === 'in' ? 50 : 1 }}
    >
      {/* BACK */}
      {phase !== 'in' && phase !== 'done' && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{ background: 'transparent', minHeight: 340, borderRadius: 16 }}
          animate={{
            rotateY: phase === 'out' ? [0, 90] : 0,
            opacity: phase === 'out' ? [1, 0] : 1,
          }}
          transition={{ duration: 0.38, ease: [0.4, 0.0, 1.0, 1.0] }}
        />
      )}

      {/* FRONT */}
      {(phase === 'in' || phase === 'done') && (
        <motion.div
          className="rounded-2xl flex flex-col items-center p-8 relative overflow-hidden"
          style={{ minHeight: 340 }}
          animate={{ rotateY: phase === 'in' ? [-90, 0] : 0 }}
          initial={{ rotateY: -90 }}
          transition={{ duration: 0.38, ease: [0.0, 0.0, 0.6, 1.0] }}
          whileHover={
            phase === 'done'
              ? { y: -6, transition: { type: 'spring', stiffness: 300, damping: 18 } }
              : {}
          }
        >
          {/* ① Icon — fixed 64px, marginBottom fixe → ligne TOUJOURS à 24px sous l'icône */}
          <motion.div
            className="flex items-center justify-center relative"
            style={{
              width: 64,
              height: 64,
              flexShrink: 0,
              marginBottom: 24,
              color: 'var(--accent-9)',
              filter: 'drop-shadow(0 0 16px color-mix(in srgb, var(--accent-9) 60%, transparent))',
            }}
            animate={{ scale: [0.2, 1.25, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            dangerouslySetInnerHTML={{
              __html: benefit.icon.replace('<svg ', '<svg width="64" height="64" style="display:block;" '),
            }}
          />

          {/* ② Ligne accent — toujours à 24px sous l'icône, marginBottom fixe vers le titre */}
          <motion.div
            style={{
              background: 'var(--accent-9)',
              height: 2,
              width: 40,
              flexShrink: 0,
              marginBottom: 14,
            }}
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
          />

          {/* ③ Titre — left-aligned, même départ pour tt les cartes */}
          <motion.h3
            className="font-bold text-base leading-snug text-center"
            style={{
              color: 'rgba(255,255,255,0.97)',
              marginBottom: 10,
            }}
            animate={{ opacity: [0, 1], y: [8, 0] }}
            transition={{ duration: 0.35, delay: 0.18 }}
          >
            {benefit.title}
          </motion.h3>

          {/* ④ Description — left-aligned */}
          <motion.p
            className="text-sm leading-relaxed text-center"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            animate={{ opacity: [0, 1], y: [6, 0] }}
            transition={{ duration: 0.35, delay: 0.25 }}
          >
            {benefit.text}
          </motion.p>
        </motion.div>
      )}

      {/* Idle placeholder */}
      {phase === 'idle' && (
        <div style={{ minHeight: 340, borderRadius: 16 }} />
      )}
    </div>
  );
}

const WhyContent: React.FC = () => {
  const data = whyData as WhyData;
  const benefits: Benefit[] = data?.benefits?.slice(0, 8) || [];
  const triggerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(triggerRef, { once: true, margin: '-60px' });

  if (!data) return null;

  return (
    <div className="w-full flex flex-col gap-12 container mx-auto px-4 lg:px-6">

      {/* Header */}
      <div className="relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-3"
        >
          <div
            className="w-1 h-10 rounded-full flex-shrink-0"
            style={{ background: 'var(--accent-9)' }}
          />
          <h2 className="text-3xl lg:text-5xl font-black leading-tight text-white">
            {data.title}
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pl-5 text-sm"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
        </motion.p>
      </div>

      {/* Grid — max 4 cols */}
      <div
        ref={triggerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        style={{ overflow: 'visible' }}
      >
        {benefits.map((benefit, index) => (
          <FlipCard key={index} benefit={benefit} index={index} isVisible={isInView} />
        ))}
      </div>

    </div>
  );
};

export default WhyContent;