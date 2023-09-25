import styled from "styled-components";

export const StyledBottomButtonsSection = styled.div`
  padding: 31px 24px 31px 0;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 21px 16px 22px 0;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
  }
`;

export const DiscardButton = styled.button`
  padding: 18px 25px 15px 24px;
  border: none;
  border-radius: 24px;
  background: ${({ theme }) => theme.formPanel.discardButtonBackground};
  color: ${({ theme }) => theme.formPanel.discardButtonText};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 18px 19px 15px 18px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const DraftButton = styled.button`
  grid-column-start: 3;
  border-radius: 24px;
  border: none;
  padding: 18px 22px 15px 24px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  background: ${({ theme }) => theme.formPanel.saveDraftBackground};
  color: ${({ theme }) => theme.formPanel.saveDraftText};
  white-space: nowrap;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-column-start: 2;
    padding: 18px 13.89px 15px 16.11px;
  }

  @media (max-width: 360px) {
    white-space: wrap;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SaveButton = styled.button`
  border-radius: 24px;
  border: none;
  padding: 18px 23px 15px 24px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  background: ${({ theme }) => theme.formPanel.saveSendBackground};
  color: ${({ theme }) => theme.formPanel.saveSendText};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 18px 15px 15px 16px;
  }

  @media (max-width: 360px) {
    white-space: wrap;
  }

  &:hover {
    cursor: pointer;
  }
`;
