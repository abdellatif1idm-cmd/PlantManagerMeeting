import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import Image from "next/image";

const PresidentImage = () => {
  return (
    <MNBlurWrapper
      className="w-4/5 lg:w-1/2 order-1 lg:order-2"
      initialPosition="right"
      delay={0.2}
    >
      <div className="w-full aspect-3/4  p-2 relative">
        <Image
          src="https://res.cloudinary.com/dzcarbymi/image/upload/v1758731065/Hicham_RAHIOUI_al4qy1.jpg"
          alt="BackgroundImage"
          className="object-cover object-top w-full h-full pointer-events-none select-none"
          fill
          sizes="100%"
          priority
          decoding="async"
        />
      </div>
    </MNBlurWrapper>
  );
};

export default PresidentImage;
