import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import PlanPricingTable from "./PlanPricingTable";

const DynamicPlanCard = ({
  image,
  price = "",
}: {
  image: string;
  price: string;
}) => {
  return (
    <MNBlurWrapper>
      <div className="w-full aspect-video lg:aspect-3/4 p-10 group overflow-hidden">
        <div className="relative size-full rounded-xl perspective-distant">
          {/* FRONT */}
          <div className="dynamic-plan-card z-0">
            <Image
              src={image}
              alt={`plan`}
              fill
              className="size-full object-cover blur-xs"
            />
            <div className="absolute size-full flex flex-col items-center justify-center text-4xl text-shadow-sm text-shadow-black/50">
              <span className="text-xs">MAD</span>
              <div>{price}</div>
              <span className="text-xs">Hors Taxes</span>
            </div>
          </div>

          {/* BACK */}
          <div className="dynamic-plan-card z-10 backface-hidden">
            <Image
              src={image}
              alt={`plan`}
              fill
              className="size-full object-cover blur-xs"
            />
            <div className="absolute size-full flex flex-col items-center justify-center text-4xl text-shadow-sm text-shadow-black/50">
              <span className="text-xs">MAD</span>
              <div>{price}</div>
              <span className="text-xs">Hors Taxes</span>
            </div>
          </div>
        </div>
      </div>

      <PlanPricingTable />
    </MNBlurWrapper>
  );
};

export default DynamicPlanCard;
