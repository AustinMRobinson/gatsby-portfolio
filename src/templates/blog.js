import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout.js'
import Container from "../components/container"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head.js"
import Hero from "../components/hero.js"
import { kindaLightForeground, lightForeground, foreground, transparent, lessTransparent, evenMoreTransparent, layer1 } from "../theme.js"
import Img from "gatsby-image"
import Icon from "../components/icon.js"
import Author from "../components/author.js"

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
        tags
        morePosts {
          title
          slug
          author {
            name
            profilePicture {
              fixed(width: 32, height: 32) {
                src
                height
                width
                srcSet
              }
            }
          }
          publishedDate (formatString:"MMMM Do, YYYY")
          postThumbnail {
            fixed( width:600 quality: 80) {
              src
              srcSet
              width
              height
            }
            title
          }
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
  flex-wrap: wrap;
`

const Divider = styled.p`
  margin: 2px 8px 0 8px;
  color: ${lightForeground};
  font-size: 0.8rem;
  @media (max-width: 460px) {
    display: none;
  }
`

const BlogDate = styled.p`
  color: ${lightForeground};
  margin: 2px 16px 0 0;
  font-size: 0.9rem;
  @media (max-width: 460px) {
    margin-right: 16px;
  }
`

const BlogCategories = styled.div`
  margin-top: -1px;
`

const BlogCategory = styled(Link)`
  color: ${lightForeground};
  background: ${evenMoreTransparent};
  text-decoration: none;
  padding: 4px 12px;
  font-size: 0.8rem;
  margin-right: 4px;
  border-radius: 12px;
  transition: 0.3s all ease-in-out;
  &:hover {
    color: ${foreground};
    background: ${layer1};
  }
`

const BlogImage = styled.div`
    max-height: 520px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-items: center;
    height: 100%;
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

const MorePosts = styled.div`
    margin-top: 5rem;
    h2 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    @media (max-width: 768px) {
      margin-top: 5rem;
      h2 {
        margin-bottom: 1rem;
      }
    } 
`

const PostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-wrap: wrap;
  }
`

const MorePostsImage = styled.div`
    height: 280px;
    overflow: hidden;
    margin-bottom: 2rem;
    transition: 0.3s all;
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    box-shadow: 0 16px 32px -10px ${lessTransparent};
    img {
      margin: 0rem;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 460px) {
        height: 220px;
    }
`

const Post = styled(Link)`
    width: 48%;
    padding: 2rem;
    border: 1px solid ${evenMoreTransparent};
    text-decoration: none;
    transition: 0.3s all ease-in-out;
    h3 {
      color: ${kindaLightForeground};
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      transition: 0.3s all ease-in-out;
    }
    &:hover {
      background: ${layer1};
      h3 {
        color: ${foreground};
      }
      ${MorePostsImage} {
        box-shadow: 0 16px 32px -10px ${transparent};
      }
    }
    @media (max-width: 768px) {
      flex: 1 0 100%;
      margin: 1.5rem 0;
      padding: 1.3rem;
  }
`




const Blog = ({ data }) => {
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
          <Head title={data.contentfulBlogPost.title} />
          <BlogHero>
            <BlogContentContainer>
              <BlogLink to="/blog"><ArrowIcon name="arrow left" title="Arrow Left"></ArrowIcon>Back to Blog</BlogLink>
              <h1>{data.contentfulBlogPost.title}</h1>
              <PostInfo>
                <Author fixed={data.contentfulBlogPost.author.profilePicture.fixed} name={data.contentfulBlogPost.author.name}/>
                <Divider>•</Divider>
                <BlogDate>{data.contentfulBlogPost.publishedDate}</BlogDate>
                <BlogCategories>
                  {data.contentfulBlogPost.tags.map(tag => (
                    <BlogCategory key={tag}>
                      {tag}
                    </BlogCategory>
                  ))}
                </BlogCategories>
              </PostInfo>
            </BlogContentContainer>
          </BlogHero>
          <BlogContainer>
            <BlogImage>
              <BlogImg objectFit="cover" objectPosition="50% 50%" fixed={data.contentfulBlogPost.postThumbnail.fixed} alt={data.contentfulBlogPost.postThumbnail.title} draggable="false"></BlogImg>
            </BlogImage>
          </BlogContainer>
          <BlogContentContainer>
            {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
          </BlogContentContainer>
          <section>
            <Container>
              <MorePosts>
              <h2>Keep Reading</h2>              
              <PostWrapper>
                {data.contentfulBlogPost.morePosts.map(morePost => (
                    <Post to={`/blog/${morePost.slug}`} key={morePost}>
                      <MorePostsImage>
                        <Img objectFit="cover" objectPosition="50% 50%" fixed={morePost.postThumbnail.fixed} alt={morePost.postThumbnail.title} draggable="false"></Img>
                      </MorePostsImage>
                      <h3>{morePost.title}</h3>
                      <PostInfo>
                        <Author fixed={morePost.author.profilePicture.fixed} name={morePost.author.name}/>
                        <Divider>•</Divider>
                        <BlogDate>{morePost.publishedDate}</BlogDate>
                      </PostInfo>
                    </Post>
                  ))}
              </PostWrapper>
              </MorePosts>
            </Container>
          </section>
        </Layout>
    )
}

export default Blog