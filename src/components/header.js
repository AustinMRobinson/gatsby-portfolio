import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import "../styles/index.scss"
import Container from './container';
import { layer1, foreground, lightForeground, transparent, moreTransparent, evenTransparent } from '../theme.js'
import ToggleMode from '..components/ToggleMode.js';

const HeaderStyles = styled.header`
    padding: .5rem 0;
    background: ${layer1};
    position: sticky;
    top: 0;
    width: 100%;
    box-shadow: 0 30px 60px -10px ${moreTransparent}, 0 18px 36px -18px ${moreTransparent};
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const NavLogo = styled(Link)`
    height: 56px;
    width: 56px;
    padding: 14px;
    border-radius: 28px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: ${transparent}
    }
`

const NavIcon = styled.svg`
    fill: ${evenTransparent};
    transition: 0.3s all ease-in-out;
`

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    align-items: center;
    li {
        margin: 0;
    }
`

const NavItem = styled(Link)`
    color: ${lightForeground};
    font-size: 0.9rem;
    margin-right: .75rem;
    text-decoration: none;
    transition: 0.3s all;
    padding: 12px 24px;
    border-radius: 24px;
    &:hover {
        background: ${transparent};
        color: ${foreground};   
    }
    &:active {
        color: ${foreground};
    }
`

const Header = (props) => {

    // const data = useStaticQuery(graphql`
    //     query {
    //         contentfulHomepage {
    //             siteLogo {
    //                 file {
    //                     url
    //                 }
    //                 title
    //             }
    //         }
    //     }
    // `)

    // <img src={data.contentfulHomepage.siteLogo.file.url} alt={data.contentfulHomepage.siteLogo.title}></img>

    return (
        <HeaderStyles>
            <Container>
                <nav>
                    <NavLogo>
                        <NavIcon title="Austin Robinson Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path class="st0" d="M0,0v64h64L32,32L0,0z"/>
                            <path class="st0" d="M42.8,0H0v42.5h42.8c11.7,0,21.2-9.5,21.2-21.2S54.5,0,42.8,0z"/>
                        </NavIcon>
                    </NavLogo>
                    <NavList>
                        <li><NavItem to="/blog">Blog</NavItem></li>
                        <li><NavItem to="/about">About Me</NavItem></li>
                        <li><NavItem to="/contact">Contact Me</NavItem></li>
                        <li><ToggleMode /></li>
                    </NavList>
                </nav>
            </Container>
        </HeaderStyles>
    )
}

export default Header