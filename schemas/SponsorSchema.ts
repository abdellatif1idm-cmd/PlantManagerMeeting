import { z } from "zod";


export const SponsorSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom complet doit contenir au moins 2 caractères")
    .max(100, "Le nom complet est trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom complet contient des caractères invalides"),

  fonction: z
    .string()
    .min(2, "La fonction doit contenir au moins 2 caractères")
    .max(200, "Fonction trop longue")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "La fonction contient des caractères invalides"),

  entreprise: z
    .string()
    .min(2, "L'entreprise doit contenir au moins 2 caractères")
    .max(200, "Nom de l'entreprise trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "L'entreprise contient des caractères invalides"),

  // Zod v4: use top-level z.email() instead of z.string().email()
  email: z
    .email("Email invalide")
    .max(100, "Email trop long"),

  phone: z
    .string()
    .min(6, "Numéro de téléphone trop court")
    .max(20, "Numéro de téléphone trop long")
    .regex(/^[0-9+\s()-]+$/, "Numéro de téléphone invalide"),

  ville: z
    .string()
    .min(2, "La ville doit contenir au moins 2 caractères")
    .max(50, "Nom de ville trop long"),

  localisation: z
    .string()
    .min(3, "La localisation doit contenir au moins 3 caractères")
    .max(200, "Localisation trop longue"),

  interlocuteur: z
    .string()
    .min(3, "L'interlocuteur doit contenir au moins 3 caractères")
    .max(200, "L'interlocuteur trop long"),
});

export type SponsorType = z.infer<typeof SponsorSchema>;
