import { StyledControlPanel, Wrapper, ButtonsDiv } from "./styled";
import PaymentStatus from "../../../../common/PaymentStatus";
import ControlButtons from "../../../../common/ControlButtons";

const ControlPanel = ({ selectedInvoice }) => {
  return (
    <StyledControlPanel>
      <Wrapper>
        <span>Status</span>
        <PaymentStatus status={selectedInvoice.status} />
      </Wrapper>
      <ButtonsDiv>
        <ControlButtons id={selectedInvoice.id} />
      </ButtonsDiv>
    </StyledControlPanel>
  );
};

export default ControlPanel;
