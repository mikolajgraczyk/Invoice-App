import {
  toggleTheme,
  selectIsLightTheme,
} from "../../features/invoices/controlsSlice";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as SwitchToLightIcon } from "./SwitchToLightIcon.svg";
import { ReactComponent as SwitchToDarkIcon } from "./SwitchToDarkIcon.svg";
import {
  StyledSideBar,
  StyledRectangle,
  StyledShape,
  BottomBarSection,
  ThemeButton,
  UserIconSection,
  StyledUserDefaultIcon,
} from "./styled";
import { useMediaQuery } from "usehooks-ts";
import { breakpoint } from "../../theme";
import { motion } from "framer-motion";

const SideBar = ({ formPanelStatus }) => {
  const dispatch = useDispatch();

  const isLightTheme = useSelector(selectIsLightTheme);

  const isDesktop = useMediaQuery(`(min-width: ${breakpoint.tabletMax}px)`);

  return (
    <StyledSideBar
      formpanelstatus={formPanelStatus}
      initial={isDesktop ? { x: -103 } : { y: -160 }}
      animate={{ y: 0, x: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 65 }}
    >
      <motion.div
        initial={{ x: -113 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, type: "tween" }}
      >
        <StyledRectangle />
        <StyledShape />
      </motion.div>
      <BottomBarSection
        initial={isDesktop ? { x: -113 } : { x: 160 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, type: "tween" }}
      >
        <ThemeButton
          onClick={() => dispatch(toggleTheme())}
          initial={{ rotate: isLightTheme ? 720 : 0 }}
          animate={{ rotate: isLightTheme ? 720 : 0 }}
          transition={{ type: "tween" }}
        >
          {isLightTheme ? <SwitchToDarkIcon /> : <SwitchToLightIcon />}
        </ThemeButton>
        <UserIconSection>
          <StyledUserDefaultIcon />
        </UserIconSection>
      </BottomBarSection>
    </StyledSideBar>
  );
};

export default SideBar;
