import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Head from "../components/head"
import Container from "../components/container"
import Hero from "../components/hero"
import { foreground, lightForeground, kindaLightForeground, lessTransparent, evenLessTransparent } from "../theme.js"
import Img from 'gatsby-image'

const BlogPosts = styled.ul ` 
    list-style-type: none;
    margin: 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`

const BlogImage = styled.div`
    box-shadow: 0 30px 60px -10px ${evenLessTransparent}, 0 18px 36px -18px ${evenLessTransparent};
    height: 320px;
    overflow: hidden;
    margin-bottom: 2rem;
    transition: 0.3s all;
    display: flex;
    align-content: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        height: 320px;
    }
    @media (max-width: 460px) {
        height: 280px;
    }
`

const BlogPost = styled.li `
    width: 48%;
    transition: all 0.3s;
    a {
        display: block;
        color: ${kindaLightForeground};
        text-decoration: none;
    }
    h2 {
        margin-bottom: .6rem;
        transition: all 0.3s;
    }
    p {
        color: ${lightForeground};
        font-weight: 500;
    }
    &:hover {
        h2 {
            color: ${foreground};
        }
        ${BlogImage} {
            box-shadow: 0 36px 72px -10px ${lessTransparent}, 0 24px 44px -18px ${lessTransparent};
        }
    }
    @media (max-width: 768px) {
        flex: 1 0 100%;
        margin-bottom: 4rem;
        h2 {
            margin-bottom: 0.2rem;
        }
    }
`

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
          edges {
            node {
              postThumbnail {
                fixed (width: 600, quality: 80) {
                    width
                    height
                    src
                    srcSet
                }
                title
              }
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)


    return (
        <Layout>
            <Head title="Blog" />
            <Hero>
                <Container>
                    <h1>Blog</h1>
                </Container>
            </Hero>
            <Container>
                <BlogPosts>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <BlogPost>  
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <BlogImage>
                                        <Img fixed={edge.node.postThumbnail.fixed} alt={edge.node.postThumbnail.title} draggable="false"></Img>
                                    </BlogImage>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </BlogPost>
                        )
                    })}
                </BlogPosts>
            </Container>
        </Layout>
    )
}


export default BlogPage