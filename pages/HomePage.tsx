import Main from "@/components/layout/Main";
import MainHero from "@/components/features/1-main-hero/MainHero";
import RoyalSpeech from "@/components/features/2-royal-speech/RoyalSpeech";
// import PresidentSpeech from "@/components/features/3-president-speech/PresidentSpeech";
import KeyFigures from "@/components/features/4-key-figures/KeyFigures";
import Benefits from "@/components/features/5-benefits/Benefits";
import Programme from "@/components/features/6-programme/Programme";
import Gallery from "@/components/features/7-gallery/Gallery";
// import Speakers from "@/components/features/8-speakers/Speakers";
// import ClientSpeakerDetails from "@/components/features/8-speakers/element/ClientSpeakerDetails";
import Sponsors from "@/components/features/9-sponsors/Sponsors";
import Calendars from "@/components/features/10-calendar/Calendars";
import ScrollToTop from "@/components/ui/controls/ScrollToTop";

export default function HomePage() {
  return (
    <Main>
      <MainHero />
      <RoyalSpeech />
      {/* <PresidentSpeech /> */}
      <KeyFigures />
      <Benefits />
      <Programme />
      <Gallery />
      {/* <Speakers /> */}
      {/* <ClientSpeakerDetails /> */}
      <Sponsors />
      <Calendars />
      <ScrollToTop />
    </Main>
  );
}
