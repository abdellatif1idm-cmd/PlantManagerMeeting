"use client";

import { setMenuClose, setMenuOpen } from "@/context/slices/MobileMenuSlice";
import { RootState } from "@/context/store/store";
import { useDispatch, useSelector } from "react-redux";

export const MobileMenuBtnON = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.mobileMenu);
  const BtnIcon = isOpen ? "ri-menu-line" : "ri-menu-3-line";
  return (
    <button
      onClick={() => {
        dispatch(setMenuOpen());
      }}
      className="flex lg:hidden h-full aspect-square text-2xl items-center justify-center rounded-full bg-(--accent-12)/15"
    >
      <i className={`${BtnIcon} inline-block size-fit`}></i>
    </button>
  );
};

export const MobileMenuBtnOFF = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(setMenuClose());
      }}
      className="flex h-8 aspect-square text-2xl items-center justify-center rounded-full bg-(--accent-12)/5"
    >
      <i className={`ri-close-line`}></i>
    </button>
  );
};
