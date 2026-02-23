import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import EventBaseListFr from "@/data/fr/1-EventBase.json";

const HeroTopic = () => {
  return (
    <h1 className="text-4xl lg:text-5xl text-center lg:w-1/2">
      <MNBlurWrapper className="inline-block" delay={0.1}>
        <span className="inline-block font-bold mb-2">
          {EventBaseListFr.EventSubject}
        </span>
      </MNBlurWrapper>
      <br />
      <MNBlurWrapper className="inline-block" delay={0.2}>
        <span className="leading-6 inline-block">
          <span className="text-2xl lg:text-3xl font-normal whitespace-pre-line">
            {EventBaseListFr.EventTopic}
          </span>
        </span>
      </MNBlurWrapper>
    </h1>
  );
};

export default HeroTopic;
