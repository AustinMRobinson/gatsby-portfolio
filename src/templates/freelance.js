import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout.js'
import Container from "../components/container"
import Head from "../components/head.js"
import Hero from "../components/hero.js"
import Icon from "../components/icon.js"
import { lightForeground, foreground, evenMoreTransparent } from "../theme.js"

const FreelanceHero = styled(Hero)`
    padding: 4rem 0 3rem 0;
    h1 {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
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

const BackLink = styled(Link)`
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

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const Date = styled.p`
    font-family: 'Archivo';
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${lightForeground};
    font-size: 1.2rem;
    margin-right: 1rem;
    margin-bottom: 0;
`


const Categories = styled.div`
  display: flex;
`

const Category = styled.div`
  color: ${lightForeground};
  background: ${evenMoreTransparent};
  text-decoration: none;
  padding: 2px 12px;
  font-size: 0.8rem;
  margin-right: 4px;
  border-radius: 16px;
`

export const data = graphql`
  query($slug: String!) {
    contentfulFreelanceWork(slug: {eq: $slug}) {
        title
        date(formatString: "MMM YYYY")
        categories
        projectInfo{
            projectInfo
        }
    }
}`

const Freelance = ({ data }) => {
    return (
        <Layout>
            <Head title={data.contentfulFreelanceWork.title} />
            <FreelanceHero>
                <Container>
                    <BackLink to="/freelance"><ArrowIcon name="arrow left" title="Arrow Left"></ArrowIcon>Back to Freelance</BackLink>
                    <h1>{data.contentfulFreelanceWork.title}</h1>
                    <PostInfo>
                        <Date>{data.contentfulFreelanceWork.date}</Date>
                        <Categories>
                        {data.contentfulFreelanceWork.categories.map(category => (
                            <Category key={category}>
                            {category}
                            </Category>
                        ))}
                        </Categories>
                    </PostInfo>
                    <p>{data.contentfulFreelanceWork.projectInfo.projectInfo}</p>
                </Container>
            </FreelanceHero>
            <section>
                <Container>
                    
                </Container>
            </section>
        </Layout>

    )
}

export default Freelance