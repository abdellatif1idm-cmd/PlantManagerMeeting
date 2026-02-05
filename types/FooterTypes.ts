// Footer.types.ts (optional file)

export type FooterSocial = {
  label: string;
  href: string;
  icon: string; 
};

export type FooterLink = {
  label: string;
  href: string;
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
