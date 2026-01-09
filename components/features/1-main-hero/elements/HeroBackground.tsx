import BackgroundVideo from "@/components/ui/players/BackgroundVideo";

const HeroBackground = () => {
  return (
    <div className="size-full -z-10 absolute inset-0 overflow-hidden mask-y-from-50% mask-y-to-95%">
      {/* <Image
        src={EventBaseListFr.EventBanner}
        alt="BackgroundImage"
        className="object-cover object-[82%] opacity-20 lg:opacity-100 lg:object-center w-full h-full pointer-events-none select-none"
        fill
        sizes="100%"
        priority
        decoding="async"
      /> */}
      <BackgroundVideo
        src="/videos/video-bg.mp4"
        poster="/images/poster.png"
      />
    </div>
  );
};

export default HeroBackground;
