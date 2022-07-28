import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    background: url('./assets/bg-hero-desktop.svg') no-repeat ${({theme})=> theme.colors.header };
    background-size : cover;
    height: 99vh;
    padding: 40px 0;


    @media (max-width: ${({theme}) => theme.mobile}) {
        background: url('./assets/bg-hero-mobile.svg') no-repeat ${({theme})=> theme.colors.header };
        background-size : cover;
        height: fit-content;
        padding: 20px 0;
    }
`;