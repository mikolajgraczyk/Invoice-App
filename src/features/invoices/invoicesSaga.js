import {
  put,
  call,
  select,
  takeEvery,
  takeLatest,
  delay,
} from "redux-saga/effects";
import {
  setExampleInvoices,
  toggleExampleLoading,
  selectInvoices,
  fetchExampleInvoices,
} from "./invoicesSlice";
import { getExampleInvoices } from "./getExampleInvoices";
import { saveInvoicesInLocalStorage } from "./invoicesLocalStorage";

function* fetchExampleInvoicesHandler() {
  try {
    yield put(toggleExampleLoading());
    yield delay(1100);
    const exampleInvoices = yield call(getExampleInvoices);
    yield put(setExampleInvoices(exampleInvoices));
    yield put(toggleExampleLoading());
  } catch (error) {
    yield call(alert, "Coś poszło nie tak");
    yield put(toggleExampleLoading());
  }
}

function* saveInvoicesInLocalStorageHandler() {
  const invoices = yield select(selectInvoices);
  yield call(saveInvoicesInLocalStorage, invoices);
}

export function* invoicesSaga() {
  yield takeLatest(fetchExampleInvoices.type, fetchExampleInvoicesHandler);
  yield takeEvery("*", saveInvoicesInLocalStorageHandler);
}
