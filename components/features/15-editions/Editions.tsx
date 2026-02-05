"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import editionsData from "@/data/fr/15-EventEditions.json";
import EditionVideo from "./elements/EditionVideo";
import EditionTopic from "./elements/EditionTopic";
import EditionInfo from "./elements/EditionInfo";
import EditionGallery from "./elements/EditionGallery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Editions() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const foundedParams = searchParams?.get("e");

  // Derive current edition directly from URL - no state needed!
  const currentEdition = editionsData.find(
    (item) => item.id === Number(foundedParams),
  )
    ? Number(foundedParams) - 1
    : 0;

  const edition = editionsData[currentEdition];

  const goToNext = () => {
    const nextIndex = (currentEdition + 1) % editionsData.length;
    router.push(`${pathname}?e=${nextIndex + 1}`, { scroll: false });
  };

  const goToPrevious = () => {
    const prevIndex =
      (currentEdition - 1 + editionsData.length) % editionsData.length;
    router.push(`${pathname}?e=${prevIndex + 1}`, { scroll: false });
  };

  return (
    <div className="p-2">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Éditions</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-lg bg-(--accent-6) text-white hover:bg-(--accent-6)/80 transition-colors"
              aria-label="Previous edition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="px-4 py-2 bg-(--accent-12)/10 text-muted font-semibold rounded-lg">
              {currentEdition + 1} / {editionsData.length}
            </span>
            <button
              onClick={goToNext}
              className="p-2 rounded-lg bg-(--accent-6) text-white hover:bg-(--accent-6)/80 transition-colors"
              aria-label="Next edition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Section */}
          <div className="lg:col-span-2">
            <EditionVideo edition={edition} />
          </div>

          {/* Sidebar - Edition Selector */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-4">
              Toutes les éditions
            </h2>
            <div className="space-y-3 max-h-150 overflow-y-auto pr-2">
              {editionsData.map((ed, index) => (
                <button
                  key={ed.id}
                  onClick={() => {
                    router.push(pathname + "?e=" + (index + 1), {
                      scroll: false,
                    });
                  }}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    currentEdition === index
                      ? "bg-(--accent-6) text-white shadow-lg"
                      : "bg-(--gray-4)/50 hover:bg-(--gray-4)/90"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
                        currentEdition === index
                          ? "bg-(--accent-8)"
                          : "bg-(--accent-3)/50"
                      }`}
                    >
                      {ed.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-sm mb-1 truncate ${
                          currentEdition === index
                            ? "opacity-100"
                            : "opacity-80"
                        }`}
                      >
                        {ed.topic}
                      </h3>
                      <p
                        className={`text-xs ${
                          currentEdition === index
                            ? "opacity-100"
                            : "opacity-80"
                        }`}
                      >
                        {ed.date}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Topic Details */}
        <div className="mt-6">
          <EditionTopic edition={edition} />
        </div>

        {/* Edition Info */}
        <div className="mt-6">
          <EditionInfo edition={edition} />
        </div>

        {/* Edition Gallery */}
        <div className="mt-6">
          <EditionGallery gallery={edition.gallery} />
        </div>
      </div>
    </div>
  );
}
