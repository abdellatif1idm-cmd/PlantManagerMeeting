import Link from "next/link";
import EventNavbar from "@/data/fr/13-EventNavbar.json";
export default function Navbar() {
  return (
    <div className="hidden lg:flex items-center justify-center gap-x-4 flex-1 text-white font-medium">
      {EventNavbar.map((item, index) => (
        <NavbarItem title={item.label} path={item.path} key={index} />
      ))}
    </div>
  );
}

const NavbarItem = ({ title = "", path = "" }) => {
  return (
    <Link href={path}>
      <span className="navbar-item">{title}</span>
    </Link>
  );
};
