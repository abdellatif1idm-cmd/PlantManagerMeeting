"use client";
import { useState } from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function MultiCta() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ExpandingClassName = isExpanded ? "h-21 opacity-100" : "h-0 opacity-0";
  return (
    <div className="relative group size-fit z-50">
      <button
        color="orange"
        className="cursor-pointer rounded-full bg-(--orange-9) flex items-center relative shining-cta"
        onClick={() => {
          setIsExpanded((prev) => !prev);
        }}
        onBlur={() => {
          setIsExpanded(false);
        }}
      >
        <span className="px-6 py-2 text-sm lg:text-xl lg:px-10 font-medium">
          Devenir Partenaire
        </span>
        <i className="ri-arrow-down-s-line text-sm lg:text-xl h-full absolute right-2 lg:right-3 top-0 content-center" />
      </button>
      <div
        className={`${ExpandingClassName} overflow-hidden absolute w-full left-0 top-12 duration-200 flex flex-col gap-y-1  delay-50 group-hover:h-21 group-hover:opacity-100 bg-(--orange-10)/30 p-2 rounded-2xl`}
      >
        <Link href={`/participate/stand`} className="w-full">
          <Button
            className="w-full! cursor-pointer!"
            radius="full"
            color="orange"
            variant="classic"
          >
            <span className="text-lg">Stand</span>
          </Button>
        </Link>
        <Link href={`/participate/sponsoring`} className="w-full">
          <Button
            className="w-full! cursor-pointer!"
            radius="full"
            color="orange"
            variant="classic"
          >
            <span className="text-lg">Sponsoring</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
