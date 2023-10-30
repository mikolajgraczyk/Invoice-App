import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab, selectIsStatusTabOpen } from "../../../controlsSlice";
import {
  StyledFilterButton,
  ByStatus,
  StyledFilterButtonArrow,
} from "./styled";
import Tab from "./Tab";

const FilterButton = () => {
  const dispatch = useDispatch();

  const isStatusTabOpen = useSelector(selectIsStatusTabOpen);

  return (
    <>
      <StyledFilterButton onClick={() => dispatch(toggleStatusTab())}>
        <span>
          Filter <ByStatus>by status</ByStatus>
        </span>
        <StyledFilterButtonArrow
          statustab={isStatusTabOpen ? "true" : "false"}
        />
      </StyledFilterButton>
      <Tab isStatusTabOpen={isStatusTabOpen} />
    </>
  );
};

export default FilterButton;
