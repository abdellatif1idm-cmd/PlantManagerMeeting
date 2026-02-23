import { BadgeCheck, Crown, Handshake, Store } from "lucide-react";
import Link from "next/link";

const ctas = [
  { href: "/participate/free", icon: BadgeCheck, label: "Badge" },
  { href: "/participate/vip", icon: Crown, label: "Pass Vip" },
  { href: "/participate/stand", icon: Store, label: "Stand" },
  { href: "/participate/sponsoring", icon: Handshake, label: "Partenaire" },
];

export default function FourCtas() {
  return (
    <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
      {ctas.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          className="shining-cta flex rounded-full items-center justify-center px-3 py-1 gap-x-1 bg-(--accent-8)/90 text-white relative"
        >
          <Icon size={18} />
          {label}
        </Link>
      ))}
    </div>
  );
}
