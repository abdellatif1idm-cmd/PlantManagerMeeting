"use client";
import { useScroll } from "@/hooks/useScroll";
import { Button } from "@radix-ui/themes";
import { AnimatePresence, motion } from "motion/react";

export default function ScrollToTop() {
  const scrollY = useScroll();

  const maxScroll = () => {
    if (typeof window === "undefined") return 1;
    return document.documentElement.scrollHeight - window.innerHeight;
  };

  const progress = Math.min(scrollY / maxScroll(), 1);
  const isScrolled = scrollY >= 600;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 rounded-full p-0.5 z-50 shadow-[0_2px_4px_var(--accent-2)]"
          style={{
            background: `conic-gradient(
          var(--accent-12) ${progress * 360}deg,
          var(--color-background) 0deg
        )`,
          }}
        >
          <Button
            radius="full"
            className="size-10!"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <i className="ri-arrow-up-s-line text-2xl" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
