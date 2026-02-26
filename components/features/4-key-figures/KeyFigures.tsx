import KeyFiguresCard from "./elements/KeyFiguresCard";
import EventKeyFiguresListFr from "@/data/fr/4-EventKeyFigures.json";

const KeyFigures = () => {
  return (
    <section className="w-full relative py-12 lg:py-20 overflow-hidden">

      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 sm:gap-x-10 sm:gap-y-4">
          {EventKeyFiguresListFr.map((kf, index) => (
            <KeyFiguresCard
              key={index}
              label={kf.Label}
              value={kf.Value}
              isPlus={kf.isPlus}
              icon={kf.Icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;