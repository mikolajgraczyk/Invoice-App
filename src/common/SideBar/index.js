import {
  selectIsLightTheme,
  toggleTheme,
} from "../../features/invoices/invoicesSlice";
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

const SideBar = () => {
  const isLightTheme = useSelector(selectIsLightTheme);

  const dispatch = useDispatch();

  return (
    <StyledSideBar>
      <div>
        <StyledRectangle />
        <StyledShape />
      </div>
      <BottomBarSection>
        <ThemeButton onClick={() => dispatch(toggleTheme())}>
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
