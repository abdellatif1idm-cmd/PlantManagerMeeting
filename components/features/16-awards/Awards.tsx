"use client";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import awardsDataFr from "@/data/fr/16-EventAwards.json";
import AwardsGallery from "./elements/AwardsGallery";

/* -------------------- Scroll Hook -------------------- */
const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
};

/* -------------------- Award Image -------------------- */
const AwardImage = ({ src, title }: { src?: string; title?: string }) => (
  <div className="relative group w-64 md:w-72 lg:w-80">
    <div className="absolute -inset-1 rounded-xl bg-linear-to-r from-gray-600 to-gray-800 blur opacity-30 transition group-hover:opacity-50" />

    <div className="relative aspect-square rounded-xl overflow-hidden bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
      {src ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={title ?? "award image"}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent" />
        </div>
      ) : (
        <>
          <i className="ri-award-fill text-6xl md:text-7xl text-gray-600" />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent" />
        </>
      )}
    </div>
  </div>
);

/* -------------------- Award Content -------------------- */
interface Award {
  id: number;
  title: string;
  description: string;
  image?: string;
}

const AwardContent = ({ award }: { award: Award }) => (
  <div className="space-y-5 max-w-xl">
    <span className="text-xs tracking-widest uppercase text-gray-500 font-semibold">
      Award {award.id.toString().padStart(2, "0")}
    </span>

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
      {award.title}
    </h2>

    <p className="text-base md:text-lg text-gray-400 leading-relaxed whitespace-pre-line">
      {award.description}
    </p>
  </div>
);

/* -------------------- Award Section -------------------- */
const AwardSection = ({
  award,
  index,
  scrollY,
}: {
  award: Award;
  index: number;
  scrollY: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.05 * (isEven ? 1 : -1)}px)`,
        }}
      />

      <MNBlurWrapper duration={0.8} initialPosition={isEven ? "left" : "right"}>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-20">
            {/* Image */}
            <div
              className={`flex justify-center items-center ${
                isEven ? "md:order-1" : "md:order-2"
              }`}
            >
              <AwardImage src={award.image} title={award.title} />
            </div>

            {/* Text */}
            <div className={isEven ? "md:order-2" : "md:order-1"}>
              <AwardContent award={award} />
            </div>
          </div>
        </div>
      </MNBlurWrapper>

      {/* Ambient glow */}
      <div
        className={`absolute w-40 h-40 top-1/2 blur-xl animate-pulse -translate-y-1/2 ${
          isEven ? "right-0" : "left-0"
        }`}
      >
        <div
          className={`w-40 h-40 rotate-12 animate-spin bg-(--accent-10)/50 `}
          style={{
            animationDuration: "4s",
            clipPath:
              "polygon(0% 15%, 50% 50%, 15% 0%, 85% 0%, 50% 50%, 100% 15%, 100% 85%, 50% 50%, 85% 100%, 15% 100%, 50% 50%, 0% 85%)",
          }}
        />
      </div>

      {/* Section divider */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

const AwardsOverview = () => {
  return (
    <section className="container mx-auto grid lg:grid-cols-3">
      <div className="w-full aspect-square my-2 flex items-center justify-center">
        <div className="size-3/5 relative">
          <Image
            fill
            priority={true}
            src={
              "https://res.cloudinary.com/dzcarbymi/image/upload/v1770291473/LOGO_AWARDS_brsawj.png"
            }
            className="w-full h-full object-cover rounded select-none"
            alt="IMD AWARDS"
            sizes="100%"
          />
        </div>
      </div>
      <div className="lg:col-span-2 px-2 size-full flex items-center">
        <p className="text-lg text-center lg:text-start">
          Les <span className="text-[#DBBD7B] font-medium">IMD Awards</span>{" "}
          récompensent l’excellence dans le monde industriel, en célébrant les
          entreprises et individus qui établissent de nouveaux standards en
          matière d’innovation, de leadership et d’impact. Cette cérémonie
          annuelle est l’un des moments forts de l’événement, rassemblant le
          meilleur du secteur.
        </p>
      </div>
    </section>
  );
};

/* -------------------- Page -------------------- */
export default function Awards() {
  const scrollY = useScrollY();

  return (
    <main className="text-white">
      <AwardsOverview />
      <div className="p-4">
        <AwardsGallery />
      </div>
      {awardsDataFr.map((award, index) => (
        <AwardSection
          key={award.id}
          award={award}
          index={index}
          scrollY={scrollY}
        />
      ))}
    </main>
  );
}
