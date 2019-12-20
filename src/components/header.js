import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import "../styles/index.scss"
import Container from './container';


const HeaderStyles = styled.header`
    padding: 2rem 0;
    background: black;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const NavLogo = styled(Link)`
    height: 48px;
    width: 48px;
    padding: 4px;
`

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    li {
        margin: 0;
    }
`

const NavItem = styled(Link)`
    color: #999999;
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;
    transition: 0.3s all;
    padding: 12px 20px;
    &:hover {
        background: rgba(255,255,255,.1);
        color: white;   
    }
    &:active{
        color: white;
    }
`

const Header = (props) => {
    const data = useStaticQuery(graphql`
        query {
            contentfulHomepage {
                siteLogo {
                    file {
                        url
                    }
                    title
                }
            }
        }
    `)

    console.log(data)

    return (
        <HeaderStyles>
            <Container>
                <nav>
                    <NavLogo><img src={data.contentfulHomepage.siteLogo.file.url} alt={data.contentfulHomepage.siteLogo.title}></img></NavLogo>
                    <NavList>
                        <li><NavItem to="/">Home</NavItem></li>
                        <li><NavItem to="/blog">Blog</NavItem></li>
                        <li><NavItem to="/about">About Me</NavItem></li>
                        <li><NavItem to="/contact">Contact Me</NavItem></li>
                    </NavList>
                </nav>
            </Container>
        </HeaderStyles>
    )
}

export default Header