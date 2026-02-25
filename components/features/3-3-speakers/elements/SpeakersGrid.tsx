"use client";
import React, { useState, useMemo } from 'react';
import { motion } from "motion/react";
import SpeakerCard from "./SpeakerCard";

import speakersData from "@/data/fr/event-speakers.json"

import { SpeakersData, Speaker } from "@/types/speakersTypes";

const data = speakersData as SpeakersData;

const SpeakersGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const speakers: Speaker[] = data.EventSpeakersList;

  // Récupérer toutes les industries uniques pour le filtre
  const industries: string[] = useMemo(() => {
    const allIndustries = speakers.flatMap(s => s.industry);
    return ["all", ...new Set(allIndustries)];
  }, [speakers]);

  // Filtrer les speakers
  const filteredSpeakers: Speaker[] = useMemo(() => {
    if (filter === "all") return speakers;
    return speakers.filter(s => s.industry.includes(filter));
  }, [filter, speakers]);

  return (
    <div className="w-full">
      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {industries.map((industry, index) => (
          <button
            key={index}
            onClick={() => setFilter(industry)}
            className={`px-4 py-2 rounded-full text-sm transition-all cursor-pointer ${
              filter === industry
                ? "bg-(--accent-9) text-white"
                : "bg-(--accent-9)/10 hover:bg-(--accent-9)/20"
            }`}
          >
            {industry === "all" ? "Tous" : industry}
          </button>
        ))}
      </div>

      {/* Grille des speakers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSpeakers.map((speaker, index) => (
          <motion.div
            key={speaker.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SpeakerCard speaker={speaker} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersGrid;