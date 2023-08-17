import styled from "styled-components";
import { ReactComponent as SideBarRectangle } from "./SideBarRectangle.svg";
import { ReactComponent as CombinedShape } from "./CombinedShape.svg";

export const StyledSideBar = styled.aside`
  background: ${({ theme }) => theme.bar.background};
  border-radius: 0px 20px 20px 0px;
  width: 103px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    height: 80px;
    border-radius: 0px;
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
