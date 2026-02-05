import RoyalImage from "./elements/RoyalImage";
import RoyalText from "./elements/RoyalText";

const RoyalSpeech = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="container mx-auto min-h-dvh lg:min-h-120 px-4 py-16 lg:px-6 flex flex-col justify-center items-center lg:items-start gap-y-4 relative z-10">
        <div className="size-full grid lg:grid-cols-2 items-center place-items-center gap-y-6">
          <RoyalImage />
          <RoyalText />
        </div>
      </div>
    </section>
  );
};

export default RoyalSpeech;
