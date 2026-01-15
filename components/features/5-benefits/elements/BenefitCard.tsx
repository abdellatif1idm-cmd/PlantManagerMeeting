import MNBenefitCard from "@/components/ui/motions/MNBenefitCard";

interface BenefitsCardProps {
  benefit: {
    icon: string;
    title: string;
    description: string;
  };
  index: number;
}
const BenefitCard = ({ benefit, index }: BenefitsCardProps) => {
  return (
    <MNBenefitCard key={String(index)} index={index}>
      <div className="size-full z-10 relative bg-(--color-background) mask-x-from-99% mask-x-to-100% mask-y-from-99% mask-y-to-100% rounded-lg flex flex-col justify-center items-center duration-400">
        <div className="w-full flex-1 grid grid-cols-4 items-center">
          <i
            className={`${benefit?.icon} text-4xl font-thin place-self-center`}
          />
          <p className="col-span-3 p-2 font-medium">{benefit?.title}</p>
        </div>
        <div className="w-full flex-1 flex items-center p-2">
          <p className="text-sm opacity-75 text-center">
            {benefit?.description}
          </p>
        </div>
      </div>
    </MNBenefitCard>
  );
};

export default BenefitCard;
