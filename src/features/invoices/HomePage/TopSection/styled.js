import styled, { css } from "styled-components";
import { ReactComponent as FilterButtonArrow } from "./FilterButtonArrow.svg";

export const StyledTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media(max-width: ${({theme}) => theme.breakpoint.tabletMax}px){
    gap: 3px;
  };
`;

export const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.main.mainText};
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.125px;
  margin: 0;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.75px;
  }
`;

export const FullSubtitle = styled.span`
  color: ${({ theme }) => theme.main.text1};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const MobileSubtitle = styled.span`
  display: none;
  color: ${({ theme }) => theme.main.text1};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: block;
  }
`;

export const ButtonsSection = styled.div`
  position: relative;
  display: flex;
  gap: 40.54px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 18.54px;
  }
`;

export const FilterButton = styled.button`
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
    statustab === "open" &&
    css`
      transform: rotate(-180deg);
      transition: 0.4s;
    `};

  ${({ statustab }) =>
    statustab === "closed" &&
    css`
      transform: rotate(0);
      transition: 0.4s;
    `};
`;

export const NewInvoiceButton = styled.button`
  background: ${({ theme }) => theme.newInvoiceButton.background};
  color: ${({ theme }) => theme.newInvoiceButton.text};
  border: none;
  border-radius: 24px;
  padding: 8px 17px 8px 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;

  &:hover{
    cursor: pointer;
    background: ${({theme}) => theme.newInvoiceButton.backgroundHover};
  }
`;

export const ButtonInvoiceWord = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
