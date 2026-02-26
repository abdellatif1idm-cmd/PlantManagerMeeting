import PMTopic from "./elements/PMTopic";
import PMDescription from "./elements/PMDescription";
import PMActions from "./elements/PMActions";
import PMDateTime from "./elements/PMDateTime";
import HeroPathTexture from "./elements/HeroPathTexture";
import HeroCTAs from "./elements/HeroCTAs";
import HeroBackground from "./elements/HeroBackground";
import HeroCountdown from "./elements/HeroCountdown";

const MainHero = () => {
  return (
    <section className="w-full relative min-h-dvh overflow-hidden">
      <HeroPathTexture />

      <div className="container mx-auto min-h-dvh px-4 lg:px-10 flex flex-col justify-center relative z-10
        items-center text-center
        lg:items-start lg:text-start
        text-white"
      >
        <div className="py-6" />
        <PMDateTime />
        <PMTopic />
        <PMDescription />
        <HeroCTAs />
        <HeroCountdown />
      </div>

      <HeroBackground />
    </section>
  );
};

export default MainHero;