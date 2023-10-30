import styled, { css } from "styled-components";
import { ReactComponent as FilterButtonArrow } from "./FilterButtonArrow.svg";

export const StyledFilterButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.main.mainText};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
  }
`;

export const ByStatus = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const StyledFilterButtonArrow = styled(FilterButtonArrow)`
  ${({ statustab }) =>
    statustab === "true" &&
    css`
      transform: rotate(-180deg);
      transition: 0.4s;
    `};

  ${({ statustab }) =>
    statustab === "false" &&
    css`
      transform: rotate(0);
      transition: 0.4s;
    `};
`;
