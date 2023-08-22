import styled from "styled-components";

export const StyledOption = styled.button`
  background-color: ${({ theme }) =>
    theme.formPanel.paymentSelectOptionBackground};
  border: none;
  color: ${({ theme }) => theme.formPanel.inputText};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  border-bottom: 1px ${({ theme }) => theme.formPanel.inputBorder} solid;
  padding: 16px 16px 15px 24px;
  text-align: left;
  transition: 0.4s;

  &:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:hover{
    color: ${({ theme }) => theme.formPanel.paymentSelectOptionTextHover};
    cursor: pointer;
  };
`;
