import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../slices/cartSlice";

export function setupStore(preloadedState) {
  return configureStore({
    reducer: cartSlice,
    preloadedState,
  });
}
