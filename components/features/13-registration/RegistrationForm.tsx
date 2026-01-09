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
import PublicEnv from "@/data/PublicEnv.json";


export default function RegistrationForm({ type }: { type: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(SponsorSchema),
  });

  const onSubmit = async (data: SponsorType) => {
    try {
      const formData = new FormData();
      formData.append("entry.257309634", data.fullName);
      formData.append("entry.1470451533", data.fonction);
      formData.append("entry.699339683", data.entreprise);
      formData.append("entry.600948748", data.ville);
      formData.append("entry.660759077", data.localisation);
      formData.append("entry.453915203", data.email);
      formData.append("entry.1538250166", data.phone);
      formData.append("entry.866307235", data.interlocuteur);
      formData.append("entry.814941904", type);
      const response = await fetch(
        `https://docs.google.com/forms/u/0/d/${PublicEnv.REGISTRATION_FORM_ID}/formResponse`,
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: data.email,
          subject: EventBase.EventName + " - Confirmation d'inscription",
          html: RegistrationEmail({
            fullName: data.fullName,
            eventName: EventBase.EventName,
            eventDate: EventBase.EventDate,
            eventLocation: EventBase.EventLocation,
            primaryColor: EventBase.EventPrimaryColor,
            accentColor: EventBase.EventAccentColor,
            imageUrl: EventBase.EventEmailImage,
          }),
        }),
      });
      toast.success("Inscription réussie");
      setTimeout(() => {
        toast(
          (t) => (
            <div className="flex items-center bg-(--green-10)">
              <span>
                Confirmation envoyée à <b>{data.email}</b>
              </span>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="size-10 aspect-square bg-(--green-9) rounded-md flex items-center justify-center"
              >
                <i className="ri-close-line text-xl" />
              </button>
            </div>
          ),
          {
            position: "bottom-right",
            className: "bg-(--green-10)! text-white!",
          }
        );
      }, 200);

      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Échec de la soumission");
    }
  };

  return (
    <>
      <div
        className={`container mx-auto bg-linear-to-tr from-(--accent-4) to-(--accent-10) p-6 rounded-md h-full backdrop-blur-2xl shadow-lg shadow-overlay relative z-10`}
      >
        <div className="flex items-center justify-between w-full ">
          <h1 className="block py-2 text-xl font-semibold text-white capitalize">
            {(type != "all" && PackList.find((tl) => tl.slug == type)?.title) ||
              type}
          </h1>
        </div>
        <div className="w-full">
          <form
            className="grid items-center w-full gap-6 md:grid-cols-2 text-white"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormInput
              boxClassName="max-sm:col-span-2"
              label="Nom & prénom"
              type={type}
              {...register("fullName")}
              err={errors.fullName}
            />
            <FormInput
              boxClassName="max-sm:col-span-2"
              label="Fonction"
              type={type}
              {...register("fonction")}
              err={errors.fonction}
            />
            <FormInput
              boxClassName="max-sm:col-span-2"
              label="Entreprise"
              type={type}
              {...register("entreprise")}
              err={errors.entreprise}
            />
            <FormInput
              boxClassName="max-sm:col-span-2"
              label="Ville"
              type={type}
              {...register("ville")}
              err={errors.ville}
            />
            <FormInput
              boxClassName="col-span-2"
              label="Localisation"
              type={type}
              {...register("localisation")}
              err={errors.localisation}
            />
            <FormInput
              boxClassName="max-sm:col-span-2"
              label="Email"
              type={type}
              {...register("email")}
              err={errors.email}
            />
            <FormInput
              boxClassName="max-sm:col-span-2"
              label="Téléphone"
              type={type}
              {...register("phone")}
              err={errors.phone}
            />
            <FormInput
              boxClassName="col-span-2"
              label="Interlocuteur"
              type={type}
              {...register("interlocuteur")}
              err={errors.interlocuteur}
            />
            <TermsOfUse />
            <SponsorSubmit isSubmitting={isSubmitting} />
          </form>
        </div>
      </div>
    </>
  );
}

const TermsOfUse = () => (
  <div className="flex w-full gap-x-4 mt-5 sm:col-span-2">
    <label
      htmlFor="agree-to-policies"
      className="inline-block w-full text-xs md:text-center"
    >
      En soumettant ce formulaire, je certifie l’exactitude des informations
      fournies et j’autorise leur traitement par
      <span className="px-1 font-medium text-shadow-2xs">
        IndustriCom group
      </span>
      aux seules fins de gestion de l’événement
      <span className="px-1 font-semibold underline">
        {EventBase.EventName}
      </span>
      .
    </label>
  </div>
);

const SponsorSubmit = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <div className="w-full col-span-2 mt-10">
      <Button type="submit" className="block w-full!">
        {isSubmitting ? "Envoi en cours…" : "Envoyer"}
      </Button>
    </div>
  );
};
