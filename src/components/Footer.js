import React from 'react'
import CallToAction from './CallToAction'
import FooterContainer, {MiniLogo, List, FlexItem, FAQ, Social} from './styles/Footer.styled'
import { BsFacebook } from 'react-icons/bs';
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';
import {IconContext} from 'react-icons';


function Footer() {
  return (
    <FooterContainer>
        <CallToAction />
        <FlexItem>
            
            <List>
                <li>
                    <MiniLogo src='./assets/minilogo.svg' alt='logo'></MiniLogo>
                </li>
                <li style={{display: 'flex'}}>
                    <img src='./assets/icon-location.svg' alt='icon' style={{marginRight: '0.8rem'}}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit.
                    </p>
                </li>

                <li style={{display: 'flex'}}>
                    <img src='./assets/icon-phone.svg' alt='icon' style={{marginRight: '0.8rem'}}></img>
                    <p>+216-97-025-314</p>
                </li>

                
                <li style={{display: 'flex'}}>
                    <img src='./assets/icon-email.svg' alt='icon' style={{marginRight: '0.8rem'}}></img>
                    <p>medalikhaled331@gmail.com</p>
                </li>
            </List>

        </FlexItem>
        <FlexItem style={{marginLeft: '10rem'}}>
            <FAQ>
                <h5>About Us</h5>
                <h5>What we Do</h5>
                <h5>FAQ</h5>
            </FAQ>
        </FlexItem>
        <FlexItem style={{marginLeft: '4rem'}}>
            <FAQ>
                <h5>Career</h5>
                <h5>Blog</h5>
                <h5>Contact Us</h5>
            </FAQ>
        </FlexItem>
        <FlexItem>            
            <IconContext.Provider value={{ className: "shared-class", size: 35 }}>
                <Social>
                    <BsFacebook />
                    <AiOutlineTwitter />
                    <AiOutlineInstagram />
                </Social>
            </IconContext.Provider>

            <p style={{fontWeight: "lighter", fontSize: ".7rem"}}>&copy;  copyright 2022 Huddle, all rights reserved </p>
        </FlexItem>
    </FooterContainer>
  )
}

export default Footer