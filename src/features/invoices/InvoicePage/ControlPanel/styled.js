import styled from "styled-components";

export const StyledControlPanel = styled.div`
  padding: 20px 32px;
  margin-top: 31px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.invoiceDetailsTile.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.tile.text2};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 24px 24px 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: space-between;
    width: 100%;
  }
`;
