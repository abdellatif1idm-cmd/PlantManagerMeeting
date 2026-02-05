import React from "react";
import NavbarList from "@/data/fr/13-EventNavbar.json";
import MobileMenuLink from "./elements/MobileMenuLink";
import MainCta from "@/components/ui/buttons/MainCta";
const MobileMenuLinks = () => {
  return (
    <div className="w-full flex-1 flex flex-col gap-y-4">
      {NavbarList.map((lk) => (
        <MobileMenuLink label={lk.label} href={lk.href} key={lk.label} />
      ))}
      <div className="mt-auto h-12">
        <MainCta device="mobile" />
      </div>
    </div>
  );
};

export default MobileMenuLinks;
