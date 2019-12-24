import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"
import CTATile from "../components/ctaTile"
import PageCTA from "../components/pageCTA"
import Container from "../components/container"
import styled from "styled-components"
import Hero from "../components/hero"
import { lightForeground, foreground } from "../theme.js"
import Icon from "../components/icon.js"

const IndexHero = styled(Hero)`
    padding: 8rem 0 4rem 0;
    text-align: center;
    h1 {
      font-size: 6rem;
      font-weight: 400;
      max-width: 90%;
      margin: 0 auto;
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 4rem;
            max-width: none;
        }
    }
`

const Role = styled.p`
    color: ${lightForeground};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1px;
    margin: 2rem 0 3rem;
    display: inline-flex;

`

const CompanyIcon = styled(Icon)`
    margin-left: .5rem;
    fill: ${lightForeground};
    transition: all 0.3s ease-in-out;
    width: 24px;
    height: 24px;
    &:hover {
        fill: ${foreground};
    }
`

const Intro = styled.p`
    color: ${lightForeground};
    font-size: 1.33rem;
    line-height: 1.75rem;
    max-width: 80%;
    margin: 0 auto;
    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.25rem;
    }
`

const CTATiles = styled.section`
    padding: 1rem;
`

const TileWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`

const PageCTAs = styled.section`
    padding: 8rem 0 10rem 0;
    @media (max-width: 768px) {
    flex-direction: column;
    padding: 6rem 0;
  }
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
            page2Heading
            page2Text {
              page2Text
            }
            page2Link
            page3Heading
            page3Text {
              page3Text
            }
            page3Link
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
const page2Heading = data.contentfulHomepage.page2Heading
const page2Text = data.contentfulHomepage.page2Text.page2Text
const page2Link = data.contentfulHomepage.page2Link
const page3Heading = data.contentfulHomepage.page3Heading
const page3Text = data.contentfulHomepage.page3Text.page3Text
const page3Link = data.contentfulHomepage.page3Link

    return (
        <Layout>
            <Head title="Home" />
            <IndexHero id="hero">
                <Container>
                    <h1>{title}</h1>
                    <Role>{role} at <a href={companyLink}><CompanyIcon name={companyName} title={companyName}></CompanyIcon></a></Role>
                    <Intro>{intro}</Intro>
                </Container>
            </IndexHero>
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
                            name={page1Heading}
                            alt={page1Heading}
                            heading={page1Heading}
                            text={page1Text}
                            link={page1Link}
                            linktext="Learn More"
                        />
                        <PageCTA
                            name={page2Heading}
                            alt={page2Heading}
                            heading={page2Heading}
                            text={page2Text}
                            link={page2Link}
                            linktext="More Pixels"
                        />
                        <PageCTA
                            name={page3Heading}
                            alt={page3Heading}
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