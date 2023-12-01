import { configureStore } from "@reduxjs/toolkit";
import { starWars } from "./reducer/starWars";

export const store = configureStore({
  reducer: { [starWars.reducerPath]: starWars.reducer },
  middleware: (getDefaultMiddleware): any => {
    return getDefaultMiddleware().concat(starWars.middleware);
  },
});
