import styled from "styled-components";

export const StyledFullAdressElement = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.invoiceDetailsTile.text1};
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.1px;
  transition: 0.3s;
`;
