import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/container'
import StyledLink from '../components/styledlink'

const FooterStyles = styled.footer`
    background: black;
    color: white;
    padding: 4rem 0 2rem 0;
    margin-top: 4rem;
    ${StyledLink} {
        color: rgba(255,255,255,0.75);
        padding: 0;
        margin-right: 2rem;
        &:hover {
            color: white;
        }
    }
    ul {
        margin: 0 0 2rem 0;
        list-style-type: none;
        li {
            display: inline;
        }
    }
    p {
        font-size: 14px;
        color: #adadad;
    }
`

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)

    return (
        <FooterStyles>
            <Container>
            <ul>
                <li><StyledLink to="/blog">Blog</StyledLink></li>
                <li><StyledLink to="/about">About Me</StyledLink></li>
                <li><StyledLink to="/contact">Contact Me</StyledLink></li>
                <li><StyledLink to="/componentpage">Components</StyledLink></li>
            </ul>
                <p>Created by {data.site.siteMetadata.author} © 2019</p>
            </Container>
        </FooterStyles>
    )
}

export default Footer