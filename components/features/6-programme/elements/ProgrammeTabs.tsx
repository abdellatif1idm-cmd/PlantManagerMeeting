"use client";
import ProgrammeCard from "./ProgrammeCard";
import ProgrammeDownload from "./ProgrammeDownload";
import EventProgrammeListFr from "@/data/fr/6-EventProgramme.json";

const Programme = EventProgrammeListFr;

export default function ProgrammeTabs() {
  const currentDay = Programme.day1;

  return (
    <div className="flex flex-col gap-8">

      {/* Day label + download row */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full
            bg-[color-mix(in_srgb,var(--accent-9)_12%,transparent)]
            border border-[color-mix(in_srgb,var(--accent-9)_30%,transparent)]
            text-[var(--accent-9)]"
          >
            {currentDay.dayDate}
          </span>
        </div>
        <ProgrammeDownload downloadable />
      </div>

      {/* Day title */}
      <p className="text-sm italic text-white/30 max-w-[60ch]">
        {currentDay.dayTitle}
      </p>

      {/* Timeline */}
      <div className="relative flex flex-col">
        <div className="absolute top-0 bottom-0 hidden lg:block left-28 w-px
          bg-gradient-to-b from-transparent
          via-[color-mix(in_srgb,var(--accent-9)_30%,transparent)]
          to-transparent"
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