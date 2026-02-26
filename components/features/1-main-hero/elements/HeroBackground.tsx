import BackgroundVideo from "@/components/ui/players/BackgroundVideo";

const HeroBackground = () => {
  return (
    <div className="size-full -z-10 absolute inset-0 overflow-hidden mask-y-from-50% mask-y-to-95%">
      <BackgroundVideo
        src="/videos/video-bg.mp4"
        poster="/images/poster.png"
      />
    </div>
  );
};

export default HeroBackground;