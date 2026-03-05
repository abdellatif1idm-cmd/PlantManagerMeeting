"use client";
import { useForm } from "react-hook-form";
import FormInput from "@/components/ui/forms/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SponsorSchema, SponsorType } from "@/schemas/SponsorSchema";
import PackList from "@/data/fr/12-EventPacks.json";
import { Button } from "@radix-ui/themes";
import EventBase from "@/data/fr/1-EventBase.json";
import toast from "react-hot-toast";
import RegistrationEmail from "@/components/ui/emails/RegistrationEmail";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const SOURCE  = process.env.NEXT_PUBLIC_SOURCE  ?? "PLANT MANAGER MEETING";

// ─────────────────────────────────────────────────────────────
// URL                                    plan          type
// /participate/stand/stand-standard  →   "stand"       "stand-standard"
// /participate/stand/stand-premium   →   "stand"       "stand-premium"
// /participate/sponsoring/gold       →   "sponsoring"  "gold"
// /participate/sponsoring/platinum   →   "sponsoring"  "platinum"
// /participate/vip                   →   "vip"         null
// /participate/stand                 →   "stand"       null (redirige vers extra)
// /contact                           →   "contact"     null
// ─────────────────────────────────────────────────────────────

export default function RegistrationForm({
  plan,
  type,
}: {
  plan: string;       // "stand" | "sponsoring" | "vip" | "contact"
  type?: string;      // "stand-standard" | "gold" | null...
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(SponsorSchema) });

  const onSubmit = async (data: SponsorType) => {
    try {
      // Envoi vers le backend NestJS
      const response = await fetch(`${API_URL}/api/v1/submission`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source:    SOURCE,
          plan,                              // "stand" | "sponsoring" | "vip" | "contact"
          ...(type && { type }),             // "stand-standard" | "gold" | undefined
          firstName:     data.firstName,
          lastName:      data.lastName,
          email:         data.email,
          phone:         data.phone,
          fonction:      data.fonction,
          entreprise:    data.entreprise,
          ville:         data.ville,
          localisation:  data.localisation,
          interlocuteur: data.interlocuteur,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(
          Array.isArray(err.message) ? err.message[0] : err.message ?? "Erreur serveur"
        );
      }

      // Email de confirmation
      await fetch("/api/send-email", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to:      data.email,
          subject: `${EventBase.EventName} - Confirmation d'inscription`,
          html:    RegistrationEmail({
            fullName:      `${data.firstName} ${data.lastName}`,
            eventName:     EventBase.EventName,
            eventDate:     EventBase.EventDate,
            eventLocation: EventBase.EventLocation,
            primaryColor:  EventBase.EventPrimaryColor,
            accentColor:   EventBase.EventAccentColor,
            imageUrl:      EventBase.EventEmailImage,
          }),
        }),
      });

      toast.success("Inscription réussie !");
      setTimeout(() => {
        toast(
          (t) => (
            <div className="flex items-center bg-(--green-10)">
              <span>Confirmation envoyée à <b>{data.email}</b></span>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="size-10 aspect-square bg-(--green-9) rounded-md flex items-center justify-center"
              >
                <i className="ri-close-line text-xl" />
              </button>
            </div>
          ),
          { position: "bottom-right", className: "bg-(--green-10)! text-white!" }
        );
      }, 200);

      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(error instanceof Error ? error.message : "Échec de la soumission");
    }
  };

  const title = type
    ?? PackList.find((tl) => tl.slug === plan)?.title
    ?? plan;

  return (
    <div className="container mx-auto bg-linear-to-tr from-(--accent-4) to-(--accent-10) p-6 rounded-md h-full backdrop-blur-2xl shadow-lg shadow-overlay relative z-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="block py-2 text-xl font-semibold text-white capitalize">
          {title}
        </h1>
      </div>

      <form
        className="grid items-center w-full gap-6 md:grid-cols-2 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          boxClassName="max-sm:col-span-2"
          label="Prénom"
          placeholder="Votre prénom"
          {...register("firstName")}
          err={errors.firstName}
        />
        <FormInput
          boxClassName="max-sm:col-span-2"
          label="Nom"
          placeholder="Votre nom"
          {...register("lastName")}
          err={errors.lastName}
        />
        <FormInput
          boxClassName="max-sm:col-span-2"
          label="Fonction"
          placeholder="Votre fonction"
          {...register("fonction")}
          err={errors.fonction}
        />
        <FormInput
          boxClassName="max-sm:col-span-2"
          label="Entreprise"
          placeholder="Votre entreprise"
          {...register("entreprise")}
          err={errors.entreprise}
        />
        <FormInput
          boxClassName="max-sm:col-span-2"
          label="Ville"
          placeholder="Votre ville"
          {...register("ville")}
          err={errors.ville}
        />
        <FormInput
          boxClassName="max-sm:col-span-2"
          label="Téléphone"
          placeholder="Votre téléphone"
          {...register("phone")}
          err={errors.phone}
        />
        <FormInput
          boxClassName="col-span-2"
          label="Localisation"
          placeholder="Votre localisation"
          {...register("localisation")}
          err={errors.localisation}
        />
        <FormInput
          boxClassName="col-span-2"
          label="Interlocuteur"
          placeholder="Votre interlocuteur"
          {...register("interlocuteur")}
          err={errors.interlocuteur}
        />
        <FormInput
          boxClassName="col-span-2"
          label="Email"
          placeholder="Votre email"
          {...register("email")}
          err={errors.email}
        />

        <TermsOfUse />
        <SponsorSubmit isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}

const TermsOfUse = () => (
  <div className="flex w-full gap-x-4 mt-5 sm:col-span-2">
    <label className="inline-block w-full text-xs md:text-center">
      En soumettant ce formulaire, je certifie l'exactitude des informations
      fournies et j'autorise leur traitement par
      <span className="px-1 font-medium text-shadow-2xs">IndustriCom group</span>
      aux seules fins de gestion de l'événement
      <span className="px-1 font-semibold underline">{EventBase.EventName}</span>.
    </label>
  </div>
);

const SponsorSubmit = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <div className="w-full col-span-2 mt-10">
    <Button type="submit" className="block w-full!">
      {isSubmitting ? "Envoi en cours…" : "Envoyer"}
    </Button>
  </div>
);