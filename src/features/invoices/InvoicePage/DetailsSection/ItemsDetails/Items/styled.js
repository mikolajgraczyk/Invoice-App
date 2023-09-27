import styled from "styled-components";

export const StyledItems = styled.div`
  padding: 33px 32px 39px;
  display: grid;
  row-gap: 32px;
  grid-template-columns: 3fr 26px 1fr 1fr;
  text-align: right;

  span:nth-child(4n-3) {
    text-align: left;
  }

  span:nth-child(4n-2) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.invoiceDetailsTile.text1};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;
`;

export const NameTotalPriceSpan = styled.span`
  color: ${({ theme }) => theme.invoiceDetailsTile.mainText};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

export const QuantityPriceSpan = styled.span`
  color: ${({ theme }) => theme.invoiceDetailsTile.text1};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

export const StyledMobileItems = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 25px 24px 23px;
    display: block;
  }
`;
