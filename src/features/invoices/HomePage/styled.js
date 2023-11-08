import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHomePage = styled(motion.main)`
  max-width: 730px;
  width: 100%;
  margin: 0 auto;
  padding-top: 78px;
  padding-bottom: 48px;
  transform: translateX(51.5px);

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    max-width: none;
    padding: 62px 48px 173px;
    transform: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 36px 24px 105px;
  }
`;
