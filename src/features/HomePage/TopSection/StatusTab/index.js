import { useDispatch, useSelector } from "react-redux";
import {
  setStatusFilter,
  selectStatusFilter,
} from "../../../invoices/invoicesSlice";
import { StyledStatusTab, Label } from "./styled";

const StatusTab = ({ isStatusTabOpen }) => {
  const dispatch = useDispatch();

  const selectedStatusFilter = useSelector(selectStatusFilter);

  const handleStatusChange = (status) => {
    if (selectedStatusFilter === status) {
      dispatch(setStatusFilter(null));
      return;
    }

    dispatch(setStatusFilter(status));
  };

  return (
    <StyledStatusTab statusTab={isStatusTabOpen}>
      <Label>
        <input
          type="checkbox"
          onChange={() => handleStatusChange("draft")}
          checked={selectedStatusFilter === "draft"}
        />
        Draft
      </Label>
      <Label>
        <input
          type="checkbox"
          onChange={() => handleStatusChange("pending")}
          checked={selectedStatusFilter === "pending"}
        />
        Pending
      </Label>
      <Label>
        <input
          type="checkbox"
          onChange={() => handleStatusChange("paid")}
          checked={selectedStatusFilter === "paid"}
        />
        Paid
      </Label>
    </StyledStatusTab>
  );
};

export default StatusTab;
