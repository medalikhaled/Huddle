import styled from "styled-components";

export const HeroContainer = styled.div`
    padding: 3rem 4.5rem;
    display: flex;

    div {
        width: 50%;
    }

    h1 {
        width: 70%;
        font-size: 2.5rem;
        padding-top: 3.5rem;
        font-weight: 700;
    }

    p {
        width: 80%;
        margin-top: 1.5rem;
        font-weight: 300;
        font-size: 1.25rem;

    }

    img {
        max-width: 100%;
    }


    
    @media (max-width: ${({theme}) => theme.mobile})  {
        flex-direction: column;
        padding: 1rem 2rem;
        text-align: center;
        height: fit-content;
        h1{
            margin-top: 3rem;
        }
        h1,p, div {
            width: 100%;
        }
        
        img {
            margin-top: 2rem;
        }
    }
`