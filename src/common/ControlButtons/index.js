import { useDispatch } from "react-redux";
import {
  deleteInvoice,
  markInvoicePaid,
} from "../../features/invoices/invoicesSlice";
import { StyledControlButtons, ControlButton } from "./styled";
import { useNavigate } from "react-router";

const ControlButtons = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = () => {
    navigate("/home");
    dispatch(deleteInvoice(id));
  };

  const markPaidHandler = () => {
    dispatch(markInvoicePaid(id));
  };

  return (
    <StyledControlButtons>
      <ControlButton status="edit">Edit</ControlButton>
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
