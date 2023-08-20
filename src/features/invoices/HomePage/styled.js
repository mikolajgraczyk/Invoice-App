import styled from "styled-components";

export const StyledHomePage = styled.main`
  max-width: 730px;
  width: 100%;
  margin: 0 auto;
  padding-top: 78px;
  transform: translateX(51.5px);

  @media(max-width: ${({theme}) => theme.breakpoint.tabletMax}px){
    max-width: none;
    padding: 62px 50px 0;
    transform: none;
  };

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 36px 24px 0;
  }
`;
