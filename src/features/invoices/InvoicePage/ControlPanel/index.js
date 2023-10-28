import { StyledControlPanel, Wrapper } from "./styled";
import PaymentStatus from "../../../../common/PaymentStatus";
import ControlButtons from "../../../../common/ControlButtons";

const ControlPanel = ({ selectedInvoice }) => {
  return (
    <StyledControlPanel>
      <Wrapper>
        <span>Status</span>
        <PaymentStatus status={selectedInvoice.status} />
      </Wrapper>
      <ControlButtons />
    </StyledControlPanel>
  );
};

export default ControlPanel;
