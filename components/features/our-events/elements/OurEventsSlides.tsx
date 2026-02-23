"use client";
import EventCard, { EventCardProps } from "@/components/ui/cards/EventCard";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import EventOrganizerEventsFr from "@/data/fr/EventOrganizerEvents.json";
import { Spinner } from "@radix-ui/themes";

export default function OurEventsSlides() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [idmEvents, setIdmEvents] = useState<EventCardProps[] | null>(null);

  const getIdmEventsHandler = async () => {
    try {
      const response = await fetch(
        "https://idmevents-781e0-default-rtdb.europe-west1.firebasedatabase.app/idm_events.json",
      );
      const data = await response.json();
      setIdmEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  getIdmEventsHandler();

  return (
    <>
      {idmEvents && idmEvents?.length > 0 && (
        <div className="w-full overflow-hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            loop
            modules={[Autoplay]}
            onSwiper={() => setIsLoaded(true)}
            breakpoints={{
              // Mobile: <640px
              0: { slidesPerView: 1.25, spaceBetween: 15 },

              // sm: ≥640px
              640: { slidesPerView: 2, spaceBetween: 15 },

              // md: ≥768px
              768: { slidesPerView: 2, spaceBetween: 20 },

              // lg: ≥1024px
              1024: { slidesPerView: 4, spaceBetween: 20 },

              // xl: ≥1280px
              1280: { slidesPerView: 4, spaceBetween: 20 },

              // 2xl: ≥1536px
              1536: { slidesPerView: 4, spaceBetween: 20 },
            }}
            speed={3000}
            autoplay={{
              delay: 1,
              pauseOnMouseEnter: true,
            }}
            style={{
              opacity: isLoaded ? "1" : "0",
            }}
            centeredSlides
            className="mask-x-from-80% mask-x-to-100%"
          >
            {[...idmEvents, ...idmEvents, ...idmEvents, ...idmEvents].map(
              (item, index) => (
                <SwiperSlide
                  key={index}
                  className="cursor-grab active:cursor-grabbing"
                >
                  <EventCard
                    title={item.title}
                    edition={item.edition}
                    imageUrl={item.imageUrl}
                    website={item.website}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      )}

      {!idmEvents && (
        <div className="w-full flex items-center justify-center h-72">
          <Spinner size={"3"} />
        </div>
      )}
    </>
  );
}
