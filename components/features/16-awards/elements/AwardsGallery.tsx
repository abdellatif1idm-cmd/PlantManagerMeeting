import React from "react";
import { GalleryGridCard } from "../../7-gallery/elements/GalleryGrid";

const AwardsGallery = ({}) => {
  const AwardsGalleryList = [
    "https://res.cloudinary.com/dzcarbymi/image/upload/v1767886488/unnamed_nmeu8i.webp",
    "https://res.cloudinary.com/dzcarbymi/image/upload/v1767886446/unnamed_bzdwcb.webp",
    "https://res.cloudinary.com/dzcarbymi/image/upload/v1767886479/unnamed_dnkis0.webp",
    "https://res.cloudinary.com/dzcarbymi/image/upload/v1767886503/unnamed_ysauyl.webp",
    "https://res.cloudinary.com/dzcarbymi/image/upload/v1767886496/unnamed_hauiuz.webp",
    "https://res.cloudinary.com/dzcarbymi/image/upload/v1767886518/unnamed_urn4ac.webp",
    "https://res.cloudinary.com/dzcarbymi/image/upload/v1767886524/unnamed_wcvfui.webp",
    "https://res.cloudinary.com/dzcarbymi/image/upload/v1767886543/unnamed_pzerzh.webp",
    "https://res.cloudinary.com/dzcarbymi/image/upload/v1767886535/unnamed_l0v1uu.webp",
  ];
  return (
    <div className="w-full grid grid-cols-6 lg:grid-cols-8 lg:grid-rows-9 mt-8 items-center gap-2">
      {AwardsGalleryList?.map((item, index) => (
        <GalleryGridCard key={index} image={item} variant="initial" />
      ))}
    </div>
  );
};

export default AwardsGallery;
