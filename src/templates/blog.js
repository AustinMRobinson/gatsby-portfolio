import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from "../components/container"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head"

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

const Hero = styled.section`
    padding: 5rem 0 2rem 0;
    color: ${props => props.theme.negative};
    background: ${props => props.theme.foreground};
    margin-bottom: 3rem;
    h1 {
        font-size: 56px;
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
          <Hero>
            <Container>
              <Link to="/blog">Back to Blog</Link>
              <h1>{props.data.contentfulBlogPost.title}</h1>
            </Container>
          </Hero>
          <Container>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </Container>
        </Layout>
    )
}

export default Blog