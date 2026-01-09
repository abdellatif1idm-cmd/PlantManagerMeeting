import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import Image from "next/image";
import React from "react";
import EventRoyalSpeechListFr from "@/data/fr/2-EventRoyalSpeech.json";


const RoyalImage = () => {
  return (
    <MNBlurWrapper className="w-4/5 lg:w-1/2" initialPosition="left" delay={0.2}>
      <div className="w-full aspect-3/4 p-2 relative">
        <Image
          src={EventRoyalSpeechListFr.EventRoyalSpeechImage}
          alt="Sa Majesté le Roi Mohammed VI"
          className="object-cover w-full h-full pointer-events-none select-none"
          fill
          sizes="100%"
          priority
          decoding="async"
        />
      </div>
    </MNBlurWrapper>
  );
};

export default RoyalImage;
