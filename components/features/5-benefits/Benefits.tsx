import Section from "@/components/layout/Section";
import EventBenefitsListFr from "@/data/fr/5-EventBenefits.json";
import BenefitsCard from "@/components/ui/cards/BenefitsCard";

const Benefits = () => {
  return (
    <Section id="benefits" title="Pourquoi participer ?">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {EventBenefitsListFr.map((benefit, index) => (
          <BenefitsCard benefit={benefit} index={index}  key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
