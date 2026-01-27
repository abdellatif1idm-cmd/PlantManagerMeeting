import Image from "next/image";
import MNBlurWrapper from "../motions/MNBlurWrapper";

interface BenefitProps {
  title: string;
  description: string;
  icon: string;
}

const BenefitsCard = ({
  benefit,
  index,
}: {
  benefit: BenefitProps;
  index: number;
}) => {
  return (
    <MNBlurWrapper
      delay={index * 0.1}
      className="aspect-9/3 sm:aspect-6/3 lg:aspect-9/3 xl:aspect-video rounded-lg p-1 flex flex-col items-center"
    >
      <div className="w-24 aspect-square relative">
        <Image
          src={benefit.icon}
          alt="BenefitImage"
          className="object-cover object-top w-full h-full pointer-events-none select-none"
          fill
          sizes="100%"
          priority
          decoding="async"
        />
      </div>

      <div className="w-full text-center">
        <h4 className="text-xl font-montserrat font-medium uppercase tracking-wide">
          {benefit?.title}
        </h4>
      </div>
      <div className="w-full">
        <p className="text-sm font-montserrat text-center">
          {benefit?.description}
        </p>
      </div>
    </MNBlurWrapper>
  );
};

export default BenefitsCard;
