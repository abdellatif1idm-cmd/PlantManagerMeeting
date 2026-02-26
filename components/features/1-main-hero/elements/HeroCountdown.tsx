"use client";

import dynamic from "next/dynamic";
import { zeroPad } from "react-countdown";
import EventBaseListFr from "@/data/fr/1-EventBase.json";

const CountDown = dynamic(() => import("react-countdown"), { ssr: false });

const Unit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div
      className="relative font-black tabular-nums leading-none"
      style={{
        fontSize: 'clamp(2.2rem, 5vw, 5.5rem)',
        letterSpacing: '-0.04em',
        color: 'rgba(255,255,255,0.97)',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {value}
      <div
        className="absolute -bottom-1 left-0 right-0 h-px"
        style={{ background: 'var(--accent-9)' }}
      />
    </div>
    <span
      className="text-[8px] sm:text-[9px] font-bold tracking-[0.3em] sm:tracking-[0.35em] uppercase"
      style={{ color: 'rgba(255,255,255,0.3)' }}
    >
      {label}
    </span>
  </div>
);

const Sep = () => (
  <span
    className="font-black pb-5 sm:pb-6 select-none"
    style={{
      fontSize: 'clamp(1.4rem, 3vw, 3.5rem)',
      color: 'color-mix(in srgb, var(--accent-9) 60%, transparent)',
    }}
  >
    :
  </span>
);

const HeroCountdown = () => {
  if (!EventBaseListFr.EventDate) return null;

  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 items-center lg:items-start">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-px w-8 rounded-full" style={{ background: 'var(--accent-9)' }} />
        <span
          className="text-[10px] font-bold tracking-[0.4em] uppercase"
          style={{ color: 'color-mix(in srgb, var(--accent-9) 80%, white)' }}
        >
          Compte à rebours
        </span>
      </div>

      {/* Countdown */}
      <CountDown
        date={EventBaseListFr.EventDate}
        zeroPadTime={2}
        zeroPadDays={2}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <div className="flex items-center gap-3 py-3">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-9)' }} />
                <span
                  className="text-sm font-semibold tracking-widest uppercase"
                  style={{ color: 'var(--accent-9)' }}
                >
                  Événement en cours
                </span>
              </div>
            );
          }

          return (
            <div className="flex items-end gap-2 sm:gap-3 lg:gap-5">
              <Unit value={zeroPad(days)}    label="Jours"    />
              <Sep />
              <Unit value={zeroPad(hours)}   label="Heures"   />
              <Sep />
              <Unit value={zeroPad(minutes)} label="Minutes"  />
              <Sep />
              <Unit value={zeroPad(seconds)} label="Secondes" />
            </div>
          );
        }}
      />
    </div>
  );
};

export default HeroCountdown;