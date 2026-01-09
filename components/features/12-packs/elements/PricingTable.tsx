"use client";
import { Button, Dialog } from "@radix-ui/themes";
import PublicEnv from "@/data/PublicEnv.json";

const PricingTable = ({
  isPricingTableOpen,
  setIsPricingTableOpen,
}: {
  isPricingTableOpen: boolean;
  setIsPricingTableOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Dialog.Root open={isPricingTableOpen}>
      <Dialog.Content
        className="min-w-full! lg:min-w-4/5!"
        onInteractOutside={() => setIsPricingTableOpen(false)}
      >
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

export default PricingTable;
