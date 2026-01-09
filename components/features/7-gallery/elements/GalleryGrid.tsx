"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import EventGalleryListFr from "@/data/fr/7-EventGallery.json";

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="w-full grid grid-cols-6 lg:grid-cols-8 lg:grid-rows-9 mt-8 items-center gap-2">
        {EventGalleryListFr.map((item, index) => (
          <GalleryGridCard
            key={index}
            image={item.image}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>
      {/* Modal */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <SelectedImageModal
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export const GalleryGridCard = ({
  image,
  variant = "initial",
  setSelectedImage,
}: {
  image: string;
  variant?: "initial" | "edition";
  setSelectedImage?: (image: string | null) => void; // Fixed type
}) => {
  const CardClassName =
    variant === "edition" ? "gallery-grid-edition-card" : "gallery-grid-card";
  return (
    <motion.div
      key={image}
      layoutId={image}
      onClick={() => setSelectedImage && setSelectedImage(image)}
      className={`w-full h-44 md:h-72 2xl:h-96 ${CardClassName} relative cursor-pointer rounded-sm`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: "some" }}
        className="w-full h-full relative"
      >
        <Image
          fill
          priority={true}
          src={image}
          className="w-full h-full object-cover rounded select-none"
          alt="gallery-image"
          sizes="100%"
        />
      </motion.div>
    </motion.div>
  );
};

const SelectedImageModal = ({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string;
  setSelectedImage: (image: string | null) => void;
}) => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-9999"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
    >
      <motion.img
        src={selectedImage}
        alt="Enlarged"
        layoutId={selectedImage}
        className="w-5/6 md:w-[60%] shadow-lg rounded-sm select-none"
      />
    </motion.div>
  );
};
