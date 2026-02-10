import KeyFiguresCard from "./elements/KeyFiguresCard";
import EventKeyFiguresListFr from "@/data/fr/4-EventKeyFigures.json";

const KeyFigures = () => {
  return (
    <section className="w-full relative">
      <div className="container mx-auto min-h-60 px-4 py-4 lg:px-6 flex flex-col justify-center items-center gap-y-4 relative z-10">
        <div className="w-full lg:w-5/6 grid grid-cols-2 lg:grid-cols-4 items-center place-items-center gap-8 lg:gap-12">
          {EventKeyFiguresListFr.map((kf, index) => (
            <KeyFiguresCard
              label={kf.Label}
              value={kf.Value}
              isPlus={kf.isPlus}
              icon={kf.Icon}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
