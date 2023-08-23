import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledFormPanel, Wrapper } from "./styled";
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

const FormPanel = () => {
  const [formData, setFormData] = useState(initialFormState);

  const dispatch = useDispatch();
  const formPanelStatus = useSelector(selectFormPanelStatus);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(hideFormPanel());

    if (formPanelStatus === "create") {
      dispatch(addNewInvoice(formData));
    } else {
      console.log("edycja");
    }
  };

  return (
    <>
      <StyledFormPanel>
        <Wrapper>
          <form onSubmit={handleFormSubmit}>
            <PersonalInfoFieldset
              legend="Bill From"
              formData={formData.from}
              setFormData={setFormData}
            />
            <PersonalInfoFieldset
              legend="Bill To"
              formData={formData.to}
              setFormData={setFormData}
            />
            <DetailsFieldset
              formData={formData.to}
              setFormData={setFormData}
              formPanelStatus={formPanelStatus}
            />
            <ItemList itemList={formData.itemList} setFormData={setFormData} />

            <button type="submit">TEST SUBMIT</button>
          </form>
        </Wrapper>
      </StyledFormPanel>
      {formPanelStatus && <Backdrop />}
    </>
  );
};

export default FormPanel;
