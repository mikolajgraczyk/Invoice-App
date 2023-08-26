import styled from "styled-components";

export const StyledMobileItemList = styled.div`
    display: none;

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
        display: flex;
        flex-direction: column;
        gap: 49px;
        margin-left: 1px;
    };
`;

export const ItemInputField = styled.div`
    display: grid;
    grid-template-columns: 4fr 6.25fr 3.5fr auto;
    /* column-gap: 16px;
    row-gap: 25px; */
    
`;