import PublicEnv from "@/data/PublicEnv.json";

export default function ProgrammeDownload({ downloadable = false }: { downloadable?: boolean }) {
  if (!downloadable) return null;

  return (
    <a
      href={`https://drive.google.com/uc?export=download&id=${PublicEnv.PROGRAMME_FILE_ID}`}
      download="Programme.pdf"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 hover:gap-3"
      style={{
        background: 'color-mix(in srgb, var(--accent-9) 10%, transparent)',
        border: '1px solid color-mix(in srgb, var(--accent-9) 30%, transparent)',
        color: 'var(--accent-9)',
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
      </svg>
      Télécharger
    </a>
  );
}