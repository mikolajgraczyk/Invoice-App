import { useDispatch, useSelector } from "react-redux";
import { setFilterStatus, selectfilterStatus } from "../../../../invoicesSlice";
import { StyledFilterStatusTab, Label } from "./styled";

const Tab = () => {
  const dispatch = useDispatch();

  const selectedfilterStatus = useSelector(selectfilterStatus);

  const handleStatusChange = (status) => {
    if (selectedfilterStatus === status) {
      dispatch(setFilterStatus(null));
      return;
    }

    dispatch(setFilterStatus(status));
  };

  return (
    <StyledFilterStatusTab
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.01 }}
    >
      <Label>
        <input
          type="checkbox"
          onChange={() => handleStatusChange("draft")}
          checked={selectedfilterStatus === "draft"}
        />
        Draft
      </Label>
      <Label>
        <input
          type="checkbox"
          onChange={() => handleStatusChange("pending")}
          checked={selectedfilterStatus === "pending"}
        />
        Pending
      </Label>
      <Label>
        <input
          type="checkbox"
          onChange={() => handleStatusChange("paid")}
          checked={selectedfilterStatus === "paid"}
        />
        Paid
      </Label>
    </StyledFilterStatusTab>
  );
};

export default Tab;
