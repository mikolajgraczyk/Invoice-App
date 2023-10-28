import styled, { css } from "styled-components";

export const StyledControlButtons = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: center;
    gap: 2.5%;
  }
`;

export const ControlButton = styled.button`
  padding: 18px 23px 15px 24px;
  border: none;
  border-radius: 24px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.3s;

  ${({ status }) =>
    status === "edit" &&
    css`
      background: ${({ theme }) => theme.tile.editBackground};
      color: ${({ theme }) => theme.tile.editText};

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.tile.editHover};
      }
    `}

  ${({ status }) =>
    status === "delete" &&
    css`
      background: ${({ theme }) => theme.tile.deleteBackground};
      color: ${({ theme }) => theme.tile.deleteText};

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.tile.deleteHover};
      }
    `}

    ${({ status }) =>
    status === "markPaid" &&
    css`
      background: ${({ theme }) => theme.tile.markPaidBackground};
      color: ${({ theme }) => theme.tile.markPaidText};

      &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.tile.markPaidHover};
      }
    `}
`;
