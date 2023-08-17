import { createSlice } from "@reduxjs/toolkit";
import { defaultInvoices } from "./defaultInvoices";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: {
    invoices: defaultInvoices,
    isLightTheme: true,
  },
  reducers: {},
});

export const selectInvoicesState = state => state.invoices;
export const selectInvoices = state => selectInvoicesState(state).invoices;

export default invoicesSlice.reducer;
