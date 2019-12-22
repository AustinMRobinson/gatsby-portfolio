import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from "../components/head"
import Container from "../components/container"
import Hero from "../components/hero"

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