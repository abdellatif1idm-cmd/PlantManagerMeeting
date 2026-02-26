"use client";
import { useState } from "react";
import ProgrammeCard from "./ProgrammeCard";
import ProgrammeDownload from "./ProgrammeDownload";
import EventProgrammeListFr from "@/data/fr/6-EventProgramme.json";

const Programme = EventProgrammeListFr;

export default function ProgrammeTabs() {
  const [activeTab, setActiveTab] = useState<"day1" | "day2">("day1");
  const hasDay2 = Boolean(Programme.day2);

  const currentDay = activeTab === "day1" ? Programme.day1 : Programme.day2;
  if (!currentDay) return null;

  return (
    <div className="flex flex-col gap-8">

      {/* Day switcher + download row */}
      <div className="flex items-center justify-between gap-4 flex-wrap">

        {/* Day tabs — minimal pill style */}
        {hasDay2 ? (
          <div
            className="flex rounded-full p-1 gap-1"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {(["day1", "day2"] as const).map((day) => {
              const isActive = activeTab === day;
              const label = day === "day1" ? Programme.day1?.dayDate : Programme.day2?.dayDate;
              return (
                <button
                  key={day}
                  onClick={() => setActiveTab(day)}
                  className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: isActive ? 'var(--accent-9)' : 'transparent',
                    color: isActive ? '#000' : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full"
              style={{
                background: 'color-mix(in srgb, var(--accent-9) 12%, transparent)',
                border: '1px solid color-mix(in srgb, var(--accent-9) 30%, transparent)',
                color: 'var(--accent-9)',
              }}
            >
              {Programme.day1?.dayDate}
            </span>
          </div>
        )}

        <ProgrammeDownload downloadable />
      </div>

      {/* Day title */}
      <p className="text-sm italic" style={{ color: 'rgba(255,255,255,0.3)', maxWidth: '60ch' }}>
        {currentDay.dayTitle}
      </p>

      {/* Timeline */}
      <div className="relative flex flex-col">

        {/* Vertical timeline rail */}
        <div
          className="absolute top-0 bottom-0 hidden lg:block"
          style={{
            left: 112,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--accent-9) 30%, transparent) 10%, color-mix(in srgb, var(--accent-9) 30%, transparent) 90%, transparent)',
          }}
        />

        <div className="flex flex-col gap-1">
          {currentDay.programme.map((prg, index) => (
            <ProgrammeCard
              key={index}
              time={prg.time}
              title={prg.title}
              subTitles={prg.subTitles ?? undefined}
              activities={prg.activities ?? undefined}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}