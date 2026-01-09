"use client";
import { PackColor } from "@/types/EventPackTypes";
import { Badge, Button, ScrollArea } from "@radix-ui/themes";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const PacksCard = ({
  title,
  price,
  benefits,
  slug,
  color,
  setIsPricingTableOpen,
}: {
  title: string;
  price: string;
  benefits: string[];
  slug: string;
  color?: PackColor;
  setIsPricingTableOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="w-full relative flex flex-col items-center justify-between aspect-9/14 bg-linear-to-b from-(--gray-8) to-(--gray-4)/50 backdrop-blur-[2px] rounded-lg shadow-xl shadow-black/50 overflow-hidden pack-card">
      <PackCardHeader title={title} price={price} color={color} />
      <PackCardContent benefits={benefits} />
      <PackCardFooter
        type={slug}
        color={color}
        setIsPricingTableOpen={setIsPricingTableOpen}
      />
    </div>
  );
};

const PackCardHeader = ({
  title,
  price,
  color,
}: {
  title: string;
  price: string;
  color?: PackColor;
}) => {
  return (
    <div className="w-full aspect-video flex flex-col items-center justify-center gap-y-1 relative overflow-hidden">
      <Badge
        color={color}
        variant="outline"
        radius="full"
        className="text-4xl! shadow-none! px-4! 2xl:text-5xl! text-shadow-sm! text-shadow-black/50!"
      >
        {title}
      </Badge>
      <h1 className="relative flex flex-col">
        <span className="text-white text-4xl 2xl:text-5xl font-semibold text-shadow-xs text-shadow-black/50 text-center">
          {price}
        </span>
        <span className="absolute right-0 translate-x-full text-xs 2xl:text-base">
          MAD
        </span>
        <span className="text-xs text-center 2xl:text-base">Hors taxes</span>
      </h1>
      <span className="text-white/10 select-none pointer-events-none text-8xl 2xl:text-9xl text-nowrap font-semibold absolute left-1/4 top-2">
        Pack
      </span>
    </div>
  );
};

const PackCardContent = ({ benefits }: { benefits: string[] }) => {
  const benefitsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!benefitsContainerRef.current) return;

    benefitsContainerRef.current.scrollTop =
      benefitsContainerRef.current.scrollHeight;
  }, []);
  return (
    <ScrollArea
      type="hover"
      scrollbars="vertical"
      className="w-full! flex-1! flex! mask-t-from-90%"
      ref={benefitsContainerRef}
    >
      <div className="w-full h-full flex flex-col items-center mt-4 gap-y-2">
        {benefits?.map((benefit, index) => (
          <PackCardBenefit key={index} title={benefit} />
        ))}
      </div>
    </ScrollArea>
  );
};

const PackCardBenefit = ({ title }: { title: string }) => {
  return (
    <div className="w-5/6 grid grid-cols-[20px_1fr] gap-x-2 items-start">
      <CheckCircle2 className="size-5 content-center mt-0.5" />
      <p className="text-base content-start block">{title}</p>
    </div>
  );
};

const PackCardFooter = ({
  type,
  color,
  setIsPricingTableOpen,
}: {
  type: string;
  color?: PackColor;
  setIsPricingTableOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="w-full h-24 flex flex-col items-center justify-evenly">
      <Link
        href={`sponsoring/${type}`}
        className="w-full group flex items-center justify-center"
      >
        <Button className="w-5/6!" color={color}>
          <span className="">Réserver</span>
        </Button>
      </Link>
      <button
        onClick={() => {
          setIsPricingTableOpen(true);
        }}
        className="cursor-pointer text-sm underline"
      >
        Détails
      </button>
    </div>
  );
};

export default PacksCard;
