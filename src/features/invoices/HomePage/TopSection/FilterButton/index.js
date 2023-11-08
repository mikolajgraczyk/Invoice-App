import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toggleStatusTab, selectIsStatusTabOpen } from "../../../controlsSlice";
import { StyledFilterButton, ByStatus } from "./styled";
import { ReactComponent as FilterButtonArrow } from "./FilterButtonArrow.svg";
import Tab from "./Tab";

const FilterButton = () => {
  const dispatch = useDispatch();

  const isStatusTabOpen = useSelector(selectIsStatusTabOpen);

  return (
    <>
      <StyledFilterButton
        onClick={() => dispatch(toggleStatusTab())}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.01 }}
      >
        <span>
          Filter <ByStatus>by status</ByStatus>
        </span>
        <motion.div animate={{ rotate: isStatusTabOpen ? -180 : 0 }}>
          <FilterButtonArrow />
        </motion.div>
      </StyledFilterButton>
      {isStatusTabOpen && <Tab />}
    </>
  );
};

export default FilterButton;
