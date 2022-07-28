import styled from "styled-components";

const CardStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 40px 0;
    padding: 60px;
    border-radius: 1.25rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    div {
        width: 50%;
    }

    img {
        width: 100%;
    }

    p { 
        padding-right: 1.5rem;
        margin-top: 1rem;
        font-weight: 300;
        font-size: 1rem;
    }
`

export default CardStyle;