// Footer.types.ts (optional file)

export type FooterSocial = {
  label: string;
  path: string;
  icon: string; // remix icon class e.g. "ri-facebook-fill"
};

export type FooterLink = {
  label: string;
  path: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type FooterContact = {
  email?: string;
  phone?: string;
  address?: string;
};

export type FooterData = {
  brand: string;
  description: string;
  socials: FooterSocial[];
  sections: FooterSection[];
  contact: FooterContact;
};
