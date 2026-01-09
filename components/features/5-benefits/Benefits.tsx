import Section from "@/components/layout/Section";
import BenefitCard from "./elements/BenefitCard";
import EventBenefitsListFr from "@/data/fr/5-EventBenefits.json";

const Benefits = () => {
  return (
    <Section id="benefits" title="Pourquoi participer ?" withTexture>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {EventBenefitsListFr.map((benefit, index) => (
          <BenefitCard benefit={benefit} index={index} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
