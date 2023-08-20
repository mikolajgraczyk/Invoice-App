import styled, { css } from "styled-components";

export const StyledFormPanel = styled.div`
  max-width: 719px;
  padding: 59px 56px 0 159px;
  background: ${({ theme }) => theme.formPanel.background};
  height: 100%;
  position: fixed;
  z-index: 4;
  display: none;
  border-radius: 0px 20px 20px 0px;
  overflow-y: auto;
  transition: 0.4s;

  ${({ formPanelStatus }) =>
    formPanelStatus &&
    css`
      display: flex;
    `}

    @media(max-width: ${({theme}) => theme.breakpoint.tabletMax}px){
        max-width: 616px;
        padding: 59px 56px 0 56px;
        height: calc(100% - 80px);
        bottom: 0;
    };

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
        max-width: none;
        border-radius: 0;
        padding: 33px 24px 0;
    }
`;

