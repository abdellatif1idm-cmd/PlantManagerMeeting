import Link from "next/link";
import EventNavbar from "@/data/fr/13-EventNavbar.json";
import { NavbarItemTypes } from "@/types/NavbarTypes";
export default function Navbar() {
  return (
    <div className="hidden lg:flex items-center justify-center gap-x-4 flex-1 text-white font-medium">
      {EventNavbar.map((item, index) => (
        <NavbarItem item={item} key={index} />
      ))}
    </div>
  );
}

const NavbarItem = ({ item }: { item: NavbarItemTypes }) => {
  return (
    <div>
      {!item?.extra?.enabled && (
        <Link href={item.href}>
          <span className="navbar-item fade-on-view">{item.label}</span>
        </Link>
      )}

      {item?.extra?.enabled && (
        <div className="group relative w-fit h-fit">
          <Link href={item.href}>
            <span className="navbar-item fade-on-view">{item.label}</span>
            <i className="ri-arrow-down-s-line inline-block w-fit"/>
          </Link>
          <div className="absolute shadow-lg hidden group-hover:flex bottom-0 left-0  translate-y-full flex-col bg-(--color-background) rounded-md w-full gap-y-2 text-center p-1 h-fit">
            {item?.extra?.items.map((extraItem, index) => (
              <Link className="inline-block w-full transition-all hover:bg-(--accent-8) rounded-md" key={index} href={item.href + "?e=" +extraItem.href}>
                {extraItem.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
