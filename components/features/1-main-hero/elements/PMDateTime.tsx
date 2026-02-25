"use client";
import { motion } from "motion/react";
import { Popover, Button } from "@radix-ui/themes";
import Link from "next/link";

const PMDateTime = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <div className="flex items-center gap-3 text-sm lg:text-base bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
        <div className="flex items-center gap-1">
          <i className="ri-calendar-line" />
          <span>Première semaine d'avril</span>
        </div>
        <span className="text-white/50">|</span>
        <div className="flex items-center gap-1 relative">
          <i className="ri-map-pin-line" />
          <Popover.Root>
            <Popover.Trigger className="cursor-pointer hover:text-(--accent-9) transition-colors">
              <span>Tanger – Maroc</span>
            </Popover.Trigger>
            <Popover.Content className="bg-black/90! text-white border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <i className="ri-map-pin-range-line text-(--accent-9)" />
                <span>Tanger – Maroc</span>
              </div>
              <Link target="_blank" href="https://maps.app.goo.gl/QHgvhnAWVfNvFBs9A">
                <Button radius="full" size="1" className="w-full! bg-(--accent-9)! cursor-pointer">
                  Voir sur la carte
                </Button>
              </Link>
            </Popover.Content>
          </Popover.Root>
        </div>
      </div>
    </motion.div>
  );
};

export default PMDateTime;