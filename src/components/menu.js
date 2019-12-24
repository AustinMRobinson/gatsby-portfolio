import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { bool } from 'prop-types';
import { foreground, layer2, accent, evenLessTransparent } from '../theme.js'

export const StyledMenu = styled.div`
    display: none;
    background: ${layer2};
    box-shadow: 0 18px 36px -18px ${evenLessTransparent};
    height: 100vh;
    text-align: left;
    padding: 4rem 6rem 3rem 3rem;
    position: absolute;
    z-index: 8;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    @media (max-width: 768px) {
        padding: 4rem 4rem 3rem 1rem;
        display: flex;

    }
    @media (max-width: 460px) {
        display: flex;
        align-items: center;
        justify-items: center;
        padding: 3rem;
        width: 100%;
    }
`

const NavMenuList = styled.li`
    display: block;
    list-style-type: none;
    width: 100%;
`

const NavItem = styled(Link)`
    width: 100%;
    font-size: 1.5rem;
    padding: 2rem 2.5rem;
    margin: 1rem 0;
    font-weight: bold;
    text-align: left;
    color: ${foreground};
    text-decoration: none;
    transition: color 0.3s linear;
    display: block;
    @media (max-width: 460px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${accent};
    }
    @media (max-width: 768px) {
        padding: 1rem 1.5rem;
        margin: 1rem 0;
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