import Image from "next/image";

interface CalendarFigurePropTypes {
  image: string;
  city: string;
}

export default function CalendarFigure({
  image,
  city,
}: CalendarFigurePropTypes) {
  return (
    <div className="w-full hidden col-span-1 md:flex items-center justify-center bg-linear-to-b  from-(--accent-6) to-transparent relative overflow-hidden">
      <CalendarPattern />
      <CalendarImage image={image} city={city} />
    </div>
  );
}

const CalendarImage = ({ image, city }: CalendarFigurePropTypes) => {
  return (
    <div className="w-full p-4 relative z-20 flex flex-col items-center justify-center">
      <div className="w-full relative z-10  aspect-9/3 flex flex-col items-center justify-end  overflow-hidden rounded-md">
        <Image
          src={image}
          alt={`Portrait of speaker`}
          fill
          className="w-full h-full"
          // Responsive sizes for different breakpoints
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 20vw"
          // Performance optimizations
          //   priority={shouldPrioritize}
          //   loading={shouldPrioritize ? "eager" : "lazy"}
          // Image quality and format optimization
          quality={90} // Good balance between quality and file size
          // Performance hints
          decoding="async"
          // Prevent layout shift
          style={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
          // Additional optimization for modern formats
          unoptimized={false}
        />
        <h1 className="absolute w-full translate-y-0.5 h-24 flex items-center gap-x-0.5 pt-16 px-2 bg-linear-to-b from-transparent to-(--accent-4) text-center text-xl">
          <i className="ri-map-pin-line" />
          {city}
        </h1>
      </div>
    </div>
  );
};

const CalendarPattern = () => {
  return (
    <div className="w-full mask-alpha mask-b-from-0  bg-pattern-2 absolute left-0 top-0 h-full"></div>
  );
};
