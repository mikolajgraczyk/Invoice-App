import styled from "styled-components";

export const StyledFormPanel = styled.div`
  max-width: 719px;
  padding: 0 32px 0 159px;
  background: ${({ theme }) => theme.formPanel.background};
  height: 100%;
  position: fixed;
  z-index: 4;
  display: flex;
  flex-direction: column;
  border-radius: 0px 20px 20px 0px;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    max-width: 616px;
    padding: 0 32px 0 56px;
    height: calc(100% - 80px);
    bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: none;
    width: 100%;
    border-radius: 0;
    padding: 0 8px 0 24px;
  }
`;

export const Wrapper = styled.div`
  overflow-y: scroll;
  padding: 59px 24px 16px 0;
  width: 100%;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-button {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.background};
    border-radius: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 59px 24px 38px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 33px 16px 88px 0;
  }
`;

export const PanelTitle = styled.span`
  color: ${({theme}) => theme.formPanel.mainText};
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.5px;
  display: block;
  margin-bottom: 46px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 22px;
  }
`;
