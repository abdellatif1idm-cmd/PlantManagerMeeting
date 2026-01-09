import Section from "@/components/layout/Section";
import DynamicPlanCard from "./elements/DynamicPlanCard";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import RegistrationForm from "../13-registration/RegistrationForm";
import EventPlansList from "@/data/fr/11-EventPlans.json";

const ExtraDynamicPlan = ({
  plan,
  extraPlan,
}: {
  plan: string;
  extraPlan: string;
}) => {
  const extraDynamicPlanImage =
    EventPlansList.find((pl) => pl.slug === plan)?.["extra-plans"]?.find(
      (item) => item.slug === extraPlan
    )?.image || "";

  const extraDynamicPlanPrice =
    EventPlansList.find((pl) => pl.slug === plan)?.["extra-plans"]?.find(
      (item) => item.slug === extraPlan
    )?.price || "";
  const PlanTitle = plan?.at(0)?.toUpperCase() + plan?.slice(1);
  const ExtraTitle =
    extraPlan?.slice(6).at(0)?.toUpperCase() + extraPlan?.slice(7);

  return (
    <Section title={PlanTitle + " " + ExtraTitle}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4">
        <DynamicPlanCard image={extraDynamicPlanImage} price={extraDynamicPlanPrice} />
        <div className="col-span-1 lg:col-span-3 overflow-hidden">
          <MNBlurWrapper initialPosition="right">
            <RegistrationForm type={extraPlan} />
          </MNBlurWrapper>
        </div>
      </div>
    </Section>
  );
};

export default ExtraDynamicPlan;
