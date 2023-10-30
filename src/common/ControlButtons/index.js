import { useDispatch } from "react-redux";
import {
  deleteInvoice,
  markInvoicePaid,
  triggerEditInvoice,
} from "../../features/invoices/invoicesSlice";
import { StyledControlButtons, ControlButton } from "./styled";
import { useNavigate } from "react-router";

const ControlButtons = ({ selectedInvoice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = selectedInvoice.id;

  const deleteHandler = () => {
    navigate("/home");
    dispatch(deleteInvoice(id));
  };

  const markPaidHandler = () => {
    dispatch(markInvoicePaid(id));
  };

  const editHandler = () => {
    dispatch(triggerEditInvoice(id));
  };

  return (
    <StyledControlButtons>
      <ControlButton status="edit" onClick={editHandler}>
        Edit
      </ControlButton>
      <ControlButton status="delete" onClick={deleteHandler}>
        Delete
      </ControlButton>
      <ControlButton status="markPaid" onClick={markPaidHandler}>
        Mark as Paid
      </ControlButton>
    </StyledControlButtons>
  );
};

export default ControlButtons;
