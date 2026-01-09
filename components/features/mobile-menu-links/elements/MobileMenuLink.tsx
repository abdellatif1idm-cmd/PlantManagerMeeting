"use client";
import { setMenuClose } from "@/context/slices/MobileMenuSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

const MobileMenuLink = ({ label, href }: { label: string; href: string }) => {
  const dispatch = useDispatch();
  return (
    <Link href={href} onClick={() => dispatch(setMenuClose())}>
      <i className="ri-arrow-drop-right-fill"></i>
      <span className="text-lg">{label}</span>
    </Link>
  );
};

export default MobileMenuLink;
