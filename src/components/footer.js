import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/container'
import StyledLink from '../components/styledlink'
import { foreground, kindaLightForeground, lightForeground, evenMoreTransparent} from "../theme.js"

const FooterStyles = styled.footer`
    color: ${lightForeground};
    margin-top: 6rem;
    ${StyledLink} {
        color: ${kindaLightForeground};
        padding: 0;
        font-size: 0.7rem;
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
    @media (max-width: 768px) {
        ul {
            flex: 1 0 100%;
            li {
            display: block;
            text-align: center;
            }
        }
        p {
            display: block;
            width: 100%;
            text-align: center;
            margin-top: 4rem;
        }
        ${StyledLink} {
            padding: 1rem;
            margin: .5rem;
            font-size: .8rem;
            display: block;
        }
    }
`

const FooterContainer = styled(Container)`
    border-top: 1px solid ${evenMoreTransparent};
    padding: 4rem 1rem 2rem 1rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 6rem 2rem 3rem 2rem;
        flex-wrap: wrap;
    }
    @media (max-width: 420px) {
        padding: 4rem 1rem 2rem 1rem;
    }
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
            <FooterContainer>
            <ul>
                <li><StyledLink to="/blog">Blog</StyledLink></li>
                <li><StyledLink to="/about">About Me</StyledLink></li>
                <li><StyledLink to="/contact">Contact Me</StyledLink></li>
                <li><StyledLink to="/componentPage">Components</StyledLink></li>
            </ul>
                <p>Created by {data.site.siteMetadata.author} © 2019</p>
            </FooterContainer>
        </FooterStyles>
    )
}

export default Footer