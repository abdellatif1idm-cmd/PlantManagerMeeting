import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import EventBaseListFr from "@/data/fr/1-EventBase.json";

const HeroDescription = () => {
  return (
    <MNBlurWrapper className="" delay={0.3}>
      <h4 className="text-sm lg:text-base text-center whitespace-pre-line">
        {EventBaseListFr.EventDescription}
      </h4>
    </MNBlurWrapper>
  );
};

export default HeroDescription;
