// components/features/8-speakers/element/ClientSpeakerCard.tsx
"use client";

import { useEffect, useState } from "react";
import SpeakerCard from "./SpeakerCard";
import { SpeakerInfos } from "@/types/SpeakerInfosTypes";

export default function ClientSpeakerCard({
  speaker,
  delay = 0,
}: {
  speaker: SpeakerInfos;
  delay: number;
}) {
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0); // Delay the state update

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);


  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return (
      <div className="w-full aspect-3/4 rounded-md bg-gray-2 animate-pulse" />
    );
  }

  return <SpeakerCard speaker={speaker} delay={delay} />;
}