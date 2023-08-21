import styled from "styled-components";

export const StyledFormFieldset = styled.fieldset`
  border: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 25px;
  column-gap: 24px;
  color: ${({ theme }) => theme.formPanel.inputName};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  margin-bottom: 49px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin-bottom: 41px;
  }
`;

export const FieldsetLegend = styled.legend`
  color: ${({ theme }) => theme.formPanel.fieldsetText};
  margin-bottom: 24px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.4s;
`;

export const LongLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 9px;
  transition: 0.4s;
  grid-column-start: 1;
  grid-column-end: 4;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-column-end: 3;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 9px;
  transition: 0.4s;
`;

export const CountryLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 9px;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
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
