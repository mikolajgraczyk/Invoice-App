import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body{
    font-family: 'League Spartan', sans-serif;
    background: ${({ theme }) => theme.main.background};
    transition: 0.4s;

    ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-button {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.background};
    border-radius: 4px;
  }
    }
`;
