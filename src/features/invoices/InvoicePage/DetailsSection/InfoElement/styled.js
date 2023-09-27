import styled, { css } from "styled-components";

export const StyledInfoElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  ${({ containsId }) =>
    containsId &&
    css`
      flex-direction: column-reverse;
      gap: 7px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        gap: 4px;
      }
    `};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.invoiceDetailsTile.text1};
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.1px;
  transition: 0.3s;
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.invoiceDetailsTile.mainText};
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.25px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    line-height: 15px;
  }
`;

export const Hash = styled.span`
  color: ${({ theme }) => theme.invoiceDetailsTile.hash};
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.25px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    line-height: 15px;
  }
`;
