"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CalendarCard from "./CalendarCard";
import { Autoplay, EffectCards } from "swiper/modules";
import EventCalendarsListFr from "@/data/fr/10-EventCalendars.json";
import "swiper/css";
import "swiper/css/effect-cards";

export default function CalendarSlides() {
  return (
    <div className="w-full text-white">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay, EffectCards]}
        effect="cards"
        grabCursor={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        speed={800}
        loop
        className="w-full p-2 md:w-2xl drop-shadow-[0px_5px_5px_var(--gary-2)] "
        draggable
      >
        {[...EventCalendarsListFr, ...EventCalendarsListFr].map(
          (cdr, index) => (
            <SwiperSlide key={index}>
              <CalendarCard key={cdr.eventTitle} calendar={cdr} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
