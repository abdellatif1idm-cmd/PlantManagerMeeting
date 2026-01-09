import Section from "@/components/layout/Section";
import CalendarSlides from "./elements/CalendarSlides";

const Calendars = () => {
  return (
    <Section id="Calendar" title="Nos Événements" className="overflow-hidden">
        <CalendarSlides />
    </Section>
  );
};

export default Calendars;
