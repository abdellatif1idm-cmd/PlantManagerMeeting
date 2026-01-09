"use client";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import { motion } from "motion/react";
import { useState } from "react";
import CountUp from "react-countup";

interface KeyFiguresCardProps {
  label: string;
  value: string;
  icon: string;
  isPlus: boolean;
  index: number;
}

const KeyFiguresCard = ({
  label,
  value,
  icon,
  isPlus,
  index,
}: KeyFiguresCardProps) => {
  const [startAnimation, setStartAnimation] = useState(false);
  return (
    <MNBlurWrapper initialPosition="bottom" delay={index / 5}>
      <motion.div
        onViewportEnter={() => {
          setStartAnimation(true);
        }}
        className="w-44 aspect-square bg-(--accent-11) p-1 rounded-xl"
      >
        <div className="w-full h-full relative flex flex-col justify-center items-center gap-y-2 bg-(--accent-6) rounded-lg p-4 shadow-md">
          <i
            className={`${icon} absolute text-8xl text-(--accent-11) opacity-30`}
          />
          <div className="text-4xl font-bold z-0 relative flex items-center">
            <CountUp
              start={0}
              end={startAnimation ? parseInt(value) : 0}
              duration={2.5}
              separator=""
              useEasing={true}
            />{" "}
            {isPlus && (
              <i className="ri-add-line absolute text-xl flex items-center right-0 translate-x-full" />
            )}
          </div>
          <span className="text-sm font-medium text-center z-0">{label}</span>
        </div>
      </motion.div>
    </MNBlurWrapper>
  );
};

export default KeyFiguresCard;
