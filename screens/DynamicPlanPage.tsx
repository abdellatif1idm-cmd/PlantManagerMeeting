import DynamicPlan from "@/components/features/dynamic-plan/DynamicPlan";
import Main from "@/components/layout/Main";

const DynamicPlanPage = ({ plan }: { plan: string }) => {
  return (
    <Main>
      <DynamicPlan plan={plan} />
    </Main>
  );
};

export default DynamicPlanPage;
