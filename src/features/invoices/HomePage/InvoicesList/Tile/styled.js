import styled, { css } from "styled-components";
import { ReactComponent as TileArrow } from "./TileArrow.svg";

export const StyledTile = styled.li`
  background: ${({ theme }) => theme.tile.background};
  padding: 16px 24px 16px 32px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 16px 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 25px 24px 22px 24px;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;
  }
`;

export const LeftTileSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 305px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    gap: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const Hash = styled.span`
  color: ${({ theme }) => theme.tile.hash};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.4s;
`;

export const InvoiceId = styled.span`
  color: ${({ theme }) => theme.tile.mainText};
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.25px;
  transition: 0.4s;
`;

export const PaymentTerm = styled.span`
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
`;

export const Due = styled.span`
  color: ${({ theme }) => theme.tile.text1};
  transition: 0.4s;
`;

export const PaymentDate = styled.span`
  color: ${({ theme }) => theme.tile.text2};
  transition: 0.4s;
`;

export const ClientName = styled.span`
  color: ${({ theme }) => theme.tile.text3};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  transition: 0.4s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    position: absolute;
    right: 24px;
  }
`;

export const RightTileSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const TotalPrice = styled.span`
  color: ${({ theme }) => theme.tile.mainText};
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.25px;
  transition: 0.4s;
`;

export const Status = styled.div`
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

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    position: absolute;
    right: 24px;
    bottom: 28px;
  }
`;

export const StyledTileArrow = styled(TileArrow)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
