"use client";
import { useScroll } from "@/hooks/useScroll";
import Logo from "../shared/Logo";
import Navbar from "./Navbar";
import { MobileMenuBtnON } from "../ui/controls/MobileMenuControls";
import MainCta from "../ui/buttons/MainCta";

export default function Header() {
  const scrollY = useScroll();
  const isScrolled = scrollY >= 350;
  const headerClasses = isScrolled
    ? "lg:w-2/3 mx-auto h-12 px-1.5 py-1 bg-(--accent-12)/20  border-(--accent-12)"
    : "container mx-auto h-14 px-1.5 py-1  bg-(--accent-10)/10 border-transparent";
  return (
    <>
      <header className="w-full px-2 lg:px-4 fixed top-2 z-50 transition-all">
        <div className={`${headerClasses} border duration-500 backdrop-blur-xs rounded-full flex items-center justify-between`}>
          <Logo />
          <Navbar />
          <MainCta />
          <MobileMenuBtnON/>
        </div>
      </header>
      <div className="container mx-auto h-14 px-1.5 py-1" />
    </>
  );
}
