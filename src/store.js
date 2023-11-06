import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import invoicesReducer from "./features/invoices/invoicesSlice";
import controlsSlice from "./features/invoices/controlsSlice";
import { invoicesSaga } from "./features/invoices/invoicesSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    controls: controlsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(invoicesSaga);

export default store;
