import styled, { css } from "styled-components";
import { ReactComponent as SideBarRectangle } from "./SideBarRectangle.svg";
import { ReactComponent as CombinedShape } from "./CombinedShape.svg";
import { ReactComponent as UserDefaultIcon } from "./UserDefaultIcon.svg";
import { motion } from "framer-motion";

export const StyledSideBar = styled(motion.aside)`
  background: ${({ theme }) => theme.bar.background};
  border-radius: 0px 20px 20px 0px;
  width: 113px;
  margin-left: -10px;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 100%;
    height: 110px;
    margin-top: -30px;
    border-radius: 0px;
    flex-direction: row;
    margin-left: 0;
    position: static;

    ${({ formpanelstatus }) =>
      formpanelstatus &&
      css`
        position: sticky;
        top: -30;
      `}
  }
`;

export const StyledRectangle = styled(SideBarRectangle)`
  position: absolute;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 80px;
    height: 80px;
    margin-top: 30px;
    margin-left: 0;
  }
`;

export const StyledShape = styled(CombinedShape)`
  position: relative;
  left: 42px;
  top: 33.29px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 31px;
    height: 29px;
    left: 25px;
    top: 56px;
  }
`;

export const BottomBarSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 27px;
  align-items: center;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    flex-direction: row;
    gap: 32px;
    margin-top: 30px;
    right: 0;
    position: absolute;
  }
`;

export const ThemeButton = styled(motion.button)`
  background: none;
  border: none;
  display: flex;
  padding: 0;
  color: ${({ theme }) => theme.bar.themeIcon};
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.bar.themeIconHover};
  }
`;

export const UserIconSection = styled.div`
  width: 100%;
  border-top: 1px ${({ theme }) => theme.bar.line} solid;
  padding: 24px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    border-top: none;
    border-left: 1px ${({ theme }) => theme.bar.line} solid;
    height: 100%;
    padding: 24px 32px;
  }
`;

export const StyledUserDefaultIcon = styled(UserDefaultIcon)`
  display: block;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 32px;
    height: 32px;
  }
`;
