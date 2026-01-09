import { configureStore } from "@reduxjs/toolkit";
import SpeakerSlice from "../slices/SpeakerSlice";
import MobileMenuSlice from "../slices/MobileMenuSlice";

export const store = configureStore({
  reducer: {
    speaker: SpeakerSlice.reducer,
    mobileMenu: MobileMenuSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
