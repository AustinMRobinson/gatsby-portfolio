import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from "../components/container"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head.js"
import Hero from "../components/hero.js"
import { lightForeground } from "../theme.js"
import Img from "gatsby-image"

export const data = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate (formatString:"MMMM Do, YYYY")
        postThumbnail {
          fluid(quality: 80) {
            src
            srcSet
          }
          title
        }
        body {
          json
        }
    }
  }
`

const BlogHero = styled(Hero)`
    padding: 4rem 0 1rem 0;
    h1 {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        font-size: 56px;
    }
`

// const BlogLink = styled(Link)`
//     display: inline-block;
//     text-align: center;
//     font-size: .8rem;
//     padding: 8px 12px;
//     border-radius: 24px;
//     text-decoration: none;
//     margin-left: -12px;
//     color: ${lightForeground};
//     transition: 0.3s all ease-in-out;
//     margin: 0 auto;
//     &:hover {
//       color: ${foreground};
//       background: ${transparent};
//     }
// `

const BlogContainer = styled(Container)`
    max-width: 900px;
    img {
      margin-bottom: 4rem;
    }
`

const BlogContentContainer = styled(Container)`
    max-width: 680px;
`

const BlogDate = styled.p`
    color ${lightForeground};
`

const Blog = (props) => {
  // used to grab and render images from the body JSON. Passed in after
  // need to look at the JSON in GraphiQL to know how deep to dive 
    const options = {
      renderNode: {
        "embedded-asset-block": (node) => {
          const alt = node.data.target.fields.title['en-US']
          const url = node.data.target.fields.file['en-US'].url
          return <img alt={alt} src={url}></img>
        }
      }
    }
    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title} />
          <BlogHero>
            <BlogContentContainer>
              {/* <BlogLink to="/blog">Back to Blog</BlogLink> */}
              <h1>{props.data.contentfulBlogPost.title}</h1>
              <BlogDate>{props.data.contentfulBlogPost.publishedDate}</BlogDate>
            </BlogContentContainer>
          </BlogHero>
          <BlogContainer>
            <Img fluid={props.data.contentfulBlogPost.postThumbnail.fluid} alt={props.data.contentfulBlogPost.postThumbnail.title} draggable="false"></Img>
          </BlogContainer>
          <BlogContentContainer>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </BlogContentContainer>
        </Layout>
    )
}

export default Blog