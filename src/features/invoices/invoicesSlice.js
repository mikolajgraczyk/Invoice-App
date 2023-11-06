import { createSlice } from "@reduxjs/toolkit";
import { getInvoicesFromLocalStorage } from "./invoicesLocalStorage";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: {
    invoices: getInvoicesFromLocalStorage(),
    filterStatus: null,
    isExampleLoading: false,
  },
  reducers: {
    setFilterStatus: (state, { payload: status }) => {
      state.filterStatus = status;
    },
    addNewInvoice: ({ invoices }, { payload: invoice }) => {
      invoices.push(invoice);
    },
    editInvoice: ({ invoices }, { payload: updatedState }) => {
      const editIndex = invoices.findIndex(
        (invoice) => invoice.id === updatedState.id
      );
      invoices[editIndex] = updatedState;
    },
    deleteInvoice: ({ invoices }, { payload: id }) => {
      const removeIndex = invoices.findIndex((invoice) => invoice.id === id);
      invoices.splice(removeIndex, 1);
    },
    markInvoicePaid: ({ invoices }, { payload: id }) => {
      const editIndex = invoices.findIndex((invoice) => invoice.id === id);
      invoices[editIndex].status = "paid";
    },
    fetchExampleInvoices: () => {},
    setExampleInvoices: (state, { payload: invoices }) => {
      state.invoices = invoices;
    },
    toggleExampleLoading: (state) => {
      state.isExampleLoading = !state.isExampleLoading;
    },
  },
});

export const {
  setFilterStatus,
  addNewInvoice,
  editInvoice,
  deleteInvoice,
  markInvoicePaid,
  fetchExampleInvoices,
  setExampleInvoices,
  toggleExampleLoading,
} = invoicesSlice.actions;

export const selectInvoicesState = (state) => state.invoices;

export const selectfilterStatus = (state) =>
  selectInvoicesState(state).filterStatus;

export const selectInvoices = (state) => selectInvoicesState(state).invoices;

export const selectInvoicesTotalNumber = (state) =>
  selectInvoices(state).length;

export const selectFilteredInvoices = (state) => {
  const invoicesState = selectInvoices(state);
  const filterStatus = selectfilterStatus(state);

  if (!filterStatus) {
    return invoicesState;
  }

  return invoicesState.filter((invoice) => invoice.status === filterStatus);
};

// export const selectFilteredInvoicesNumber = (state) =>
//   selectFilteredInvoices(state).length;

export const selectIsExampleLoading = (state) =>
  selectInvoicesState(state).isExampleLoading;

export default invoicesSlice.reducer;
