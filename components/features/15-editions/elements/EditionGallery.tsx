import { EditionTypes } from "@/types/EditionTypes";
import { GalleryGridCard } from "../../7-gallery/elements/GalleryGrid";

const EditionGallery = ({ gallery }: { gallery: EditionTypes["gallery"] }) => {
  return (
    <div className="w-full grid grid-cols-6 lg:grid-cols-8 lg:grid-rows-9 mt-8 items-center gap-2">
      {gallery?.map((item, index) => (
        <GalleryGridCard key={index} image={item} variant="edition" />
      ))}
    </div>
  );
};

export default EditionGallery;
