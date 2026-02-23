"use client";
import { setMenuClose } from "@/context/slices/MobileMenuSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface MainCtaProps {
  device?: "desktop" | "mobile";
}

export default function MainCta({ device = "desktop" }: MainCtaProps) {
  const dispatch = useDispatch();
  const MainCtaClassName =
    device === "desktop" ? "hidden! lg:flex! mr-0.75" : "flex w-full *:w-full!";

  return (
    <Link
      href={"/participate"}
      className={`${MainCtaClassName} h-full items-center`}
      onClick={() => device === "mobile" && dispatch(setMenuClose())}
    >
      <button className="h-5/6! rounded-full font-medium px-8! flex items-center bg-(--accent-9)/10 border-2 border-(--accent-9) shining-cta">
        <span className="text-xl text-(--accent-9) text-center w-full">S’inscrire</span>
      </button>
    </Link>
  );
}
