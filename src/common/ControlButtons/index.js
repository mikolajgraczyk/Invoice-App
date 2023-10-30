import { StyledControlButtons, ControlButton } from "./styled";
import { useInvoiceActions } from "./useInvoiceActions";

const ControlButtons = ({ id }) => {
  const { deleteButtonHandler, markPaidButtonHandler, editButtonHandler } =
    useInvoiceActions(id);

  return (
    <StyledControlButtons>
      <ControlButton status="edit" onClick={editButtonHandler}>
        Edit
      </ControlButton>
      <ControlButton status="delete" onClick={deleteButtonHandler}>
        Delete
      </ControlButton>
      <ControlButton status="markPaid" onClick={markPaidButtonHandler}>
        Mark as Paid
      </ControlButton>
    </StyledControlButtons>
  );
};

export default ControlButtons;
