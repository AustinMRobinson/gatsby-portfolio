import React from "react"
import Layout from '../components/layout.js'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'
import Head from "../components/head"
import Container from "../components/container"
import Hero from "../components/hero"
import { foreground, lightForeground, kindaLightForeground, lessTransparent, evenLessTransparent, evenMoreTransparent } from "../theme.js"

const FreelanceItems = styled.div` 
    list-style-type: none;
    margin: 0;
    display: grid;
    grid-template-columns: 31% 31% 31%;
    grid-gap: 3.5%;
    @media (max-width: 768px) {
        grid-template-columns: 47% 47%;
        grid-gap: 6%;
    }
    @media (max-width: 460px) {
        grid-template-columns: 100%;
        grid-gap: 0%;
    }
`

const FreelanceImage = styled.div`
    box-shadow: 0 30px 60px -10px ${evenLessTransparent}, 0 18px 36px -18px ${evenLessTransparent};
    max-height: 220px;
    overflow: hidden;
    margin-bottom: 2rem;
    transition: 0.3s all;
    @media (max-width: 768px) {
        min-height: 240px;
    }
    @media (max-width: 460px) {
    }
`

const FlImg = styled(Img)`
    max-height: 100%;
`

const FreelanceItem = styled.div`
    transition: all 0.3s;
    a {
        display: block;
        color: ${kindaLightForeground};
        text-decoration: none;
    }
    h2 {
        margin-bottom: .4rem;
        transition: all 0.3s;
    }
    p {
        color: ${lightForeground};
        font-family: "Archivo";
        margin: 0;
    }
    &:hover {
        h2 {
            color: ${foreground};
        }
        ${FreelanceImage} {
            box-shadow: 0 36px 72px -10px ${lessTransparent}, 0 24px 44px -18px ${lessTransparent};
        }
    }
    @media (max-width: 768px) {
        flex: 1 0 100%;
        margin-bottom: 1rem;
        h2 {
            margin-bottom: 0.2rem;
        }
    }
    @media (max-width: 768px) {
        margin-bottom: 3rem;
    }
`

const ItemInfo = styled.div`
    display: flex;
    align-content: center;
`

const Categories = styled.div`
    display: flex;
`

const Category = styled.div`
    display: inline-block;
    color: ${lightForeground};
    background: ${evenMoreTransparent};
    text-decoration: none;
    padding: 2px 12px;
    font-size: 0.8rem;
    margin-right: 4px;
    border-radius: 16px;
    max-width: 112px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const FreelancePage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulFreelanceWork {
          edges {
            node {
              title
              slug
              date(formatString: "MMM YYYY")
              thumbnail {
                  fixed (quality: 80){
                    src
                    srcSet
                    height
                    width
                  }
                  title
              }
              categories
            }
          }
        }
      }
    `)


    return (
        <Layout>
            <Head title="Freelance Work" />
            <Hero>
                <Container>
                    <h1>Freelance Work</h1>
                </Container>
            </Hero>
            <Container>
                <FreelanceItems>
                    {data.allContentfulFreelanceWork.edges.map((edge) => {
                        return (
                            <FreelanceItem>  
                                <Link to={`/freelance/${edge.node.slug}`}>
                                    <FreelanceImage>
                                        <FlImg fixed={edge.node.thumbnail.fixed} alt={edge.node.thumbnail.title} width="100%" height="auto" draggable="false" objectFit="cover" objectPosition="50% 50%"></FlImg>
                                    </FreelanceImage>
                                    <h2>{edge.node.title}</h2>
                                    <ItemInfo>
                                        <Categories>
                                            {edge.node.categories.map(category => (
                                                <Category key={category}>
                                                {category}
                                                </Category>
                                            ))}
                                        </Categories>
                                        {/* <p>{edge.node.date}</p> */}
                                    </ItemInfo>
                                </Link>
                            </FreelanceItem>
                        )
                    })}
                </FreelanceItems>
            </Container>
        </Layout>
    )
}


export default FreelancePage