import styled from "styled-components";

export const StyledDesktopItemList = styled.div`
  display: grid;
  column-gap: 16px;
  row-gap: 18px;
  grid-template-columns: 214px 46px 100px 56px auto;
  align-items: center;
  margin-left: 1px;

  @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
    display: none;
  };
`;