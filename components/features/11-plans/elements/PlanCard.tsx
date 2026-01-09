import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import Image from "next/image";
import Link from "next/link";

const PlanCard = ({
  label,
  href,
  image,
  description,
  index,
}: {
  label: string;
  href: string;
  image: string;
  description: string;
  index: number;
}) => {
  return (
    <Link
      href={href}
      className="flex-1/2 w-full lg:flex-1 duration-500 lg:hover:flex-2"
      prefetch={true}
    >
      <MNBlurWrapper delay={index * 0.05}>
        <div className="w-full group aspect-video lg:aspect-auto lg:h-80 bg-(--accent-8) rounded-md flex items-center justify-center relative overflow-hidden">
          <h1 className="text-3xl xl:text-4xl flex items-center text-center justify-center gap-x-1 z-10 capitalize text-shadow-sm text-shadow-black/50">
            <span>{label}</span>
          </h1>
          <Image
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={image}
            alt={label}
            fill
            priority={true}
            sizes="100%"
          />
          <div className="absolute w-full inset-0 self-center mt-24 flex opacity-75 lg:opacity-0 z-20 group-hover:opacity-85 duration-300 items-center justify-center">
            <h6 className="text-xs w-full whitespace-pre-line text-center px-4 text-background text-shadow-sm text-shadow-black overflow-hidden line-clamp-2">
              {description}
            </h6>
          </div>

          <div className="absolute inset-0 size-full bg-radial from-transparent to-(--gray-1)" />
        </div>
      </MNBlurWrapper>
    </Link>
  );
};

export default PlanCard;
