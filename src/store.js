import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./features/invoices/invoicesSlice";
import controlsSlice from "./features/invoices/controlsSlice";

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    controls: controlsSlice,
  },
});

export default store;
