import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;

    @media(max-width: ${({theme}) => theme.breakpoint.tabletMax}px){
        flex-direction: column;
    };
`;