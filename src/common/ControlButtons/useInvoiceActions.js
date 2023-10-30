import { useDispatch } from "react-redux";
import {
  deleteInvoice,
  markInvoicePaid,
} from "../../features/invoices/invoicesSlice";
import { toggleDeleteConfirmation } from "../../features/invoices/controlsSlice";
import { triggerEditInvoice } from "../../features/invoices/controlsSlice";
import { useNavigate } from "react-router";

export const useInvoiceActions = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteButtonHandler = () => {
    dispatch(toggleDeleteConfirmation());
  };

  const confirmDeletion = () => {
    navigate("/home");
    dispatch(deleteInvoice(id));
    dispatch(toggleDeleteConfirmation());
  };

  const markPaidButtonHandler = () => {
    dispatch(markInvoicePaid(id));
  };

  const editButtonHandler = () => {
    dispatch(triggerEditInvoice(id));
  };

  return {
    deleteButtonHandler,
    confirmDeletion,
    markPaidButtonHandler,
    editButtonHandler,
  };
};
