"use client";
import CalendarFigure from "./CalendarFigure";
import CalendarInfos from "./CalendarInfos";
import { motion } from "motion/react";
import { EventCalendarTypes } from "@/types/EventCalendarTypes";

export default function CalendarCard({
  calendar,
}: {
  calendar: EventCalendarTypes;
}) {
  return (
    <motion.div
      key={calendar.eventTitle}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative grid w-full grid-cols-1 overflow-hidden rounded-md select-none bg-linear-to-br from-(--accent-8) to-(--accent-4)"
    >
      <CalendarFigure
        image={calendar.eventThumbnail}
        city={calendar.eventCity}
      />
      <CalendarInfos calendar={calendar} />
      {/* tags */}
      <CalendarEditionTag edition={calendar.eventEdition} />
      {/* <CalendarCardTag /> */}
    </motion.div>
  );
}

// const CalendarCardTag = () => {
//   return (
//     <div className="absolute bottom-0 right-0 flex items-end justify-end aspect-video w-28 ">
//       <button className="relative z-50 flex items-center justify-center px-4 py-2 cursor-pointer text-white hover:text-white gap-x-2 group">
//         <i className="duration-200 cursor-pointer size-4 group-hover:scale-115" />
//         <span className="font-medium">Visiter</span>
//       </button>
//     </div>
//   );
// };

const CalendarEditionTag = ({ edition }: { edition: string }) => {
  return (
    <div className="w-16 shadow-lg shadow-text md:w-18 2xl:w-22 aspect-3/4 bg-linear-to-br  text-white from-(--accent-9) flex flex-col items-center justify-center to-(--accent-4) absolute right-4 top-0 rounded-b-lg z-20">
      <h1 className="relative text-3xl text-center lg:text-4xl 2xl:text-5xl w-fit">
        {edition}
        <span className="text-[10px] md:text-xs absolute top-2 right-0 translate-x-full ">
          {parseInt(edition) > 1 ? "ème" : "ère"}
        </span>
      </h1>
      <h3 className="text-xs font-medium text-center lg:text-base">Édition</h3>
    </div>
  );
};
