"use client";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "@/context/store/store";
import { resetSpeaker } from "@/context/slices/SpeakerSlice";
import Modal from "@/components/ui/modals/Modal";
import { ScrollArea } from "@radix-ui/themes";

export default function SpeakerDetails() {
  const speaker = useSelector((state: RootState) => state.speaker);
  const dispatch = useDispatch();
  if (!speaker.isDisplayed) return null;

  return (
    <Modal
      closeModal={() => dispatch(resetSpeaker())}
      open={speaker.isDisplayed}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="p-2 w-11/12 lg:w-3xl lg:min-w-3xl rounded-md max-sm:h-[80%] relative"
      >
        <ScrollArea type="hover" scrollbars="vertical">
          <div className="w-full grid grid-cols-1 group md:grid-cols-2 items-stretch gap-8 relative overflow-hidden">
            <SpeakerFigure />
            <SpeakerInfos />
          </div>
        </ScrollArea>
        <SpeakerDetailsClose />
      </motion.div>
    </Modal>
  );
}

const SpeakerFigure = () => {
  const speaker = useSelector((state: RootState) => state.speaker);

  return (
    <figure className="w-full grid grid-cols-5 items-center justify-stretch relative col-span-1 select-none overflow-hidden">
      <motion.h1
        className={`col-span-1 flex items-start align-middle text-white/30 justify-center text-6xl md:text-7xl uppercase *:text-center w-full z-10 font-extrabold top-0 left-0 h-full`}
        style={{
          WebkitTextStrokeWidth: "0.5px",
          WebkitTextStrokeColor: "white",
          writingMode: "vertical-rl",
        }}
        initial={{ transform: "translateX(-100%)" }}
        animate={{ transform: "translateX(0%)" }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        {speaker.passageType.toLocaleLowerCase() == "panel" ? (
          <>
            <p>p</p>
            <p>a</p>
            <p>n</p>
            <p>e</p>
            <p>l</p>
          </>
        ) : (
          <>
            <p>k</p>
            <p>e</p>
            <p>y</p>
            <p>n</p>
            <p>o</p>
            <p>t</p>
            <p>e</p>
          </>
        )}
      </motion.h1>
      <div className="w-full col-span-4 flex items-end aspect-3/4 relative overflow-hidden">
        <div
          className="w-full flex items-end h-full aspect-3/4 overflow-hidden relative"
          style={{ borderRadius: "0% 100% 0% 100% / 60% 60% 40% 40% " }}
        >
          <motion.div
            className="w-full h-4/5 overflow-hidden"
            style={{ borderRadius: "0% 100% 0% 100% / 60% 60% 40% 40% " }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <div className="w-full h-full bg-pattern mix-blend-overlay"></div>
          </motion.div>
          <SpeakerDetailsImage className="absolute inset-0 mx-2 z-20" />
        </div>
        <SpeakerDetailsImage className="absolute inset-0 mx-2 z-30 mask-b-from-55% mask-b-to-0% " />
      </div>
    </figure>
  );
};

const SpeakerDetailsImage = ({ className }: { className: string }) => {
  const speaker = useSelector((state: RootState) => state.speaker);

  return (
    <motion.div
      className={className}
      initial={{ transform: "translateX(-150%)" }}
      animate={{ transform: "translateX(0%)" }}
      transition={{ duration: 0.5, delay: 0.15, ease: "linear" }}
    >
      <Image
        src={speaker.image}
        alt={`Portrait of speaker`}
        fill
        className="w-full h-full object-cover"
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
        style={{
          objectFit: "cover",
          objectPosition: "center top", // Focus on face area for portraits
        }}
        // Additional optimization for modern formats
        unoptimized={false}
      />
    </motion.div>
  );
};

const SpeakerInfos = () => {
  const speaker = useSelector((state: RootState) => state.speaker);

  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-col justify-evenly gap-y-4 col-span-1 px-2 py-4 relative z-20 overflow-hidden">
      <div className=" flex flex-col gap-y-3">
        <div className="w-fit flex flex-col-reverse">
          <motion.h2
            className={`font-orbitron text-3xl animate-pulse w-fit px-4 text-center border-2 align-middle text-white rounded text-shadow-xs tracking-wider drop-shadow-[0_2px_0_var(--color-text)]`}
            initial={{ transform: "translateX(-200%)" }}
            animate={{ transform: "translateX(0%)" }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {speaker.passageTime}
          </motion.h2>
          <motion.h2
            className={`font-orbitron text-2xl font-normal py-1 w-fit rounded-md text-shadow-xs text-white drop-shadow-[0_2px_0_var(--color-text)]`}
            initial={{ transform: "translateX(-200%)" }}
            animate={{ transform: "translateX(0%)" }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            {speaker.passageDate}
          </motion.h2>
        </div>
        <motion.p
          className=" border-l-4 px-1 text-base font-medium align-middle text-white inline"
          initial={{ transform: "translateX(-200%)" }}
          animate={{ transform: "translateX(0%)" }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <span className="inline text-(--accent-11) font-semibold  drop-shadow-[0_1px_0_var(--color-text)]">
            Thème :
          </span>
          <span className="inline last-line"> {speaker.passageSubject}</span>
        </motion.p>
      </div>

      {/* --- */}
      <div className=" flex flex-col gap-y-3">
        <motion.h1
          className="text-2xl font-semibold capitalize bg-(--accent-2) text-white py-1 px-8 w-fit rounded-md text-shadow-xs"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {`${speaker.firstName} ${speaker.lastName}`}
        </motion.h1>
        <motion.h4
          className="text-base text-white font-normal w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {speaker.description}
        </motion.h4>
        <motion.h4
          className="py-1 text-base text-white w-fit font-normal whitespace-pre-line"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          Entreprise :{" "}
          <span className="uppercase font-medium text-(--accent-10) drop-shadow-[0_2px_0_var(--color-text)]">
            {speaker.company}
          </span>
        </motion.h4>
      </div>
    </div>
  );
};

const SpeakerDetailsClose = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(resetSpeaker());
      }}
      className="text-white outline-none cursor-pointer absolute top-2 right-2 z-30"
    >
      <i className="text-lg ri-close-line bg-(--accent-8)/30 hover:bg-(--accent-8) rounded-full p-0.5" />
    </button>
  );
};
