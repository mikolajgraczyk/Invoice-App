import { ReactComponent as StatusCircle } from "./StatusCircle.svg";
import { StyledPaymentStatus } from "./styled";

const PaymentStatus = ({ status, location }) => {
  return (
    <StyledPaymentStatus status={status} location={location}>
      <StatusCircle />
      <span>{status}</span>
    </StyledPaymentStatus>
  );
};

export default PaymentStatus;
