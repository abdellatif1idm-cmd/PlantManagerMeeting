import { Badge } from "@radix-ui/themes";
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

export default function EventCard({
  title,
  edition,
  imageUrl,
  website,
}: EventCardProps) {
  return (
    <div className="w-full relative aspect-6/5 overflow-hidden rounded-xl bg-white">
      {/* Banner */}
      <div className="relative w-full aspect-video">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="size-full object-cover inset-0 pointer-events-none select-none"
          // Responsive sizes for different breakpoints
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
          // Performance optimizations
          //   priority={shouldPrioritize}
          //   loading={shouldPrioritize ? "eager" : "lazy"}
          // Image quality and format optimization
          quality={85} // Good balance between quality and file size
          // Performance hints
          decoding="async"
          // Prevent layout shift
          // Additional optimization for modern formats
          unoptimized={false}
        />

        {/* Edition Badge */}
        <Badge
          size={"2"}
          variant="outline"
          radius="large"
          className="absolute backdrop-blur-2xl right-2 shadow-none! top-2 px-3 py-1 uppercase tracking-wide"
        >
          <div className="flex flex-col items-center">
            <h4 className="text-base relative text-white font-semibold">
              <span>{edition.number}</span>

              <span className="text-[8px] lowercase absolute font-normal translate-x-0.5">{edition.suffix}</span>
            </h4>
            <span className="text-xs text-white">Édition</span>
          </div>
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold leading-tight text-black">{title}</h3>
      </div>

      {website.active && (
        <Link
          href={website.url}
          target="_blank"
          className="flex items-center justify-center font-medium px-2  gap-x-1 absolute right-1 bottom-1 rounded-xl border border-black text-black hover:bg-black hover:text-white transition-all"
        >
          <span>visiter</span>
          <i className="ri-arrow-right-up-line"></i>
        </Link>
      )}
    </div>
  );
}
