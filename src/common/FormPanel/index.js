import { useState, createContext } from "react";
import { useSelector } from "react-redux";
import { StyledFormPanel, Wrapper, PanelTitle } from "./styled";
import { Backdrop } from "../Backdrop";
import { selectFormPanelStatus } from "../../features/invoices/controlsSlice";
import PersonalInfoFieldset from "./PersonalInfoFieldset";
import DetailsFieldset from "./DetailsFieldset";
import ItemList from "./ItemList";
import BottomButtonsSection from "./BottomButtonsSection";
import { useInitializeForm } from "./useInitializeForm";
import { AnimatePresence } from "framer-motion";

export const formContext = createContext();

const FormPanel = () => {
  const [formData, setFormData] = useState(useInitializeForm());
  const [isFormValid, setIsFormValid] = useState(true);

  const formPanelStatus = useSelector(selectFormPanelStatus);

  const panelTitle =
    formPanelStatus === `create` ? `New Invoice` : `Edit #${formPanelStatus}`;

  return (
    <>
      <AnimatePresence>
        {formPanelStatus && (
          <StyledFormPanel
            initial={{ x: -650 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.1 }}
            exit={{ x: -650 }}
          >
            <formContext.Provider
              value={{
                formData,
                setFormData,
                isFormValid,
                setIsFormValid,
                formPanelStatus,
              }}
            >
              <Wrapper>
                <PanelTitle>{panelTitle}</PanelTitle>
                <form>
                  <PersonalInfoFieldset legend="Bill From" />
                  <PersonalInfoFieldset legend="Bill To" />
                  <DetailsFieldset />
                  <ItemList />
                </form>
              </Wrapper>
              <BottomButtonsSection />
            </formContext.Provider>
          </StyledFormPanel>
        )}
      </AnimatePresence>
      <Backdrop initial={{ opacity: 0 }} animate={{ opacity: 0.4984 }} />
    </>
  );
};

export default FormPanel;
