import { configureStore } from "@reduxjs/toolkit";

import pageReducer from "../store/slices/PageSlice";

export const store = configureStore({
  reducer: {
    pageState: pageReducer,
  },
});
