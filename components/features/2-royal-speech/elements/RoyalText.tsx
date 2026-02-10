import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import EventRoyalSpeechListFr from "@/data/fr/2-EventRoyalSpeech.json";


const RoyalText = () => {
  return (
    <div className="w-full flex flex-col justify-around gap-y-4 h-full overflow-hidden relative">
      <MNBlurWrapper initialPosition="right">
        <h2 className="font-semibold text-center lg:text-left text-2xl border-l-2 border-(--accent-10) px-2">
          {EventRoyalSpeechListFr.EventRoyalSpeechTitle}
        </h2>
      </MNBlurWrapper>

      <MNBlurWrapper initialPosition="right" delay={0.1}>
        <p className="w-full lg:w-5/6 text-sm text-justify opacity-80">
          {EventRoyalSpeechListFr.EventRoyalSpeechText}
        </p>
      </MNBlurWrapper>
      <i className="ri-double-quotes-l text-9xl absolute inset-0 opacity-20 translate-y-20"></i>
    </div>
  );
};

export default RoyalText;
