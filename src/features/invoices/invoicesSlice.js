import { createSlice } from "@reduxjs/toolkit";
import { defaultInvoices } from "./defaultInvoices";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: {
    invoices: defaultInvoices,
    isLightTheme: true,
    filterStatus: null,
    formPanelStatus: null,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
    setFilterStatus: (state, { payload: status }) => {
      state.filterStatus = status;
    },
    triggerNewInvoice: (state) => {
      state.formPanelStatus = "create";
    },
  },
});

export const { toggleTheme, setFilterStatus, triggerNewInvoice } =
  invoicesSlice.actions;

export const selectInvoicesState = (state) => state.invoices;

export const selectfilterStatus = (state) =>
  selectInvoicesState(state).filterStatus;

export const selectInvoices = (state) => {
  const invoicesState = selectInvoicesState(state).invoices;
  const filterStatus = selectfilterStatus(state);

  if (!filterStatus) {
    return invoicesState;
  }

  return invoicesState.filter((invoice) => invoice.status === filterStatus);
};

export const selectIsLightTheme = (state) =>
  selectInvoicesState(state).isLightTheme;

export const selectInvoicesTotalNumber = (state) =>
  selectInvoices(state).length;

export default invoicesSlice.reducer;
