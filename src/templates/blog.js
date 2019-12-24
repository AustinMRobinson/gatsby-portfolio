import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from "../components/container"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head.js"
import Hero from "../components/hero.js"
import { lightForeground, foreground, transparent } from "../theme.js"
import Img from "gatsby-image"
import Icon from "../components/icon.js"

export const data = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate (formatString:"MMMM Do, YYYY")
        postThumbnail {
          fixed(width:900 quality: 80) {
            width
            height
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

const ArrowIcon = styled(Icon)`
  fill: ${lightForeground};
  width: 8px;
  margin-right: 12px;
`

const BlogLink = styled(Link)`
  display: inline-flex;
  font-size: .8rem;
  padding: 8px 20px;
  border-radius: 24px;
  text-decoration: none;
  margin-left: -18px;
  color: ${lightForeground};
  transition: 0.3s all ease-in-out;
  align-items: center;
  &:hover {
    color: ${foreground};
    background: ${transparent};
    ${ArrowIcon} {
      fill: ${foreground};
    }
  }
`

const BlogContainer = styled(Container)`
    max-width: 900px;
`

const BlogContentContainer = styled(Container)`
    max-width: 680px;
`

const BlogDate = styled.p`
    color ${lightForeground};
`

const BlogImg = styled(Img)`
    margin: 0 auto 4rem auto;
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
              <BlogLink to="/blog"><ArrowIcon name="arrow left" title="Arrow Left"></ArrowIcon>Back to Blog</BlogLink>
              <h1>{props.data.contentfulBlogPost.title}</h1>
              <BlogDate>{props.data.contentfulBlogPost.publishedDate}</BlogDate>
            </BlogContentContainer>
          </BlogHero>
          <BlogContainer>
            <BlogImg fixed={props.data.contentfulBlogPost.postThumbnail.fixed} alt={props.data.contentfulBlogPost.postThumbnail.title} draggable="false"></BlogImg>
          </BlogContainer>
          <BlogContentContainer>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </BlogContentContainer>
        </Layout>
    )
}

export default Blog