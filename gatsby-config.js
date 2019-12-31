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
     {
        resolve: `gatsby-plugin-favicon`,
        options: {
          logo: "./src/favicon.png",
          background: '#0f0f0f',
          theme_color: '#0f0f0f',
          display: 'standalone',
          orientation: 'any',
          start_url: '/?homescreen=1',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            yandex: false,
            windows: false
          }
        }
      },
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
