import { createSlice } from "@reduxjs/toolkit";
import { defaultInvoices } from "./defaultInvoices";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: {
    invoices: defaultInvoices,
    isLightTheme: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { toggleTheme } = invoicesSlice.actions;

export const selectInvoicesState = (state) => state.invoices;
export const selectInvoices = (state) => selectInvoicesState(state).invoices;
export const selectIsLightTheme = (state) => selectInvoicesState(state).isLightTheme;

export default invoicesSlice.reducer;
