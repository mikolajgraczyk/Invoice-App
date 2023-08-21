import { useEffect, useState } from "react";
import { StyledFormPanel, Wrapper } from "./styled";
import { Backdrop } from "../Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { generateId } from "./generateId";
import { initialFormState } from "./initialFormState";
import {
  selectFormPanelStatus,
  addNewInvoice,
  hideFormPanel,
} from "../../features/invoices/invoicesSlice";
import FormFieldset from "./FormFieldset";

const FormPanel = () => {
  const [formData, setFormData] = useState(initialFormState);

  const dispatch = useDispatch();
  const formPanelStatus = useSelector(selectFormPanelStatus);

  useEffect(() => {
    document.body.style.overflow = formPanelStatus ? "hidden" : "auto";
  }, [formPanelStatus]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(hideFormPanel());
    dispatch(
      addNewInvoice({
        id: generateId(),
        ...formData,
      })
    );

    setFormData(initialFormState);
  };

  return (
    <>
      <StyledFormPanel formPanelStatus={formPanelStatus}>
        <Wrapper>
          <form onSubmit={handleFormSubmit}>
            <FormFieldset
              legend="Bill From"
              formData={formData.from}
              setFormData={setFormData}
            />
            <FormFieldset
              legend="Bill To"
              formData={formData.to}
              setFormData={setFormData}
            />
            <button type="submit">TEST SUBMIT</button>
          </form>
        </Wrapper>
      </StyledFormPanel>
      {formPanelStatus && <Backdrop />}
    </>
  );
};

export default FormPanel;
