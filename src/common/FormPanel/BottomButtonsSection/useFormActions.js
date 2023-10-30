import { useContext } from "react";
import { formContext } from "..";
import { formValidation } from "../formValidation";
import { useDispatch } from "react-redux";
import { hideFormPanel } from "../../../features/invoices/controlsSlice";
import {
  addNewInvoice,
  editInvoice,
} from "../../../features/invoices/invoicesSlice";

export const useFormActions = () => {
  const { formData, setIsFormValid, formPanelStatus } = useContext(formContext);
  const dispatch = useDispatch();

  const saveAsDraft = (event) => {
    event.preventDefault();
    dispatch(
      addNewInvoice({
        ...formData,
        status: "draft",
      })
    );
    dispatch(hideFormPanel());
  };

  const submit = (event) => {
    event.preventDefault();

    const isFormFilled = formValidation(formData);
    if (!isFormFilled) {
      setIsFormValid(false);
      return;
    }

    dispatch(hideFormPanel());

    if (formPanelStatus === "create") {
      dispatch(addNewInvoice(formData));
    } else {
      dispatch(editInvoice(formData));
    }

    return;
  };

  const discard = (event) => {
    event.preventDefault();
    dispatch(hideFormPanel());
  };

  return { saveAsDraft, submit, discard };
};
