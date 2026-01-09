import ExtraDynamicPlan from "@/components/features/dynamic-plan/ExtraDynamicPlan";
import Main from "@/components/layout/Main";

const ExtraPlanPage = ({
  plan,
  extraPlan,
}: {
  plan: string;
  extraPlan: string;
}) => {
  return (
    <Main>
      <ExtraDynamicPlan plan={plan} extraPlan={extraPlan} />
    </Main>
  );
};

export default ExtraPlanPage;
