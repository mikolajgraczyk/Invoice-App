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
