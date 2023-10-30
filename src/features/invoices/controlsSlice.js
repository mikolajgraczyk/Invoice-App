import { createSlice } from "@reduxjs/toolkit";

const controlsSlice = createSlice({
  name: "controls",
  initialState: {
    isLightTheme: true,
    isStatusTabOpen: false,
    isDeleteConfirmation: true,
    formPanelStatus: null,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
    toggleStatusTab: (state) => {
      state.isStatusTabOpen = !state.isStatusTabOpen;
    },
    toggleDeleteConfirmation: (state) => {
      state.isDeleteConfirmation = !state.isDeleteConfirmation;
    },
    triggerNewInvoice: (state) => {
      state.formPanelStatus = "create";
    },
    triggerEditInvoice: (state, { payload: id }) => {
      state.formPanelStatus = id;
    },
    hideFormPanel: (state) => {
      state.formPanelStatus = null;
    },
  },
});

export const {
  toggleTheme,
  toggleStatusTab,
  toggleDeleteConfirmation,
  triggerNewInvoice,
  triggerEditInvoice,
  hideFormPanel,
} = controlsSlice.actions;

export const selectControlsState = (state) => state.controls;

export const selectIsLightTheme = (state) =>
  selectControlsState(state).isLightTheme;

export const selectIsStatusTabOpen = (state) =>
  selectControlsState(state).isStatusTabOpen;

export const selectIsDeleteConfirmation = (state) =>
  selectControlsState(state).isDeleteConfirmation;

export const selectFormPanelStatus = (state) =>
  selectControlsState(state).formPanelStatus;

export default controlsSlice.reducer;
