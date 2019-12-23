import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from "../components/container"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head.js"
import Hero from "../components/hero.js"
import { lightForeground, foreground, transparent } from "../theme.js"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate (formatString:"MMMM Do, YYYY")
        body {
          json
        }
    }
  }
`

const BlogHero = styled(Hero)`
    padding: 2rem 0 2rem 0;
    margin-bottom: 3rem;
    h1 {
        margin-top: 2rem;
        font-size: 56px;
    }
`

const BlogLink = styled(Link)`
    font-size: .8rem;
    padding: 8px 12px;
    border-radius: 24px;
    text-decoration: none;
    margin-left: -12px;
    color: ${lightForeground};
    transition: 0.3s all ease-in-out;
    &:hover {
      color: ${foreground};
      background: ${transparent};
    }
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
            <Container>
              <BlogLink to="/blog">Back to Blog</BlogLink>
              <h1>{props.data.contentfulBlogPost.title}</h1>
            </Container>
          </BlogHero>
          <Container>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </Container>
        </Layout>
    )
}

export default Blog