import Section from "@/components/layout/Section";
import DynamicPlanCard from "./elements/DynamicPlanCard";
import EventPlansList from "@/data/fr/11-EventPlans.json";
import RegistrationForm from "../13-registration/RegistrationForm";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import DynamicExtraPlansCard from "@/components/ui/cards/DynamicExtraPlansCard";

const DynamicPlan = ({ plan }: { plan: string }) => {
  const DynamicImage =
    EventPlansList.find((pl) => pl.slug === plan)?.image || "";
  const DynamicPrice =
    EventPlansList.find((pl) => pl.slug === plan)?.price || "";
  const PlanTitle = plan?.at(0)?.toUpperCase() + plan?.slice(1);

  return (
    <Section title={PlanTitle}>
      {EventPlansList.find((pl) => pl.slug === plan)?.["extra-plans"] ? (
        <div className="w-full grid grid-cols-1 md:flex items-center justify-center gap-6">
          {EventPlansList.find((pl) => pl.slug === plan)?.["extra-plans"]?.map(
            (item, index) => (
              <DynamicExtraPlansCard
                key={item.name}
                label={item.name}
                href={item.href}
                description=""
                image={item.image}
                index={index}
              />
            )
          )}
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 lg:grid-cols-4">
          <DynamicPlanCard image={DynamicImage} price={DynamicPrice} />
          <div className="col-span-1 lg:col-span-3 overflow-hidden">
            <MNBlurWrapper initialPosition="right">
              <RegistrationForm type={plan} />
            </MNBlurWrapper>
          </div>
        </div>
      )}
    </Section>
  );
};

export default DynamicPlan;
