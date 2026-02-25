import Image from "next/image";
import Link from "next/link";

export type EventCardProps = {
  title: string;
  edition: {
    number: string;
    suffix: string;
  };
  imageUrl: string;
  website: {
    active: boolean;
    url: string;
  };
};

export default function EventCard({ title, edition, imageUrl, website }: EventCardProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">

      {/* Banner */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          quality={85}
          decoding="async"
          className="object-cover pointer-events-none select-none transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Footer */}
      <div className="flex" style={{ height: "72px" }}>

        {/* Title */}
        <div className="flex flex-1 items-center px-4 bg-white">
          <h3 className="text-sm font-semibold leading-snug text-gray-900 line-clamp-2">{title}</h3>
        </div>

        {/* Edition badge - adapté aux couleurs du site */}
        <div
          className="flex w-1/4 flex-col items-center justify-center gap-1"
          style={{ background: "linear-gradient(135deg, #1a2a3a 0%, #2a3f4f 50%, #1a2a3a 100%)" }}
        >
          <div className="flex items-start leading-none">
            <span
              className="text-2xl font-bold leading-none"
              style={{
                fontFamily: "'Playfair Display', 'Didot', 'Georgia', serif",
                background: "linear-gradient(180deg, var(--blue-11) 0%, var(--blue-9) 50%, var(--blue-11) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {edition.number}
            </span>
            <sup
              className="text-[9px] font-light mt-1 lowercase"
              style={{ color: "var(--blue-9)" }}
            >
              {edition.suffix}
            </sup>
          </div>
          <div
            className="w-6 my-0.5"
            style={{ height: "0.5px", background: "linear-gradient(90deg, transparent, var(--blue-8), transparent)" }}
          />
          <span
            className="text-[7px] uppercase tracking-[0.3em]"
            style={{
              fontFamily: "'Cormorant Garamond', 'Garamond', serif",
              color: "var(--blue-10)",
              letterSpacing: "0.3em",
            }}
          >
            Édition
          </span>
        </div>
      </div>

      {/* Visit link */}
      {website.active && (
        <Link
          href={website.url}
          target="_blank"
          className="absolute right-2 bottom-[76px] flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border border-white/60 text-white hover:bg-white hover:text-black transition-all duration-200"
        >
          Visiter <i className="ri-arrow-right-up-line" />
        </Link>
      )}
    </div>
  );
}