import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
// import './header.module.scss'
import headerStyles from './header.module.scss' // default export for CSS Modules, allows us to scope it locally. Has its own properties

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Me</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header