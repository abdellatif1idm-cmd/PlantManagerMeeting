"use client";
import React, { useEffect, useRef, useState } from "react";
import editionsData from "@/data/fr/15-EventEditions.json";
import Link from "next/link";
import Section from "@/components/layout/Section";

export default function EditionsTimeline() {
  return (
    <Section title="Éditions">
      <div className="container mx-auto relative mask-y-from-95% mask-y-to-100%">
        <section className="w-full py-24 relative" id="timeline-section">
          <TimelinePath />
          <div className="mx-auto max-w-4xl px-4 relative">
            <ul className="space-y-20">
              {editionsData.map((item, i) => {
                const offset =
                  i % 2 === 0 ? "md:-translate-x-24" : "md:translate-x-24";
                return (
                  <li
                    key={item.id}
                    className={`relative flex flex-col items-center md:flex-row md:justify-center ${offset}`}
                  >
                    {/* icon node */}
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-(--accent-10)">
                      {new Date(item.date).getFullYear().toString()}
                    </div>

                    {/* connector spacing */}
                    <div className="h-6 md:h-auto md:w-10" />

                    {/* content */}
                    <Link
                      href={`/editions?e=${item.id}`}
                      className="max-w-sm rounded-xl backdrop-blur-lg border-2 border-(--accent-10) hover:bg-(--accent-8)/50 hover:scale-105 transition-all p-6 text-center md:text-left"
                    >
                      <span className="text-sm font-semibold tracking-wide">
                        {item.topic}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </Section>
  );
}

const TimelinePath = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pathLength, setPathLength] = useState(0);

  const speedMultiplier = 1; // adjust speed here

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!pathRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // progress relative to section
      let scrollProgress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);

      // apply speed multiplier
      scrollProgress *= speedMultiplier;

      // clamp 0 → 1
      scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);

      pathRef.current.style.strokeDashoffset = `${pathLength * (1 - scrollProgress)}`;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathLength]);

  return (
    <div
      ref={sectionRef}
      className="absolute px-12 inset-0 pointer-events-none z-0"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-(--accent-10)/70 drop-shadow-[0_0_10px_cyan] blur-xs"
      >
        <path
          ref={pathRef}
          d="M6.00249 3.85208C6.00249 3.85208 105.556 122.716 214.502 204.352C455.445 384.896 1034.15 143.777 1036 444.852C1037.86 746.546 4.14856 415.158 6.00249 716.852C7.85262 1017.93 1036 608.771 1036 909.852C1036 1210.93 6.92851 938.273 6.00249 1239.35C5.07552 1540.74 1038 1021.85 1038 1393.85C1038 1869.17 5.81733 1332.28 6.00246 1633.85C6.18755 1935.36 1147.9 1688.08 1038 1968.85C1011.94 2035.43 687.663 1993.06 495.502 2032.85C336.759 2065.72 520.002 2165.85 520.002 2165.85"
          strokeWidth={10}
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
        />
      </svg>
    </div>
  );
};
