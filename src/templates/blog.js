import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from "../components/container"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head.js"
import Hero from "../components/hero.js"
import { lightForeground, foreground, lessTransparent, evenMoreTransparent } from "../theme.js"
import Img from "gatsby-image"
import Icon from "../components/icon.js"

export const data = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        publishedDate (formatString:"MMMM Do, YYYY")
        author {
          name
          profilePicture {
            fixed(width: 32, height: 32) {
              height
              width
              src
              srcSet
            }
            title
          }
        }
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
    padding: 4rem 0 3rem 0;
    h1 {
        margin-top: 2rem;
    }
    @media (max-width: 768px) {
    padding: 1rem 0 1.5rem 0;
    h1 {
      margin-bottom: 1rem;
    }
}
`

const ArrowIcon = styled(Icon)`
  fill: ${lightForeground};
  width: 8px;
  margin-right: 12px;
  transition: 1.5s all;
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
  font-weight: 600;
  &:hover {
    color: ${foreground};
    ${ArrowIcon} {
      fill: ${foreground};
    }
  }
`

const BlogContainer = styled(Container)`
    max-width: 900px;
`

const BlogContentContainer = styled(Container)`
    max-width: 688px;
`

const PostInfo = styled.div`
  display: flex;
  align-items: center;
`

const BlogAuthor = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${lightForeground};
  font-weight: 600;
  margin-right: 16px;
  transition: 0.3s all ease-in-out;
`

const AuthorImg = styled(Img)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 12px;
  transition: 0.3s all ease-in-out;
  box-shadow: 0 0px 24px ${lessTransparent};
`

const BlogDate = styled.p`
  color: ${lightForeground};
  margin: 0;
`

const BlogImage = styled.div`
    height: 560px;
    overflow: hidden;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto 4rem auto;
    box-shadow: 0 24px 44px -18px ${evenMoreTransparent};
    @media (max-width: 768px) {
      height: 424px;
    }
    @media (max-width: 460px) {
      height: 280px;
      margin-bottom: 2rem;
    }

`

const BlogImg = styled(Img)`
`

const AuthorLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    ${BlogAuthor} {
      color: ${foreground}
    }
    ${AuthorImg} {
      transform: scale(1.1);
      box-shadow: 0 4px 24px ${lessTransparent};
    }
  }
`

const Blog = (props) => {
  // used to grab and render images from the body JSON. Passed in after
  // need to look at the JSON in GraphiQL to know how deep to dive 
    const options = {
      renderNode: {
        "embedded-asset-block": (node) => {
          const alt = node.data.target.fields.title['en-US'].title
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
              <PostInfo>
                <AuthorLink><BlogAuthor><AuthorImg fixed={props.data.contentfulBlogPost.author.profilePicture.fixed} alt={props.data.contentfulBlogPost.author.profilePicture.title} draggable="false"></AuthorImg>{props.data.contentfulBlogPost.author.name}</BlogAuthor></AuthorLink>
                <BlogDate>{props.data.contentfulBlogPost.publishedDate}</BlogDate>
              </PostInfo>
            </BlogContentContainer>
          </BlogHero>
          <BlogContainer>
            <BlogImage>
              <BlogImg fixed={props.data.contentfulBlogPost.postThumbnail.fixed} alt={props.data.contentfulBlogPost.postThumbnail.title} draggable="false"></BlogImg>
            </BlogImage>
          </BlogContainer>
          <BlogContentContainer>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </BlogContentContainer>
        </Layout>
    )
}

export default Blog