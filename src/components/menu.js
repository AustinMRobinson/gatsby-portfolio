import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { bool } from 'prop-types';
import { foreground, accent, evenLessTransparent, evenMoreTransparent } from '../theme.js'

export const StyledMenu = styled.div`
    display: none;
    background: ${evenMoreTransparent};
    backdrop-filter: saturate(180%) blur(20px);
    box-shadow: 0 18px 36px -18px ${evenLessTransparent};
    width: 100%;
    text-align: left;
    padding: 4rem 6rem 3rem 3rem;
    position: absolute;
    z-index: 8;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
    @media (max-width: 768px) {
        padding: 5rem 1rem 1.5rem 0.5rem;
        display: ${({ open }) => open ? 'flex' : 'none'};
    }
    @media (max-width: 460px) {
        position: fixed;
        align-items: center;
        justify-items: center;
        padding: 3rem;
        width: 100%;
        height: 100%;
        display: ${({ open }) => open ? 'flex' : 'none'};
    }
`

const NavMenuList = styled.li`
    display: block;
    list-style-type: none;
    width: 100%; 
`

const NavItem = styled(Link)`
    width: 100%;
    font-family: "Archivo";
    font-weight: 700;
    font-size: 1.5rem;
    padding: 2rem 2.5rem;
    margin: 1rem 0;
    font-weight: bold;
    text-align: left;
    color: ${foreground};
    text-decoration: none;
    transition: color 0.3s linear;
    display: block;
    &:hover {
      color: ${accent};
    }
    @media (max-width: 768px) {
        padding: 1rem;
        margin: 1rem 0;
    }
    @media (max-width: 460px) {
      font-size: 1.5rem;
      text-align: center;
    }
`



const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <NavMenuList>
            <li><NavItem to="/blog">Blog</NavItem></li>
            <li><NavItem to="/about">About Me</NavItem></li>
            <li><NavItem to="/contact">Contact Me</NavItem></li>
        </NavMenuList>
      </StyledMenu>
    )
  }
  Menu.propTypes = {
    open: bool.isRequired,
  }
  export default Menu;