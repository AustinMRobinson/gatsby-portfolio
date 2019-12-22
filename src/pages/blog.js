import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Head from "../components/head"
import Container from "../components/container"
import Hero from "../components/hero"
import { foreground, lightForeground, kindaLightForeground, lessTransparent, evenLessTransparent } from "../theme.js"

const BlogPosts = styled.ul ` 
    list-style-type: none;
    margin: 0;
    display: flex;
    justify-content: space-between;
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
    img {
        width: 100%;
        object-fit: cover;
        transition: 0.3s all;
    }
`

const BlogPost = styled.li `
    width: 48%;
    margin: 1rem 0;
    transition: all 0.3s;
    a {
        display: block;
        color: ${kindaLightForeground};
        text-decoration: none;
    }
    h2 {
        margin-bottom: 10px;
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
        img {
            transform: scale(1.1);
        }
        ${BlogImage} {
            box-shadow: 0 36px 72px -10px ${lessTransparent}, 0 24px 44px -18px ${lessTransparent};
        }
    }
`

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(
          sort: {
            fields:publishedDate,
            order:DESC
          }
        ) {
          edges {
            node {
              postThumbnail {
                file {
                  url
                }
                title
              }
              title
              slug
              publishedDate (formatString:"MMMM Do, YYYY")
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
                                        <img src={edge.node.postThumbnail.file.url} alt={edge.node.postThumbnail.title}></img>
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