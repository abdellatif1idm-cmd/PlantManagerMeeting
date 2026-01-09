import { z } from "zod";

export const ContactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom complet doit contenir au moins 2 caractères")
    .max(100, "Le nom complet est trop long")
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      "Le nom complet contient des caractères invalides"
    ),

  // Zod v4: use top-level z.email() instead of z.string().email()
  email: z.email("Email invalide").max(100, "Email trop long"),

  contactMessage: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(3000, "Le message est trop long"),
});

export type ContactFieldsTypes = z.infer<typeof ContactSchema>;
