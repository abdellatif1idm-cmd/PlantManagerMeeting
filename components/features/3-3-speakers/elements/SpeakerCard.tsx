"use client";
import React from 'react';
import { motion } from "motion/react";
import Image from "next/image";
import { Speaker } from "@/types/speakersTypes";

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      {/* Image avec animation texture */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <ImageTexture />
      </div>

      {/* Informations */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{speaker.name}</h3>
        <p className="text-sm font-medium text-(--accent-9)">{speaker.function}</p>
        <p className="text-sm text-gray-600 mb-2">{speaker.company}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{speaker.bio}</p>
        
        {/* Tags industrie */}
        <div className="flex flex-wrap gap-1 mt-3">
          {speaker.industry.map((ind: string, idx: number) => (
            <span 
              key={idx} 
              className="text-xs px-2 py-1 bg-(--accent-9)/10 rounded-full text-emerald-900 "
            >
              {ind}
            </span>
          ))}
        </div>

        {/* Pays */}
        <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
          <i className="ri-map-pin-line" />
          <span>{speaker.country}</span>
        </div>
      </div>
    </div>
  );
};

// Animation texture inspirée de PresidentImage
const ImageTexture: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="size-full absolute inset-0 bg-(--accent-5)"
      />
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="size-full absolute inset-0 bg-(--color-background)"
      />
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="size-full absolute inset-0 bg-(--accent-8)"
      />
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="size-full absolute inset-0 bg-(--accent-12)"
      />
    </>
  );
};

export default SpeakerCard;