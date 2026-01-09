import { Button, Dialog } from "@radix-ui/themes";
import PublicEnv from "@/data/PublicEnv.json";
const PlanPricingTable = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="block! justify-self-center! my-4!">
          <span className="px-8">Détails</span>
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className="min-w-full! lg:min-w-4/5!">
        <Dialog.Title className="w-full! flex items-center justify-between">
          <span className="text-2xl text-left flex-1 font-semibold">
            Tarifs
          </span>
          <a
            href={`https://drive.google.com/uc?export=download&id=${PublicEnv.PRICING_FILE_ID}`}
            download={"Tarifs.pdf"}
          >
            <Button>
              <i className="ri-download-2-line" />
              <span>Télécharger</span>
            </Button>
          </a>
        </Dialog.Title>
        <Dialog.Description></Dialog.Description>

        <iframe
          src={`https://drive.google.com/file/d/${PublicEnv.PRICING_FILE_ID}/preview`}
          className="w-full aspect-video rounded-2xl"
        ></iframe>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default PlanPricingTable;
