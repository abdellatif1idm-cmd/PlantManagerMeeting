import ProgrammeTabs from './elements/ProgrammeTabs'

export default function Programme() {
  return (
    <section className="w-full relative py-16 lg:py-24 overflow-hidden">

      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 28px)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-10 relative z-10 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="h-px w-10" style={{ background: 'var(--accent-9)' }} />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase"
              style={{ color: 'color-mix(in srgb, var(--accent-9) 75%, white)' }}>
              Agenda
            </span>
          </div>
          <h2 className="font-black leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.97)' }}>
            Programme
          </h2>
        </div>

        <ProgrammeTabs />
      </div>
    </section>
  );
}