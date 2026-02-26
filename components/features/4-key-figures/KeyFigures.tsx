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

      <div className="container mx-auto px-4 lg:px-6 relative z-10 flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="h-px w-10" style={{ background: 'var(--accent-9)' }} />
            <span
              className="text-[10px] font-bold tracking-[0.5em] uppercase"
              style={{ color: 'color-mix(in srgb, var(--accent-9) 75%, white)' }}
            >
              En chiffres
            </span>
          </div>
          <h2
            className="font-black leading-tight"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              letterSpacing: '-0.02em',
              color: 'rgba(255,255,255,0.97)',
            }}
          >
            Chiffres clés
          </h2>
        </div>

        {/* Grid */}
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