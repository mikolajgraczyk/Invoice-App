import { useSelector } from "react-redux";
import { selectInvoices } from "../../features/invoices/invoicesSlice";
import { selectFormPanelStatus } from "../../features/invoices/controlsSlice";
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
