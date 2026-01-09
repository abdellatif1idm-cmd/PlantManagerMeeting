import DynamicPlanPage from "@/pages/DynamicPlanPage";
import { notFound } from "next/navigation";

export default async function DynamicPlan({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan } = await params;
  const allowedTypes = ["networking", "stand"] as const;

  if (!(allowedTypes as readonly string[]).includes(plan)) {
    notFound();
  }
  return <DynamicPlanPage plan={plan} />;
}
