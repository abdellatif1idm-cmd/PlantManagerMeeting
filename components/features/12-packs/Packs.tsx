import Section from "@/components/layout/Section";
import React from "react";
import PacksGrid from "./elements/PacksGrid";

const Packs = () => {
  return (
    <Section id="sponsoring" title="Sponsoring" withTexture>
      <PacksGrid type="slide" />
    </Section>
  );
};

export default Packs;
