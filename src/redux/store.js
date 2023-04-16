import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import userSlice from "./features/userSlice";
import AIResultsSlice from "./features/AIResultsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    AIResults: AIResultsSlice,
  },
});
