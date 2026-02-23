import BackgroundThreads from "@/components/ui/motions/BackgroundThreads";
import PresidentImage from "./elements/PresidentImage";
import PresidentText from "./elements/PresidentText";

const PresidentSpeech = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="container mx-auto min-h-dvh lg:min-h-120 px-4 py-16 lg:px-6 flex flex-col justify-center items-center lg:items-start gap-y-4 relative z-10">
        <div className="size-full grid lg:grid-cols-2 items-center place-items-center gap-y-6">
          <PresidentText />
          <PresidentImage />
        </div>
      </div>
    </section>
  );
};

export default PresidentSpeech;
