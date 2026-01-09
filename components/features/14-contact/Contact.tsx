import Section from "@/components/layout/Section";
import ContactForm from "./elements/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import EventSocialLinksListFr from "@/data/fr/EventSocialLinks.json";


const Contact = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      className="overflow-hidden relative"
      withTexture={{ enabled: true, className: "-rotate-25" }}
    >
      <div className="mx-auto container px-4 py-2 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:py-2">
            <MNBlurWrapper delay={0.1}>
              <h2 className="text-2xl font-bold sm:text-3xl">Contactez-nous</h2>
            </MNBlurWrapper>
            <MNBlurWrapper delay={0.2}>
              <p className="mt-4 text-pretty">
                Vous avez une question ou besoin d’informations supplémentaires
                ? N’hésitez pas à nous contacter — nous vous répondrons dans les
                plus brefs délais.
              </p>
            </MNBlurWrapper>

            <dl className="mt-6 space-y-3">
              <MNBlurWrapper delay={0.3}>
                <dt className="sr-only">Phone number</dt>
                <dd className="grid grid-cols-[24px_1fr] items-center gap-2">
                  <Phone className="size-5" />
                  <span className="font-medium">{EventSocialLinksListFr.Contact.phone}</span>
                </dd>
              </MNBlurWrapper>

              <MNBlurWrapper delay={0.4}>
                <dt className="sr-only">Email</dt>
                <dd className="grid grid-cols-[24px_1fr] items-center gap-2">
                  <Mail className="size-5" />
                  <span className="font-medium">{EventSocialLinksListFr.Contact.email}</span>
                </dd>
              </MNBlurWrapper>

              <MNBlurWrapper delay={0.5}>
                <dt className="sr-only">Location</dt>
                <dd className="grid grid-cols-[24px_1fr] items-center gap-2">
                  <MapPin className="size-5" />
                  <span className="font-medium">{EventSocialLinksListFr.Contact.location}</span>
                </dd>
              </MNBlurWrapper>
            </dl>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
