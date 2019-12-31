import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout.js'
import Container from "../components/container"
import Hero from "../components/hero"
import Head from "../components/head"

const Photography = styled.div`
`

const PhotoItems = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 0.5rem;
    div {
        display: flex;
        overflow: hidden;
        align-content: center;
        justify-content: center;
        max-height: 232px;
    }
    @media (max-width: 768px) {
        grid-template-columns: auto auto;
        grid-gap: 0.75rem;
        div {
            max-height: 260px;
        }
    }
    @media (max-width: 460px) {
        grid-template-columns: auto;
        grid-gap: 1rem;
        div {
            max-height: 220px;
        }
    }
`

const PhotographyPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPhotography {
                edges {
                    node {
                        image {
                            fixed {
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
        }
    `)

    return (
        <Layout>
            <Head title="Photography"></Head>
            <Hero>
                <Container>
                    <h1>Photography</h1>
                </Container>
            </Hero>
            <Photography>
                <Container>
                    <PhotoItems>
                        {data.allContentfulPhotography.edges.map((edge) => {
                            return (
                                <div>
                                    <Img fixed={edge.node.image.fixed} alt={edge.node.image.title} draggable="false" objectFit="cover" objectPosition="50% 50%" ></Img>
                                </div>
                            )
                        })}
                    </PhotoItems>
                </Container>
            </Photography>
        </Layout>
    )
}

export default PhotographyPage