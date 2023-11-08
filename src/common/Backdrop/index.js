import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  background-color: red;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
  background: #000;
  display: block;

  ${({ location }) =>
    location === "deletion" &&
    css`
      z-index: 6;
    `}
`;
