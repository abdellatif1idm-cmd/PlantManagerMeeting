"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type EventCardProps = {
  title: string;
  edition: {
    number: string;
    suffix: string;
  };
  imageUrl: string;
  website: {
    active: boolean;
    url: string;
  };
};

export default function EventCard({ title, edition, imageUrl, website }: EventCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative w-full overflow-hidden cursor-pointer"
      style={{ aspectRatio: '4/3' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Full bleed image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        quality={85}
        decoding="async"
        className="object-cover pointer-events-none select-none transition-transform duration-700 ease-out"
        style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
      />

      {/* Gradient: transparent top → dark bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Visit button — top right */}
      {website.active && (
        <Link
          href={website.url}
          target="_blank"
          onClick={e => e.stopPropagation()}
          className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-200"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--teal-9)';
            e.currentTarget.style.borderColor = 'var(--teal-9)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
          }}
        >
          Site
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </Link>
      )}

      {/* Bottom: title + edition side by side */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">

        {/* Title + accent line */}
        <div
          className="flex flex-col gap-2 flex-1 min-w-0 transition-transform duration-500 ease-out"
          style={{ transform: hovered ? 'translateY(0)' : 'translateY(6px)' }}
        >
          <div
            className="h-px"
            style={{
              background: 'var(--teal-9)',
              transition: 'width 0.4s ease',
              width: hovered ? 48 : 32,
            }}
          />
          <h3
            className="font-bold leading-snug"
            style={{
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              color: 'rgba(255,255,255,0.97)',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </h3>
        </div>

        {/* Edition badge — bottom right of card */}
        <div className="flex flex-col items-center flex-none">
          <div className="flex items-start leading-none">
            <span
              className="font-black leading-none"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.6rem)',
                color: 'rgba(255,255,255,0.95)',
                letterSpacing: '-0.04em',
              }}
            >
              {edition.number}
            </span>
            <sup
              className="font-bold text-[9px] mt-1"
              style={{ color: 'var(--teal-9)' }}
            >
              {edition.suffix}
            </sup>
          </div>
          <span
            className="text-[7px] font-bold tracking-[0.35em] uppercase"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Éd.
          </span>
        </div>

      </div>
    </div>
  );
}