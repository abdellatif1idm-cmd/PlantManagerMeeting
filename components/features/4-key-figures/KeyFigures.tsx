import KeyFiguresCard from "./elements/KeyFiguresCard";
import EventKeyFiguresListFr from "@/data/fr/4-EventKeyFigures.json";

const KeyFigures = () => {
  return (
    <section className="w-full relative py-16 lg:py-24 overflow-hidden">

      {/* Industrial grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Accent glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, color-mix(in srgb, var(--accent-9) 8%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {EventKeyFiguresListFr.map((kf, index) => (
            <KeyFiguresCard
              label={kf.Label}
              value={kf.Value}
              isPlus={kf.isPlus}
              icon={kf.Icon}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;