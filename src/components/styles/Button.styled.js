import styled from "styled-components";

export const Button = styled.button`
        margin-top: 1.2rem;
        padding: 1rem 4rem;
        font-family: inherit;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.body};
        background-color: ${({ theme }) => theme.colors.pink};
        border: none;
        border-radius: 1.5rem;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: transform .2s ease-in-out;

        &:hover {
            cursor: pointer;
            transform: scale(95%);
            opacity: .8;
        }

    @media (max-width: ${({theme}) => theme.mobile} ) {
        margin-top: 2rem;
        padding: .7rem 1.5rem;
        
    }


`