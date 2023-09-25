import { useContext } from "react";
import { useDispatch } from "react-redux";

import { formContext } from "..";
import {
  addNewInvoice,
  hideFormPanel,
} from "../../../features/invoices/invoicesSlice";
import { formValidation } from "../formValidation";
import {
  StyledBottomButtonsSection,
  DiscardButton,
  DraftButton,
  SaveButton,
} from "./styled";

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

  const discard = (event) => {
    event.preventDefault();
    dispatch(hideFormPanel());
  };

  return (
    <StyledBottomButtonsSection>
      <DiscardButton onClick={(event) => discard(event)}>Discard</DiscardButton>
      <DraftButton onClick={(event) => saveAsDraft(event)}>
        Save as Draft
      </DraftButton>
      <SaveButton onClick={(event) => submit(event)}>Save & Send</SaveButton>
    </StyledBottomButtonsSection>
  );
};

export default BottomButtonsSection;
