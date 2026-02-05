"use client";
import { setMenuClose } from "@/context/slices/MobileMenuSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

const MobileMenuLink = ({ label, href }: { label: string; href: string }) => {
  const dispatch = useDispatch();
  return (
    <Link className="flex items-center gap-x-2" href={href} onClick={() => dispatch(setMenuClose())}>
      <i className="w-0.5 h-full inline-block bg-(--accent-10)"></i>
      <span className="text-lg">{label}</span>
    </Link>
  );
};

export default MobileMenuLink;
