import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import EventPresidentSpeechListFr from "@/data/fr/3-EventPresidentSpeech.json";

const PresidentText = () => {
  return (
    <div className="w-full flex flex-col items-end gap-y-4 h-full order-2 lg:order-1">
      <MNBlurWrapper
        initialPosition="left"
        delay={0.1}
        className="w-full lg:w-5/6"
      >
        <h2 className="font-semibold text-center lg:text-left text-2xl">
          {EventPresidentSpeechListFr.EventPresidentSpeechTitle}
        </h2>
      </MNBlurWrapper>
      <MNBlurWrapper
        initialPosition="left"
        delay={0.2}
        className="w-full lg:w-5/6"
      >
        <div className="w-full">
          <p className="">
            {EventPresidentSpeechListFr.EventPresidentSpeechAuthor}
          </p>
          <p className="text-xs opacity-80">
            {EventPresidentSpeechListFr.EventPresidentSpeechAuthorDescription}
          </p>
        </div>
      </MNBlurWrapper>
      <MNBlurWrapper
        initialPosition="left"
        delay={0.3}
        className="w-full lg:w-5/6"
      >
        <p className="w-full text-sm text-justify opacity-80">
          {EventPresidentSpeechListFr.EventPresidentSpeechText}
        </p>
      </MNBlurWrapper>
    </div>
  );
};

export default PresidentText;
