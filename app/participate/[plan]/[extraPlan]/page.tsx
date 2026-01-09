import { notFound } from "next/navigation";
import ExtraPlanPage from "@/pages/ExtraPlanPage";

export default async function ExtraPlan({
  params,
}: {
  params: Promise<{ plan: string; extraPlan: string }>;
}) {
  const { plan, extraPlan } = await params;
  const allowedTypes = ["stand-standard", "stand-premium"] as const;

  if (!(allowedTypes as readonly string[]).includes(extraPlan)) {
    notFound();
  }
  return (
    <>
      <ExtraPlanPage plan={plan} extraPlan={extraPlan} />
    </>
  );
}
