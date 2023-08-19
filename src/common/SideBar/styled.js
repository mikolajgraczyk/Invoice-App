import styled from "styled-components";
import { ReactComponent as SideBarRectangle } from "./SideBarRectangle.svg";
import { ReactComponent as CombinedShape } from "./CombinedShape.svg";
import { ReactComponent as UserDefaultIcon } from "./UserDefaultIcon.svg";

export const StyledSideBar = styled.aside`
  background: ${({ theme }) => theme.bar.background};
  border-radius: 0px 20px 20px 0px;
  width: 103px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    height: 80px;
    border-radius: 0px;
    flex-direction: row;
  }
`;

export const StyledRectangle = styled(SideBarRectangle)`
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 80px;
    height: 80px;
  }
`;

export const StyledShape = styled(CombinedShape)`
  position: relative;
  left: 32px;
  top: 33.29px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 31px;
    height: 29px;
    left: 25px;
    top: 26px;
  }
`;

export const BottomBarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const ThemeButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.bar.themeIcon};
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.bar.themeIconHover};
  }
`;

export const UserIconSection = styled.div`
  width: 100%;
  border-top: 1px ${({ theme }) => theme.bar.line} solid;
  padding: 24px 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    border-top: none;
    border-left: 1px ${({ theme }) => theme.bar.line} solid;
    height: 100%;
    padding: 24px 32px;
  }
`;

export const StyledUserDefaultIcon = styled(UserDefaultIcon)`
  display: block;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 32px;
    height: 32px;
  }
`;
