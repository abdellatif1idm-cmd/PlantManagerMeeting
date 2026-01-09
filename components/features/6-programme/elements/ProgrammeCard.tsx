"use client";
import { ProgrammeCardTypes } from "@/types/ProgrammeCardTypes";
import { motion } from "motion/react";

interface ProgrammeCardsProps extends ProgrammeCardTypes {
  index: number;
}

export default function ProgrammeCard({
  time,
  title,
  subTitles,
  activities,
  index,
}: ProgrammeCardsProps) {
  return (
    <motion.article
      className="w-full grid lg:grid-cols-[2fr_8fr] p-8 items-center gap-x-4 rounded-md bg-linear-to-r from-(--accent-5)/20 border-2  border-(--accent-10) to-(--accent-9) shadow-md relative z-30"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -200 : 200,
        filter: "blur(10px)",
      }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Time */}
      <time
        className="flex text-lg font-medium font-orbitron lg:justify-center lg:text-xl text-(--accent-12) text-shadow-[0px_2px_0px_var(--accent-1)]"
        dateTime={time}
        itemProp="startDate"
      >
        {time}
      </time>

      {/* Content */}
      <div className="flex flex-col gap-y-2">
        <h3
          className="text-lg font-medium border-l-4 border-(--accent-11) px-2 lg:text-xl text-white"
          itemProp="name"
        >
          {title}
        </h3>

        {subTitles?.length ? (
          <ul className="flex flex-col list-none text-white gap-y-1 capitalize font-normal">
            {subTitles?.map((subtitle, index) => (
              <li
                key={index}
                className="grid grid-cols-[10px_1fr] items-center text-sm text-white"
                itemProp="description"
              >
                <i className="ri-checkbox-blank-circle-fill text-[4px] content-center inline-block" />{" "}
                {subtitle}
              </li>
            ))}
          </ul>
        ) : null}

        {activities?.length ? (
          <ul className="flex flex-col px-4 gap-y-1 font-normal">
            {activities.map((activity, index) => (
              <li
                key={index}
                className="grid grid-cols-[10px_1fr] items-center text-sm text-white"
              >
                <i className="ri-checkbox-blank-circle-fill text-[4px] content-center inline-block" />{" "}
                {activity}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </motion.article>
  );
}
