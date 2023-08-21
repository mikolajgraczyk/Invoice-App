import { createSlice } from "@reduxjs/toolkit";
import { defaultInvoices } from "./defaultInvoices";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: {
    invoices: defaultInvoices,
    isLightTheme: false,
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
    hideFormPanel: (state) => {
      state.formPanelStatus = null;
    },
    addNewInvoice: ({ invoices }, { payload: invoice }) => {
      invoices.push(invoice);
    },
  },
});

export const {
  toggleTheme,
  setFilterStatus,
  triggerNewInvoice,
  hideFormPanel,
  addNewInvoice,
} = invoicesSlice.actions;

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

export const selectFormPanelStatus = (state) =>
  selectInvoicesState(state).formPanelStatus;

export default invoicesSlice.reducer;
