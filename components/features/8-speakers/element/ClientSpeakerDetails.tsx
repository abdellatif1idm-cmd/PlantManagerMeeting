"use client";

import { useEffect, useState } from "react";
import SpeakerDetails from "./SpeakerDetails";

export default function ClientSpeakerDetails() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0); // Delay the state update

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (!mounted) return null;

  return <SpeakerDetails />;
}