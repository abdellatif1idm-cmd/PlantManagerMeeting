"use client";
import FormInput from "@/components/ui/forms/FormInput";
import FormTextarea from "@/components/ui/forms/FormTextarea";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import { ContactFieldsTypes, ContactSchema } from "@/schemas/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactFieldsTypes) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/submission`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source:    "PLANT MANAGER MEETING",
          plan:"contact",
          firstName: data.firstName,
          lastName:  data.lastName,
          email:     data.email,
          message:   data.contactMessage,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message?.[0] ?? "Erreur serveur");
      }

      toast.success("Votre message a été envoyé avec succès !");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(error instanceof Error ? error.message : "Échec de la soumission");
    }
  };

  return (
    <MNBlurWrapper initialPosition="right">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 rounded-lg bg-linear-to-tr from-(--gray-6) to-(--gray-10)/50 p-6 flex flex-col gap-y-2"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="Prénom"
            placeholder="Votre prénom"
            {...register("firstName")}
            err={errors.firstName}
          />
          <FormInput
            label="Nom"
            placeholder="Votre nom"
            {...register("lastName")}
            err={errors.lastName}
          />
        </div>

        <div>
          <FormInput
            label="Email"
            placeholder="Votre email"
            {...register("email")}
            err={errors.email}
          />
        </div>

        <div>
          <FormTextarea
            label="Message"
            placeholder="Votre message"
            rows={4}
            {...register("contactMessage")}
            err={errors.contactMessage}
          />
        </div>

        <Button type="submit" size={"3"} className="w-full!">
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </Button>
      </form>
    </MNBlurWrapper>
  );
}