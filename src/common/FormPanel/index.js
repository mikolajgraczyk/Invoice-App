import { useState, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledFormPanel, Wrapper, PanelTitle } from "./styled";
import { Backdrop } from "../Backdrop";
import {
  selectFormPanelStatus,
  addNewInvoice,
  hideFormPanel,
} from "../../features/invoices/invoicesSlice";
import PersonalInfoFieldset from "./PersonalInfoFieldset";
import DetailsFieldset from "./DetailsFieldset";
import ItemList from "./ItemList";
import { initialFormState } from "./initialFormState";
import { formValidation } from "./formValidation";

export const formContext = createContext();

const FormPanel = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isFormValid, setIsFormValid] = useState(true);

  const dispatch = useDispatch();
  const formPanelStatus = useSelector(selectFormPanelStatus);

  const handleFormSubmit = (event) => {
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

  const panelTitle = formPanelStatus === "create" ? "New Invoice" : "Edit";

  return (
    <>
      <StyledFormPanel>
        <Wrapper>
          <PanelTitle>{panelTitle}</PanelTitle>
          <form onSubmit={handleFormSubmit}>
            <formContext.Provider
              value={{ formData, setFormData, isFormValid, formPanelStatus }}
            >
              <PersonalInfoFieldset legend="Bill From" />
              <PersonalInfoFieldset legend="Bill To" />
              <DetailsFieldset />
              <ItemList />
            </formContext.Provider>

            <button type="submit">TEST SUBMIT</button>
          </form>
        </Wrapper>
      </StyledFormPanel>
      {formPanelStatus && <Backdrop />}
    </>
  );
};

export default FormPanel;
