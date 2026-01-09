import HeroTopic from "./elements/HeroTopic";
import HeroDescription from "./elements/HeroDescription";
import HeroCTAs from "./elements/HeroCTAs";
import HeroDatePlace from "./elements/HeroDatePlace";
import HeroCountdown from "./elements/HeroCountdown";
import HeroBackground from "./elements/HeroBackground";
import HeroPathTexture from "./elements/HeroPathTexture";

const MainHero = () => {
  return (
    <section className="w-full relative">
      <div className="container mx-auto min-h-dvh lg:min-h-120 2xl:min-h-dvh px-4 lg:px-10 flex flex-col justify-center items-center lg:items-start gap-y-4 relative z-10">
        <div className="py-6" />
        <HeroDatePlace />
        <HeroTopic />
        <HeroDescription />
        <HeroCTAs />
        <HeroCountdown />
      </div>
      <HeroPathTexture />
      <HeroBackground />
    </section>
  );
};

export default MainHero;
