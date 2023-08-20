import { createSlice } from "@reduxjs/toolkit";
import { defaultInvoices } from "./defaultInvoices";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: {
    invoices: defaultInvoices,
    isLightTheme: true,
    statusFilter: null,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
    setStatusFilter: (state, { payload: status }) => {
      state.statusFilter = status;
    },
  },
});

export const { toggleTheme, setStatusFilter } = invoicesSlice.actions;

export const selectInvoicesState = (state) => state.invoices;

export const selectStatusFilter = (state) =>
  selectInvoicesState(state).statusFilter;

export const selectInvoices = (state) => {
  const invoicesState = selectInvoicesState(state).invoices;
  const statusFilter = selectStatusFilter(state);

  if (!statusFilter) {
    return invoicesState;
  }

  return invoicesState.filter((invoice) => invoice.status === statusFilter);
};

export const selectIsLightTheme = (state) =>
  selectInvoicesState(state).isLightTheme;

export const selectInvoicesTotalNumber = (state) =>
  selectInvoices(state).length;

export default invoicesSlice.reducer;
