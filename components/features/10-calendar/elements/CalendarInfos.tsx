"use client";
import React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { fr } from "react-day-picker/locale";
import "react-day-picker/dist/style.css";
import Image from "next/image";
import { EventCalendarTypes } from "@/types/EventCalendarTypes";

export default function CalendarInfos({ calendar }:{calendar:EventCalendarTypes}) {
  return (
    <div className="w-full h-full relative px-4 py-8 lg:pb-6 lg:pt-2">
      <CalendarDaysGrid calendar={calendar} />
    </div>
  );
}

const CalendarDaysGrid = ({ calendar }:{calendar:EventCalendarTypes}) => {
  const highlighted = new Date(
    parseInt(calendar.eventYear),
    (parseInt(calendar.eventMonth)-1),
    parseInt(calendar.eventDay)
  );
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-3 items-center h-full md:p-4">
      <div className="w-full h-full flex flex-col md:items-center justify-center lg:justify-evenly gap-y-2 md:p-2">
        <CalendarEventLogo calendar={calendar} />
        <CalendarEventTitleDescription calendar={calendar} />
      </div>
      <div className="w-full justify-self-center bg-(--gray-1)/20 flex items-center justify-center  pointer-events-none rounded-md shadow">
        <DayPicker
          animate
          locale={fr}
          mode="single"
          selected={highlighted}
          month={highlighted}
          hideNavigation
          modifiersClassNames={{
            selected:
              "text-white! size-10 scale-85 flex items-center justify-center text-center !bg-gradient-to-br from-(--accent-10) to-(--gray-8) shadow rounded-full",
          }}
          className="w-full! flex items-center justify-center"
          classNames={{
            button_next: "fill-white",
            button_previous: "fill-white",
            chevron: "",
            day: "!text-white text-center",
            root: `${defaultClassNames.root} *:flex *:justify-center`,
            month_caption:
              "capitalize font-semibold text-center text-lg !w-full",
            weekdays: "w-full",
            month: "w-full",
            month_grid: "w-full",
          }}
        />
      </div>
    </div>
  );
};

const CalendarEventLogo = ({ calendar }:{calendar:EventCalendarTypes}) => {
  return (
    <div>
      <div className="w-36 aspect-video relative">
        <Image
          src={calendar.eventLogo}
          alt={calendar.eventTitle}
          fill
          className="w-full h-full object-contain"
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
          // Additional optimization for modern formats
          unoptimized={false}
        />
      </div>
    </div>
  );
};

const CalendarEventTitleDescription = ({ calendar }:{calendar:EventCalendarTypes}) => {
  return (
    <div className="w-full flex flex-col md:items-center gap-y-2">
      <h1 className="w-fit text-lg text-left md:text-center lg:text-xl leading-none font-semibold border-b">
        {calendar.eventTitle}
      </h1>
      <p className="text-sm opacity-70">{calendar.eventDescription}</p>
    </div>
  );
};