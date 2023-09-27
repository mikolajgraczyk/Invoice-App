import styled from "styled-components";

export const StyledItemsDetails = styled.div`
  background: ${({ theme }) => theme.invoiceDetailsTile.rectangleBackground};
  margin-top: 44px;
  border-radius: 8px 8px 0px 0px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-top: 47px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 38px;
  }
`;

export const SectionFooter = styled.div`
  background: ${({ theme }) => theme.invoiceDetailsTile.rectangleFooter};
  color: ${({ theme }) => theme.invoiceDetailsTile.rectangleFooterText};
  padding: 27px 32px 21px;
  border-radius: 0px 0px 8px 8px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 26px 24px 22px;
  }
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.5px;
  transition: 0.3s;
`;
