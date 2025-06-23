import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { configureAxios } from "./api";
export const axios = configureAxios()
export const store = configureStore({reducer: {reducer},  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios
      }
    })})
    export type RootState = ReturnType<typeof store.getState>;
