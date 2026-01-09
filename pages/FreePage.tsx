import Redirection from "@/components/features/redirection/Redirection";
import Main from "@/components/layout/Main";
import EventPlansListFr from "@/data/fr/11-EventPlans.json";

const FreePage = () => {
  const freePlan =
    EventPlansListFr.find((item) => item.slug === "free")?.redirection || "";
  return (
    <Main>
      <Redirection url={freePlan} />
    </Main>
  );
};

export default FreePage;
