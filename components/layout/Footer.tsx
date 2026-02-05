import { FooterData } from "@/types/FooterTypes";
import Link from "next/link";
import Logo from "../shared/Logo";
import EventSocialLinksListFr from "@/data/fr/EventSocialLinks.json";
import EventBaseListFr from "@/data/fr/1-EventBase.json";
import EventNavbarListFr from "@/data/fr/13-EventNavbar.json";
import EventPlansListFr from "@/data/fr/11-EventPlans.json";

const footerData = {
  brand: "Industricom group",
  description: EventBaseListFr.EventSubject + " " + EventBaseListFr.EventTopic,
  socials: [...EventSocialLinksListFr.Medias],
  sections: [
    {
      title: "Événement",
      links: [...EventNavbarListFr],
    },
    {
      title: "Participation",
      links: [
        ...EventPlansListFr.map((el) => {
          return { label: el.Label, href: el.href };
        }),
      ],
    },
  ],
  contact: {
    email: EventSocialLinksListFr.Contact.email,
    phone: EventSocialLinksListFr.Contact.phone,
    address: EventSocialLinksListFr.Contact.location,
  },
};

const FooterLayout = ({
  brand = "",
  description = "",
  socials,
  sections,
  contact,
}: FooterData) => {
  return (
    <footer className="bg-(--accent-5)/50 text-white">
      <div className="mx-auto container px-8 py-16">
        <div className="w-full grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="w-44">
              <Logo />
            </div>
            <p className="mt-4 max-w-md text-sm opacity-80">{description}</p>

            {/* Socials */}
            <div className="mt-6 flex gap-5">
              {socials?.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl footer-link"
                >
                  <i className={icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-medium">{section.title}</h3>

                <ul className="mt-4 space-y-3 text-sm opacity-80">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-lg font-medium">Contact</h3>

              <ul className="mt-4 space-y-4 text-sm opacity-80">
                {contact.email && (
                  <li className="flex items-center gap-2">
                    <i className="ri-mail-line text-lg" />
                    <span>{contact.email}</span>
                  </li>
                )}

                {contact.phone && (
                  <li className="flex items-center gap-2">
                    <i className="ri-phone-line text-lg" />
                    <span>{contact.phone}</span>
                  </li>
                )}

                {contact.address && (
                  <li className="flex items-center gap-2">
                    <i className="ri-map-pin-line text-lg" />
                    <span>{contact.address}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between text-sm opacity-70">
          <p>
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:opacity-70">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
  return (
    <FooterLayout
      brand={footerData.brand}
      description={footerData.description}
      socials={footerData.socials}
      sections={footerData.sections}
      contact={footerData.contact}
    />
  );
};

export default Footer;
