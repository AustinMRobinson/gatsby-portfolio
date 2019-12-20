import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from '../components/layout'
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

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <Hero>
                <Container>
                   <h1>About Me</h1>
                </Container>
            </Hero>
            <Container>
                <p>
                    There will be some info here
                    <br></br>
                    Like what you see? <Link to="/contact">Contact me!</Link>
                </p>
            </Container>
        </Layout>
    )
}

export default AboutPage