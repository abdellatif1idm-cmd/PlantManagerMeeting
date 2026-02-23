import DynamicPlanPage from "@/screens/DynamicPlanPage";
import { notFound } from "next/navigation";

export default async function DynamicPlan({
  params,
}: {
  params: Promise<{ plan: string }>;
}) {
  const { plan } = await params;
  const allowedTypes = ["vip", "stand"] as const;

  if (!(allowedTypes as readonly string[]).includes(plan)) {
    notFound();
  }
  return <DynamicPlanPage plan={plan} />;
}
