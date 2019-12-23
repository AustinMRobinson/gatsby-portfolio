/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    siteMetadata: {
      title: 'Austin Robinson',
      author: 'Austin Robinson',
    },
    plugins: [
      // {
      //   resolve: `gatsby-styled-components-dark-mode`,
      //   options: {
      //     light: require(`${__dirname}/src/theme.js`).lightTheme,
      //     dark: require(`${__dirname}/src/theme.js`).darkTheme,
      //   },
      // },
      'gatsby-plugin-styled-components',
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }
      },
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
      },
      'gatsby-plugin-sharp',
      `gatsby-transformer-sharp`,
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 900,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      }
    ]
}
