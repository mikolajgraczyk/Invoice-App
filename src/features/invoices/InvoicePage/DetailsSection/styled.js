import styled from "styled-components";

export const StyledDetailsSection = styled.div`
  padding: 50px 48px 48px;
  background-color: ${({ theme }) => theme.invoiceDetailsTile.background};
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  margin-top: 24px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 34px 32px 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 25px 24px 24px;
    margin-top: 16px;
  }
`;

export const TopDetails = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-direction: column;
        gap: 30px;
    }
`;

export const BottomDetails = styled.div`
  margin-top: 21px;
  display: grid;
  align-items: center;
  row-gap: 7px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 31px;
    align-items: end;

    & > :nth-child(5) {
      grid-row-start: 2;
      grid-column-start: 2;
    }

    & > :nth-child(3) {
      grid-row-start: 3;
      margin-top: 25px;
    }
  }
`;
