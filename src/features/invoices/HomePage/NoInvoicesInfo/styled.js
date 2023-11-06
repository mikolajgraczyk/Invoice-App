import styled from "styled-components";
import { ReactComponent as NoInvoicesIcon } from "./NoInvoicesIcon.svg";

export const StyledNoInvoicesInfo = styled.div`
  display: flex;
  gap: 23px;
  flex-direction: column;
  align-items: center;
  max-width: 241px;
  margin: 140px auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-top: 153px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 102px;
  }
`;

export const StyledIcon = styled(NoInvoicesIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 193px;
    height: 160px;
  }
`;

export const Title = styled.span`
  margin-top: 43px;
  color: ${({ theme }) => theme.invoiceDetailsTile.mainText};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.75px;
  text-align: center;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 19px;
  }
`;

export const HowToCreate = styled.span`
  color: ${({ theme }) => theme.tile.text1};
  text-align: center;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  transition: 0.3s;
`;

export const NewInvoiceSpan = styled.span`
  font-weight: 700;
  white-space: nowrap;
`;
