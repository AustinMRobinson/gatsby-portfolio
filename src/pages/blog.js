import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import blogStyles from './blog.module.scss'
import Head from "../components/head"
import Container from "../components/container"

const Hero = styled.section`
    padding: 5rem 0 2rem 0;
    color: white;
    background: black;
    margin-bottom: 3rem;
    h1 {
        font-size: 56px;
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
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>       
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Container>
        </Layout>
    )
}


export default BlogPage