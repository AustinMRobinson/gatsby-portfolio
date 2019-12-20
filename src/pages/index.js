import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"
import CTATile from "../components/ctaTile"
import PageCTA from "../components/pageCTA"
import Container from "../components/container"
import styled from "styled-components"

const Hero = styled.section`
    background: black;
    color: white;
    padding: 8rem 0 14rem 0;
    text-align: center;
    h1 {
      font-size: 96px;
    }
`

const Role = styled.p`
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1px;
    margin: 2rem 0 3rem;
`

const Intro = styled.p`
    color: rgba(255,255,255,0.6);
    font-size: 1.33rem;
    line-height: 1.75rem;
    max-width: 80%;
    margin: 0 auto;
`

const CTATiles = styled.section`
    margin-top: -100px;
`

const TileWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const PageCTAs = styled.section`
    padding: 8rem 0 10rem 0;
`

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulHomepage {
            title
            role
            company {
                companyName
                companyLink
            }
            intro {
                intro
            }
            tile1Heading
            tile1Status
            tile1Text {
              tile1Text
            }
            tile2Heading
            tile2Status
            tile2Text {
              tile2Text
            }
            page1Heading
            page1Text {
              page1Text
            }
            page1Link
            page1Icon {
              file {
                url
              }
              title
            }
            page2Heading
            page2Text {
              page2Text
            }
            page2Link
            page2Icon {
              file {
                url
              }
              title
            }
            page3Heading
            page3Text {
              page3Text
            }
            page3Link
            page3Icon {
              file {
                url
              }
              title
            }
        }
    }
`)

// Contentful Page Data Vars (shortened)
const title = data.contentfulHomepage.title
const role = data.contentfulHomepage.role
const companyLink = data.contentfulHomepage.company.companyLink
const companyName = data.contentfulHomepage.company.companyName
const intro = data.contentfulHomepage.intro.intro
const tile1Heading = data.contentfulHomepage.tile1Heading
const tile2Heading = data.contentfulHomepage.tile2Heading
const tile1Text = data.contentfulHomepage.tile1Text.tile1Text
const tile2Text = data.contentfulHomepage.tile2Text.tile2Text
const tile1Status = data.contentfulHomepage.tile1Status
const tile2Status = data.contentfulHomepage.tile2Status

// Placeholder Data (bc I'm offline currently)
const page1Heading = data.contentfulHomepage.page1Heading
const page1Text = data.contentfulHomepage.page1Text.page1Text
const page1Link = data.contentfulHomepage.page1Link
const page1IconUrl = data.contentfulHomepage.page1Icon.file.url
const page1IconAlt = data.contentfulHomepage.page1Icon.title
const page2Heading = data.contentfulHomepage.page2Heading
const page2Text = data.contentfulHomepage.page2Text.page2Text
const page2Link = data.contentfulHomepage.page2Link
const page2IconUrl = data.contentfulHomepage.page2Icon.file.url
const page2IconAlt = data.contentfulHomepage.page2Icon.title
const page3Heading = data.contentfulHomepage.page3Heading
const page3Text = data.contentfulHomepage.page3Text.page3Text
const page3Link = data.contentfulHomepage.page3Link
const page3IconUrl = data.contentfulHomepage.page3Icon.file.url
const page3IconAlt = data.contentfulHomepage.page3Icon.title

    return (
        <Layout>
            <Head title="Home" />
            <Hero id="hero">
                <Container>
                    <h1>{title}</h1>
                    <Role>{role} at <Link to={companyLink}><img alt={companyName}></img></Link></Role>
                    <Intro>{intro}</Intro>
                </Container>
            </Hero>
            <CTATiles id="cta-tiles">
                <Container>
                    <TileWrapper>
                        <CTATile
                            heading={tile1Heading}
                            status={tile1Status}
                            text={tile1Text}
                        />
                        <CTATile
                            heading={tile2Heading}
                            status={tile2Status}
                            text={tile2Text}
                        />
                    </TileWrapper>
                </Container>
            </CTATiles>
            <PageCTAs id="page-ctas">
                <Container>
                    <TileWrapper>
                        <PageCTA
                            url={page1IconUrl}
                            alt={page1IconAlt}
                            heading={page1Heading}
                            text={page1Text}
                            link={page1Link}
                            linktext="Learn More"
                        />
                        <PageCTA
                            url={page2IconUrl}
                            alt={page2IconAlt}
                            heading={page2Heading}
                            text={page2Text}
                            link={page2Link}
                            linktext="More Pixels"
                        />
                        <PageCTA
                            url={page3IconUrl}
                            alt={page3IconAlt}
                            heading={page3Heading}
                            text={page3Text}
                            link={page3Link}
                            linktext="Lemme Read"
                        />
                    </TileWrapper>
                </Container>
            </PageCTAs>
        </Layout>
    )
}

export default IndexPage