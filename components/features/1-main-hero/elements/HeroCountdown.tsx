"use client";
import dynamic from "next/dynamic";
import { zeroPad } from "react-countdown";
import EventBaseListFr from "@/data/fr/1-EventBase.json";

const CountDown = dynamic(() => import("react-countdown"), {
  ssr: false,
});

const HeroCountdown = () => {
  return (
    <div className="w-full flex items-center justify-center z-10">
      <div className="w-5/6 lg:w-1/2 pt-4">
        <CountDown
          className="z-10!"
          date={EventBaseListFr.EventDate}
          zeroPadTime={2}
          zeroPadDays={2}
          renderer={({ days, hours, minutes, seconds }) => (
            <>
              <div className="w-full flex items-center justify-center gap-x-2 lg:gap-x-4  ">
                <CountCard label="jours" value={zeroPad(days)} />
                <CountSeparator />
                <CountCard label="heures" value={zeroPad(hours)} />
                <CountSeparator />
                <CountCard label="minutes" value={zeroPad(minutes)} />
                <CountSeparator />
                <CountCard label="secondes" value={zeroPad(seconds)} />
              </div>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default HeroCountdown;

const CountCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div
      key={label}
      className="size-16 lg:size-16 backdrop-blur-xs shadow-2xl flex flex-col items-center justify-center rounded-md aspect-square outline-2 outline-(--accent-10)"
    >
      <h1 className="text-base 2xl:text-lg font-orbitron font-semibold text-shadow-[0_0_8px] text-shadow-white">
        {value}
      </h1>
      <p className="text-[10px] font-light font-orbitron capitalize">{label}</p>
    </div>
  );
};

const CountSeparator = () => {
  return <span className="text-[10px] lg:text-xl font-semibold">:</span>;
};
