import { useContext } from "react";
import { formContext } from "..";
import { StyledBottomButtonsSection } from "./styled";
import ButtonsToCreate from "./ButtonsToCreate";
import ButtonsToEdit from "./ButtonsToEdit";

const BottomButtonsSection = () => {
  const { formPanelStatus } = useContext(formContext);

  if (formPanelStatus !== "create") {
    return (
      <StyledBottomButtonsSection>
        <ButtonsToEdit />
      </StyledBottomButtonsSection>
    );
  }

  return (
    <StyledBottomButtonsSection>
      <ButtonsToCreate />
    </StyledBottomButtonsSection>
  );
};

export default BottomButtonsSection;
