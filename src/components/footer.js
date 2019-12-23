import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/container'
import StyledLink from '../components/styledlink'
import { foreground, kindaLightForeground, lightForeground, layer1} from "../theme.js"

const FooterStyles = styled.footer`
    background: ${layer1};
    color: ${lightForeground};
    padding: 4rem 0 2rem 0;
    margin-top: 6rem;
    ${StyledLink} {
        color: ${kindaLightForeground};
        padding: 0;
        margin-right: 2rem;
        &:hover {
            color: ${foreground};
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
                <li><StyledLink to="/componentPage">Components</StyledLink></li>
            </ul>
                <p>Created by {data.site.siteMetadata.author} © 2019</p>
            </Container>
        </FooterStyles>
    )
}

export default Footer