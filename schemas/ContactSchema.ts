import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom est trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le prénom contient des caractères invalides"),

  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom est trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom contient des caractères invalides"),

  email: z.email("Email invalide").max(100, "Email trop long"),

  contactMessage: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(3000, "Le message est trop long"),
});

export type ContactFieldsTypes = z.infer<typeof ContactSchema>;