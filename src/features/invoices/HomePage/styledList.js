import styled from "styled-components";

export const StyledList = styled.ul`
  margin: 64px 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin: 55px 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 32px 0 0 0;
  }
`;
