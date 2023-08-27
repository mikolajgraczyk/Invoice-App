import styled, { css } from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 25px;
  column-gap: 24px;
  padding: 0;
  margin: 0 0 49px 1px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin-bottom: 41px;
  }

  ${({ location }) =>
    location === "details" &&
    css`
      grid-template-columns: repeat(2, 1fr);

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        width: 100%;
        margin-bottom: 69px;
      }
    `}
`;

export const LongLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 9px;
  color: ${({ theme }) => theme.formPanel.inputName};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  grid-column-start: 1;
  grid-column-end: 4;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-column-end: 3;
  }

  ${({ location }) =>
    location === "details" &&
    css`
      grid-column-end: 3;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-column-end: 1;
      }
    `}
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  position: relative;
  color: ${({ theme }) => theme.formPanel.inputName};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  transition: 0.4s;

  ${({ countryLabel }) =>
    countryLabel &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    `}

  ${({ itemList }) =>
    itemList &&
    css`
      gap: 15px;
      border: 2px green solid;
    `}

  ${({ itemName }) =>
    itemName &&
    css`
      grid-column-start: 1;
      grid-column-end: 5;
    `}
`;

export const Input = styled.input`
  outline: 1px ${({ theme }) => theme.formPanel.inputBorder} solid;
  border: none;
  background: ${({ theme }) => theme.formPanel.inputBackground};
  border-radius: 4px;
  padding: 18px 4px 15px 20px;
  width: 100%;
  color: ${({ theme }) => theme.formPanel.inputText};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.4s;

  &:focus {
    outline: 1px ${({ theme }) => theme.formPanel.inputBorderFocus} solid;
  }
`;
