import { StyledControlButtons, ControlButton } from "./styled";

const ControlButtons = () => {
  return (
    <StyledControlButtons>
      <ControlButton status="edit">Edit</ControlButton>
      <ControlButton status="delete">Delete</ControlButton>
      <ControlButton status="markPaid">Mark as Paid</ControlButton>
    </StyledControlButtons>
  );
};

export default ControlButtons;
