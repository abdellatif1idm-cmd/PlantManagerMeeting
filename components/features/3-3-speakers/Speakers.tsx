import React from 'react';
import SpeakersGrid from "./elements/SpeakersGrid";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import speakersData from "@/data/fr/event-speakers.json"
import { SpeakersData as SpeakersDataType } from "@/types/speakersTypes";

const data = speakersData as SpeakersDataType;

const Speakers = () => {
  return (
    <section className="w-full relative overflow-hidden py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Titre de la section */}
        <MNBlurWrapper initialPosition="bottom" className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold border-l-4 border-(--accent-9) pl-4 inline-block">
            {data.EventSpeakersTitle}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            {data.EventSpeakersDescription}
          </p>
        </MNBlurWrapper>

        {/* Grille des speakers */}
        <SpeakersGrid />
      </div>
    </section>
  );
};

export default Speakers;