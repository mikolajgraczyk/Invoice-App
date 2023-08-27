import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    @media(max-width: ${({theme}) => theme.breakpoint.tabletMax}px){
        flex-direction: column;
    };
`;