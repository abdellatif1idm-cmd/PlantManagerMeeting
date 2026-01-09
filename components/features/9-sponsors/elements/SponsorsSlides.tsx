"use client";
import SponsorCard from "./SponsorCard";
import EventSponsorsListFr from "@/data/fr/9-EventSponsors.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

const SponsorsSlides = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full overflow-hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          loop
          modules={[Autoplay]}
          onSwiper={() => setIsLoaded(true)}
          breakpoints={{
            // Mobile: <640px
            0: { slidesPerView: 3, spaceBetween: 15 },

            // sm: ≥640px
            640: { slidesPerView: 3, spaceBetween: 15 },

            // md: ≥768px
            768: { slidesPerView: 3, spaceBetween: 20 },

            // lg: ≥1024px
            1024: { slidesPerView: 4, spaceBetween: 20 },

            // xl: ≥1280px
            1280: { slidesPerView: 6, spaceBetween: 20 },

            // 2xl: ≥1536px
            1536: { slidesPerView: 8, spaceBetween: 20 },
          }}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          style={{
            transitionTimingFunction: "linear",
            opacity: isLoaded ? "1" : "0",
          }}
          className="mask-x-from-80% mask-x-to-100%"
        >
          {[...EventSponsorsListFr.silver, ...EventSponsorsListFr.silver].map(
            (sponsor, index) => (
              <SwiperSlide key={index}>
                <SponsorCard key={sponsor.id} image={sponsor.image} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      {/* -------------- */}
      <div className="w-full overflow-hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          loop
          modules={[Autoplay]}
          onSwiper={() => setIsLoaded(true)}
          breakpoints={{
            // Mobile: <640px
            0: { slidesPerView: 3, spaceBetween: 15 },

            // sm: ≥640px
            640: { slidesPerView: 3, spaceBetween: 15 },

            // md: ≥768px
            768: { slidesPerView: 3, spaceBetween: 20 },

            // lg: ≥1024px
            1024: { slidesPerView: 4, spaceBetween: 20 },

            // xl: ≥1280px
            1280: { slidesPerView: 6, spaceBetween: 20 },

            // 2xl: ≥1536px
            1536: { slidesPerView: 8, spaceBetween: 20 },
          }}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection:true
          }}
          style={{
            transitionTimingFunction: "linear",
            opacity: isLoaded ? "1" : "0",
          }}
          className="mask-x-from-80% mask-x-to-100%"
        >
          {[...EventSponsorsListFr.silver, ...EventSponsorsListFr.silver].map(
            (sponsor, index) => (
              <SwiperSlide key={index}>
                <SponsorCard key={sponsor.id} image={sponsor.image} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      {/* -------------- */}
      <div className="w-full overflow-hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          loop
          modules={[Autoplay]}
          onSwiper={() => setIsLoaded(true)}
          breakpoints={{
            // Mobile: <640px
            0: { slidesPerView: 3, spaceBetween: 15 },

            // sm: ≥640px
            640: { slidesPerView: 3, spaceBetween: 15 },

            // md: ≥768px
            768: { slidesPerView: 3, spaceBetween: 20 },

            // lg: ≥1024px
            1024: { slidesPerView: 4, spaceBetween: 20 },

            // xl: ≥1280px
            1280: { slidesPerView: 6, spaceBetween: 20 },

            // 2xl: ≥1536px
            1536: { slidesPerView: 8, spaceBetween: 20 },
          }}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          style={{
            transitionTimingFunction: "linear",
            opacity: isLoaded ? "1" : "0",
          }}
          className="mask-x-from-80% mask-x-to-100%"
        >
          {[...EventSponsorsListFr.silver, ...EventSponsorsListFr.silver].map(
            (sponsor, index) => (
              <SwiperSlide key={index}>
                <SponsorCard key={sponsor.id} image={sponsor.image} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SponsorsSlides;
