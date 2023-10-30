import styled, { css } from "styled-components";

export const Backdrop = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
  opacity: 0.4984;
  background: #000;
  display: block;
  transition: 0.4s;

  ${({ location }) =>
    location === "deletion" &&
    css`
      z-index: 6;
    `}
`;
