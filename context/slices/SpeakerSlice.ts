import { SpeakerInfos } from "@/types/SpeakerInfosTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SpeakerState extends SpeakerInfos {
  isDisplayed: boolean;
}

const initialState: SpeakerState = {
  isDisplayed: false,
  id: 0,
  firstName: "",
  lastName: "",
  description: "",
  company: "",
  image: "",
  passageType: "",
  passageDate: "",
  passageTime: "",
  passageSubject: "",
};

const SpeakerSlice = createSlice({
  name: "SpeakerSlice",
  initialState,
  reducers: {
    setDisplayed: (state, action: PayloadAction<SpeakerState>) => {
      return { ...state, ...action.payload };
    },
    resetSpeaker: (state) => {
      state.isDisplayed = false;
    },
  },
});

export const { setDisplayed, resetSpeaker } = SpeakerSlice.actions;
export default SpeakerSlice;
