import { useContext } from "react";
import { formContext } from "..";
import { useDispatch } from "react-redux";
import {
  addNewInvoice,
  hideFormPanel,
} from "../../../features/invoices/invoicesSlice";

import { formValidation } from "../formValidation";
import { StyledBottomButtonsSection } from "./styled";

const BottomButtonsSection = () => {
  const dispatch = useDispatch();
  const { formData, setIsFormValid, formPanelStatus } = useContext(formContext);

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

  const discard = (event) => {
    event.preventDefault();
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
      console.log("edycja");
    }

    return;
  };

  return (
    <StyledBottomButtonsSection>
      <button onClick={(event) => discard(event)}>Discard</button>
      <button onClick={(event) => saveAsDraft(event)}>Save as Draft</button>
      <button onClick={(event) => submit(event)}>Save & Send</button>
    </StyledBottomButtonsSection>
  );
};

export default BottomButtonsSection;
