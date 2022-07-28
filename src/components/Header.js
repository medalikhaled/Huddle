import {StyledHeader} from './styles/Header.styled';
import Nav from './Nav';
import Hero from './Hero';

function Header() {
  return (
    <StyledHeader>
        <Nav/>
        <Hero />
    </StyledHeader>
  )
}

export default Header