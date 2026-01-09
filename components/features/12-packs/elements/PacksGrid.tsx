"use client";
import { useState } from "react";
import { EventPack } from "@/types/EventPackTypes";
import PacksCard from "./PacksCard";
import EventPacksListFr from "@/data/fr/12-EventPacks.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Button, Dialog } from "@radix-ui/themes";
import PricingTable from "./PricingTable";
const EventPacksListFrConst = EventPacksListFr as EventPack[];

const PacksGrid = ({ type = "grid" }: { type?: "grid" | "slide" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPricingTableOpen, setIsPricingTableOpen] = useState(false);
  return (
    <>
      {type === "grid" ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {EventPacksListFrConst.map((pack, index) => (
            <PacksCard
              title={pack.title}
              slug={pack.slug}
              price={pack.price}
              benefits={pack.benefits}
              key={index}
              color={pack.color}
              setIsPricingTableOpen={setIsPricingTableOpen}
            />
          ))}
        </div>
      ) : (
        <div className="w-full overflow-hidden">
          <Swiper
            spaceBetween={50}
            slidesPerView={6}
            loop
            modules={[Autoplay]}
            onSwiper={() => setIsLoaded(true)}
            breakpoints={{
              // Mobile: <640px
              0: { slidesPerView: 1, spaceBetween: 15 },

              // sm: ≥640px
              640: { slidesPerView: 2, spaceBetween: 15 },

              // md: ≥768px
              768: { slidesPerView: 3, spaceBetween: 20 },

              // lg: ≥1024px
              1024: { slidesPerView: 3, spaceBetween: 20 },

              // xl: ≥1280px
              1280: { slidesPerView: 3.5, spaceBetween: 20 },

              // 2xl: ≥1536px
              1536: { slidesPerView: 4, spaceBetween: 20 },
            }}
            speed={3000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            style={{
              transitionTimingFunction: "linear",
              opacity: isLoaded ? "1" : "0",
            }}
            className="mask-x-from-80% mask-x-to-100%"
            centeredSlides
          >
            {[...EventPacksListFrConst, ...EventPacksListFrConst].map(
              (pack, index) => (
                <SwiperSlide key={index}>
                  <PacksCard
                    title={pack.title}
                    slug={pack.slug}
                    price={pack.price}
                    benefits={pack.benefits}
                    key={index}
                    color={pack.color}
                    setIsPricingTableOpen={setIsPricingTableOpen}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      )}

      <PricingTable
        isPricingTableOpen={isPricingTableOpen}
        setIsPricingTableOpen={setIsPricingTableOpen}
      />
    </>
  );
};

export default PacksGrid;
