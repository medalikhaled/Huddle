import { HeroContainer } from "./styles/Hero.styled"
import {Button} from './styles/Button.styled';

function Hero() {
  return (
    <HeroContainer>
        <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-Imagines the way we build communities. You have a voice, but so does your  audience, Create connections with your users as you engage in geniuine discussion.</p>
            <Button go="#" >Get Started for Free</Button>
        </div>
        <div>
            <img src="./assets/illustration-mockups.svg" alt="illustration"/>
        </div>
    </HeroContainer>
  )
}

export default Hero
