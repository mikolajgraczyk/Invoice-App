import styled, { css } from "styled-components";

export const StyledFilterStatusTab = styled.div`
  background: ${({ theme }) => theme.statusTab.background};
  position: absolute;
  top: 37px;
  padding: 16px 0 16px;
  display: none;
  box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  z-index: 1;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.4s;

  ${({ statusTab }) =>
    statusTab &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `}
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 13px;
  padding: 8px 88px 8px 24px;
  color: ${({ theme }) => theme.statusTab.text};
  transition: 0.4s;
  

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.statusTab.boxBackground};
    border: 1px solid ${({ theme }) => theme.statusTab.box};
    border-radius: 2px;
    transition: all 0.4s, transform 0.1s;

    &:checked {
      background-color: ${({ theme }) => theme.statusTab.box};
      border-color: ${({ theme }) => theme.statusTab.box};
    }

    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
