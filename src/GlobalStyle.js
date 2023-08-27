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
    }
`;
