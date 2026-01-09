"use client";
import { setMenuClose } from "@/context/slices/MobileMenuSlice";
import { RootState } from "@/context/store/store";
import { AnimatePresence, motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { MobileMenuBtnOFF } from "../controls/MobileMenuControls";
import { useEffect } from "react";
import MobileMenuLinks from "@/components/features/mobile-menu-links/MobileMenuLinks";

const MobileMenu = () => {
  const isOpen = useSelector((state: RootState) => state.mobileMenu.isOpen);
  const dispatch = useDispatch();
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => dispatch(setMenuClose())}
          className="fixed size-full inset-0 z-99 backdrop-blur-md lg:hidden"
        >
          <MenuPanel />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MenuPanel = () => {
  useEffect(() => {
    // Prevent body scroll when menu is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.5, stiffness: 0 }}
      className="h-full w-4/5 bg-(--accent-6)/80 border-r border-(--accent-8) rounded-r-3xl flex flex-col gap-y-4 p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <MobileMenuHeader />
      <MobileMenuLinks />
    </motion.div>
  );
};

const MobileMenuHeader = () => (
  <div className="w-full flex items-center justify-between">
    <h2 className="text-2xl font-semibold text-white">Menu</h2>
    <MobileMenuBtnOFF />
  </div>
);
export default MobileMenu;
