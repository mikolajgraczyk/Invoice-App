import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledConfirmDeletion = styled(motion.div)`
  position: fixed;
  padding: 51px 48px 48px;
  max-width: 480px;
  max-height: 249px;
  top: 50%;
  left: calc(50% + 51px);
  transform: translate(-50%, -50%);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  border-radius: 8px;
  z-index: 7;
  background: ${({ theme }) => theme.deleteWindow.background};
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 86%;
    left: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 34px 32px 32px;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.deleteWindow.mainText};
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.5px;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.deleteWindow.text1};
  font-size: 13px;
  line-height: 22px;
  letter-spacing: -0.1px;
`;

export const ButtonsSection = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 14px;
`;

export const DeleteButton = styled.button`
  background: ${({ theme }) => theme.deleteWindow.deleteBackground};
  color: ${({ theme }) => theme.deleteWindow.deleteText};
  padding: 18px 25px 15px 24px;
  padding: 18px 24px 15px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  border: none;
  border-radius: 24px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.tile.deleteHover};
  }
`;

export const CancelButton = styled.button`
  background: ${({ theme }) => theme.deleteWindow.cancelBackground};
  color: ${({ theme }) => theme.deleteWindow.cancelText};
  padding: 18px 24px 15px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  border: none;
  border-radius: 24px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.tile.editHover};
  }
`;
