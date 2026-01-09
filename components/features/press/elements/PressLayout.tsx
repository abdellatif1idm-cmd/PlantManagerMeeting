import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import { Button } from "@radix-ui/themes";
import EventSocialLinksListFr from "@/data/fr/EventSocialLinks.json"
import Link from "next/link";

const PressLayout = () => {
  return (
    <>
      {/* Description */}
      <MNBlurWrapper delay={0.1}>
        <p className="text-center text-base leading-relaxed">
          Vous allez être redirigés vers le formulaire presse pour finaliser
          votre accréditation.
        </p>
      </MNBlurWrapper>

      {/* Button */}
      <MNBlurWrapper delay={0.2}>
        <div className="flex justify-center">
          <Link href={EventSocialLinksListFr.Press} target="_blank">
            <Button
              type="button"
              variant="soft"
              className="flex items-center gap-2 border border-white px-6 py-3 text-sm uppercase tracking-wide"
            >
              <i className="ri-arrow-right-line text-lg" />
              Poursuivre
            </Button>
          </Link>
        </div>
      </MNBlurWrapper>

      {/* Reminder */}
      <div className="space-y-4">
        <MNBlurWrapper delay={0.3} initialPosition="center">
          <h2 className="text-xl font-medium flex items-center gap-2">
            <i className="ri-information-line" />
            Rappel
          </h2>
        </MNBlurWrapper>

        <ul className="space-y-2 text-sm leading-relaxed">
          <MNBlurWrapper delay={0.4} initialPosition="left">
            <li className="flex gap-2">
              <span>–</span>
              <span>
                Les demandes d’accréditation doivent être soumises au moins
                <span className="font-bold ml-1 text-(--accent-12)">
                  5
                </span>{" "}
                jours avant l’événement
              </span>
            </li>
          </MNBlurWrapper>
          <MNBlurWrapper delay={0.5} initialPosition="left">
            <li className="flex gap-2">
              <span>–</span>
              <span>
                Une pièce d’identité sera demandée lors de l’événement
              </span>
            </li>
          </MNBlurWrapper>
          <MNBlurWrapper delay={0.6} initialPosition="left">
            <li className="flex gap-2">
              <span>–</span>
              <span>
                L’accréditation donne accès aux espaces presse et aux
                conférences
              </span>
            </li>
          </MNBlurWrapper>
          <MNBlurWrapper delay={0.7} initialPosition="left">
            <li className="flex gap-2">
              <span>–</span>
              <span>
                Les interviews avec les intervenants peuvent être organisées sur
                demande
              </span>
            </li>
          </MNBlurWrapper>
        </ul>
      </div>
      <MNBlurWrapper delay={0.8} initialPosition="left" mode="animate">
        <div className="max-w-2xl w-screen bg-(--accent-12) p-[0.5px]" />
      </MNBlurWrapper>
      {/* Contact */}
      <div className="max-w-2xl w-full space-y-3">
        <MNBlurWrapper delay={0.8} initialPosition="center" mode="animate">
          <h2 className="text-xl font-medium">Contact Presse</h2>
        </MNBlurWrapper>

        <div className="space-y-2 text-sm">
          <MNBlurWrapper delay={0.9} initialPosition="bottom" mode="animate">
            <p className="flex items-center gap-2">
              <i className="ri-mail-line" />
              communication@industries.ma
            </p>
          </MNBlurWrapper>
          <MNBlurWrapper delay={1} initialPosition="bottom" mode="animate">
            <p className="flex items-center gap-2">
              <i className="ri-phone-line" />
              +212 5 22 26 04 51
            </p>
          </MNBlurWrapper>
        </div>
      </div>
    </>
  );
};

export default PressLayout;
