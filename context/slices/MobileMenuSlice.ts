import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const MobileMenuSlice = createSlice({
  name: "MobileMenu",
  initialState,
  reducers: {
    setMenuOpen: (state) => {
      state.isOpen = true;
    },
    setMenuClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setMenuOpen, setMenuClose } = MobileMenuSlice.actions;
export default MobileMenuSlice;
