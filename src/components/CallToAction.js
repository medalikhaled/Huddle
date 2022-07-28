import styled from "styled-components";
import {Button} from "./styles/Button.styled";

function CallToAction() {
  return (
    <Action>
      <h1>Ready to Build your Community?</h1>

      <Button>Get Started Now</Button>
    </Action>
  )
}

export default CallToAction


const Action = styled.div`
  text-align: center;
  padding: 2rem 4rem;
  background-color: #fff;
  color: ${({theme}) => theme.colors.VeryDarkCyan}; 
  font-size: .8rem;
  font-weight: 400;
  position: absolute;
  top: -12%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: .5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;



  Button {
    padding: 1rem 6rem;
    margin-top: 2rem;
  }
`