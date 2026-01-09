import MultiCta from "@/components/ui/buttons/MultiCta";
import SecondCta from "@/components/ui/buttons/SecondCta";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";

const HeroCTAs = () => {
  return (
    <MNBlurWrapper delay={0.4} initialPosition="left" className="z-50!">
      <div className="w-fit flex items-center gap-x-4 mt-2">
        <MultiCta />
        <SecondCta />
      </div>
    </MNBlurWrapper>
  );
};

export default HeroCTAs;
