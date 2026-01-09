import DynamicPackPage from "@/pages/DynamicPackPage";
import { notFound } from "next/navigation";
import EventPacksListFR from "@/data/fr/12-EventPacks.json"

export default async function DynamicPack({
  params,
}: {
  params: Promise<{ pack: string }>;
}) {
  const { pack } = await params;
  const EventPacksSlugs = EventPacksListFR.map(item=>item.slug);
  const allowedTypes = [...EventPacksSlugs] as const;

  if (!(allowedTypes as readonly string[]).includes(pack)) {
    notFound();
  }
  return <DynamicPackPage pack={pack} />;
}
