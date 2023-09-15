import styled from "styled-components";

export const StyledInvoicePage = styled.main`
  max-width: 730px;
  width: 100%;
  margin: 0 auto;
  padding-top: 65px;
  padding-bottom: 48px;
  transform: translateX(51.5px);

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    max-width: none;
    padding: 49px 40px 173px;
    transform: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 33px 24px 105px;
  }
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 23.66px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.invoiceDetailsTile.mainText};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.invoiceDetailsTile.backButtonHover};
  }
`;
