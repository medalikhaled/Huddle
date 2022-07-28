import styled from "styled-components";


const FooterContainer = styled.div`
    background-color: ${({theme}) => theme.colors.VeryDarkCyan};
    color: #fff;
    position: relative;
    padding-top: 1rem;
    padding: 3rem 4.5rem ;
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-top: 15rem;

    
`

export default FooterContainer;

export const FlexItem = styled.div`
    width: 35rem;
    font-size: .7rem;
`

export const MiniLogo = styled.img`
    width: 5rem;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;

    li:not(:last-child) {
        margin-bottom: 1rem;
    }

    li:not(:first-child) {
        img {
            height: 1rem;
        }
    }
`

export const FAQ = styled.div`

    h5 {
        //Should be transformed into a Link element when we add a router
        color: #fff ;
        font-weight: lighter;
        font-size: .7rem;
        transition: all .2s ease;
    }

    h5:hover {
        cursor: pointer;
        text-decoration: underline;
    }

`

export const Social = styled.div`
    margin-bottom: 6rem;
    display: flex;
    justify-content: center;
    gap: 1rem;

    * {
        border: 1px solid #fff;
        padding: 5px;
        border-radius: 50%;
        transition: all .1s ease-in-out;
    }

    *:hover {
        cursor: pointer;
        color: ${({theme}) => theme.colors.pink} ;
        border: 1px solid ${({theme}) => theme.colors.pink} ;

    }
`