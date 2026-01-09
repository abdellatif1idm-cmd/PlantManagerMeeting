"use client";
import FormInput from "@/components/ui/forms/FormInput";
import FormTextarea from "@/components/ui/forms/FormTextarea";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import { ContactFieldsTypes, ContactSchema } from "@/schemas/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PublicEnv from "@/data/PublicEnv.json";


export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactFieldsTypes) => {
    try {
      const formData = new FormData();
      formData.append("entry.1752827248", data.fullName);
      formData.append("entry.1861213978", data.email);
      formData.append("entry.508890030", data.contactMessage);

      const response = await fetch(
        `https://docs.google.com/forms/d/${PublicEnv.CONTACT_FORM_ID}/formResponse`,
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      toast.success("Soumission réussie !");

      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Échec de la soumission");
    }
  };

  return (
    <MNBlurWrapper initialPosition="right">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 rounded-lg bg-linear-to-tr from-(--gray-6) to-(--gray-10)/50 p-6 flex flex-col gap-y-2"
      >
        <div>
          <FormInput
            label="Nom & prénom"
            placeholder="Votre nom et prénom"
            {...register("fullName")}
            err={errors.fullName}
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
