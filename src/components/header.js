import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks.js';
import { Link } from 'gatsby'
import styled from 'styled-components'
import "../styles/index.scss"
import Container from './container';
import { foreground, lightForeground, transparent, evenTransparent } from '../theme.js'
import ToggleMode from './togglebutton';
import Burger from '../components/burger.js';
import Menu from '../components/menu.js';

const HeaderStyles = styled.header`
    padding: .5rem 0;
    top: 0;
    width: 100%;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const NavLogo = styled(Link)`
    position: relative;
    z-index: 10;
    height: 3.5rem;
    width: 3.5rem;
    padding: 1rem;
    border-radius: 1.75rem;
    transition: all 0.3s ease-in-out;
    margin-left: -1rem;
    &:hover {
        background: ${transparent}
    }
    @media (max-width: 768px) {
        height: 3.75rem;
        width: 3.75rem;
        border-radius: 1.825rem;
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
}
`

const NavItem = styled(Link)`
    color: ${lightForeground};
    font-family: "Archivo";
    font-weight: 500;
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
    @media (max-width: 768px) {
        display: none;
    }
`

const NavMenu = styled.div`
`

const AlignNav = styled.div`
    display: flex;
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
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

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
                    <AlignNav>
                        <NavList>
                            <li><NavItem to="/blog">Blog</NavItem></li>
                            <li><NavItem to="/about">About Me</NavItem></li>
                            <li><NavItem to="/contact">Contact Me</NavItem></li>
                            <li><ToggleMode /></li>
                        </NavList>
                        <NavMenu ref={node}>
                            <Burger open={open} setOpen={setOpen} />
                            <Menu open={open} setOpen={setOpen} />
                        </NavMenu>
                    </AlignNav>
                </nav>
            </Container>
        </HeaderStyles>
    )
}

export default Header