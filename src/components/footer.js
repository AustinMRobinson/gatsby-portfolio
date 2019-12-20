import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import footerStyles from "./footer.module.scss"
import Container from '../components/container'

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
        <footer className={footerStyles.footer}>
            <Container>
                <p>Created by {data.site.siteMetadata.author} © 2019</p>
                <Link to="/componentPage">Components</Link>
            </Container>
        </footer>
    )
}

export default Footer