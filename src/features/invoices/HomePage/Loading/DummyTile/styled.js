import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDummyTile = styled(motion.li)`
  background: ${({ theme }) => theme.tile.background};
  padding: 16px 24px 16px 32px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
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

export const IdDummy = styled.div`
  background: ${({ theme }) => theme.tile.text3};
  width: 59px;
  height: 15px;
  border-radius: 6px;
`;

export const PaymentTermDummy = styled.div`
  background: ${({ theme }) => theme.tile.text3};
  width: 92px;
  height: 15px;
  border-radius: 6px;
`;

export const ClientNameDummy = styled.div`
  background: ${({ theme }) => theme.tile.text3};
  width: 75px;
  height: 15px;
  border-radius: 6px;

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

export const TotalPriceDummy = styled.div`
  background: ${({ theme }) => theme.tile.text3};
  width: 69px;
  height: 24px;
  border-radius: 6px;
`;

export const PaymentStatusDummy = styled.div`
  width: 104px;
  height: 40px;
  margin-left: 20px;
  background: ${({ theme }) => theme.tile.text3};
  border-radius: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    position: absolute;
    right: 24px;
    bottom: 28px;
  }
`;

export const ArrowDummy = styled.div`
  width: 4px;
  height: 8px;
  background: ${({ theme }) => theme.tile.text3};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
