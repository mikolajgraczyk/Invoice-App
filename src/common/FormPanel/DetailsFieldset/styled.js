import styled, { css } from "styled-components";

export const PaymentTermsButton = styled.button`
  border: 1px ${({ theme }) => theme.formPanel.inputBorder} solid;
  background: ${({ theme }) => theme.formPanel.inputBackground};
  border-radius: 4px;
  padding: 18px 16px 15px 20px;
  width: 100%;
  color: ${({ theme }) => theme.formPanel.inputText};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: 0.4s;

  &:focus {
    border: 1px ${({ theme }) => theme.formPanel.inputBorderFocus} solid;
  }

  &:hover {
    cursor: pointer;
  }

  option {
    color: ${({ theme }) => theme.formPanel.paymentSelect};
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
  }
`;

export const Calendar = styled.input`
  outline: 1px ${({ theme }) => theme.formPanel.inputBorder} solid;
  border: none;
  background: ${({ theme }) => theme.formPanel.inputBackground};
  border-radius: 4px;
  padding: 18px 16px 15px 20px;
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

  &:hover {
    cursor: pointer;
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;

export const TermSelector = styled.div`
  display: none;

  ${({isPaymentTermVisible}) => isPaymentTermVisible && css`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    box-shadow: ${({theme}) => theme.shadow};
  `}
`;
