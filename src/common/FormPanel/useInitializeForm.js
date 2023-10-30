import { useSelector } from "react-redux";
import {
  selectInvoices,
  selectFormPanelStatus,
} from "../../features/invoices/invoicesSlice";
import { initialFormState } from "./initialFormState";

export const useInitializeForm = () => {
  const invoices = useSelector(selectInvoices);
  const formPanelStatus = useSelector(selectFormPanelStatus);

  if (formPanelStatus !== "create") {
    const invoiceToEdit = invoices.find(
      (invoice) => invoice.id === formPanelStatus
    );
    return invoiceToEdit;
  }
  return initialFormState;
};
