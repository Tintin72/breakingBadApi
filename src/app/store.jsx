import { configureStore } from "@reduxjs/toolkit";
import {
  reducer,
  reducerPath,
  middleware,
} from "../features/characters/characterSlice";

export const store = configureStore({
  reducer: {
    [reducerPath]: reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});
