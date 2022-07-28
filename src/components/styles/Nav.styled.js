import styled from "styled-components";


export const Navigation = styled.nav`
padding: 1rem 4.5rem;
display: flex;
justify-content: space-between;

img {
    max-width: 200px;

    &:hover {
        cursor: pointer;
        animation: logoScale .5s ease-in-out;
    }
}


button {
    padding: .7rem 3rem;
    font-family: inherit;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.VeryDarkCyan};
    background-color: #fff;
    border: none;
    border-radius: 1.25rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: transform .2s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(95%);
    }

}

@keyframes logoScale {
    0% , 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}



@media (max-width: ${({theme}) => theme.mobile})  {

    padding: 1rem 2rem;
    
    img {
        max-width: 35%;
        max-height: auto;
    }

    button {
        padding: .7rem 1.5rem;
    }
}

`;