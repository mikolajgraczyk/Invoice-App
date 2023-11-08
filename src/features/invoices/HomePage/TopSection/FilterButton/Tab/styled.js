import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFilterStatusTab = styled(motion.div)`
  background: ${({ theme }) => theme.statusTab.background};
  position: absolute;
  top: 54px;
  left: -37px;
  padding: 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 8px;
  z-index: 1;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  transition: 0.4s;
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 13px;
  padding: 8px 88px 8px 24px;
  color: ${({ theme }) => theme.statusTab.text};
  transition: 0.4s;

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.statusTab.boxBackground};
    border: 1px solid ${({ theme }) => theme.statusTab.box};
    border-radius: 2px;
    transition: all 0.4s, transform 0.1s;

    &:checked {
      background-color: ${({ theme }) => theme.statusTab.box};
      border-color: ${({ theme }) => theme.statusTab.box};
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
