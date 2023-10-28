import styled, { css } from "styled-components";

export const StyledPaymentStatus = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  width: 104px;
  height: 40px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-left: 20px;
  transition: 0.4s;

  ${({ location }) =>
    location === "homepageList" &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        position: absolute;
        right: 24px;
        bottom: 28px;
      }
    `}

  ${({ status }) =>
    status === "paid" &&
    css`
      color: ${({ theme }) => theme.tile.paid};
      background: ${({ theme }) => theme.tile.paidBackground};
    `}

  ${({ status }) =>
    status === "pending" &&
    css`
      color: ${({ theme }) => theme.tile.pending};
      background: ${({ theme }) => theme.tile.pendingBackground};
    `}

    ${({ status }) =>
    status === "draft" &&
    css`
      color: ${({ theme }) => theme.tile.draft};
      background: ${({ theme }) => theme.tile.draftBackground};
    `}
`;
