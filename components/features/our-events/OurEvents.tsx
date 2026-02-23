import Section from "@/components/layout/Section";
import React from "react";
import OurEventsSlides from "./elements/OurEventsSlides";

export default function OurEvents() {
  return (
    <Section id="Our Events" title="Nos Événements" className="overflow-hidden">
      <OurEventsSlides />
    </Section>
  );
}
