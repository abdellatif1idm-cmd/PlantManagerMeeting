import Section from "@/components/layout/Section";
import React from "react";
import PlansGrid from "./elements/PlansGrid";

export default function Plans() {
  return (
    <Section
      id="Participate"
      title="Participer"
      withTexture={{ enabled: true, className: "rotate-25" }}
    >
      <PlansGrid />
    </Section>
  );
}
