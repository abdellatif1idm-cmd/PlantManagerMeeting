import RoyalImage from "./elements/RoyalImage";
import RoyalText from "./elements/RoyalText";

const RoyalSpeech = () => {
  return (
    <section className="w-full relative overflow-hidden py-20 lg:py-28">

      {/* Background: horizontal scan lines — industrial feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 32px)',
        }}
      />

      {/* Left glow */}
      <div
        className="absolute top-0 bottom-0 left-0 w-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left center, color-mix(in srgb, var(--accent-9) 7%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-10 relative z-10">

        {/* Full-width layout: text left, image right — image breaks out */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-center">
          <RoyalText />
          <RoyalImage />
        </div>

      </div>
    </section>
  );
};

export default RoyalSpeech;