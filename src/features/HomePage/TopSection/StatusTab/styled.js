import styled, { css } from "styled-components";

export const StyledStatusTab = styled.div`
  background: ${({ theme }) => theme.statusTab.background};
  padding: 24px 88px 24px 24px;
  position: absolute;
  top: 37px;
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
      gap: 16px;
      align-items: flex-start;
    `}
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 13px;

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.statusTab.boxBackground};
    border: 1px solid ${({ theme }) => theme.statusTab.box};
    border-radius: 2px;
    cursor: pointer;

    &:checked {
      background-color: ${({ theme }) => theme.statusTab.box};
      border-color: ${({ theme }) => theme.statusTab.box};
    }
  }
`;
