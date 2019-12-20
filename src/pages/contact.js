import React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
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

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <Hero>
                <Container>
                    <h1>Contact Me</h1>
                </Container>
            </Hero>
            <Container>
                <p>There will be some info here, but in the meantime you can see my <a href="https://www.twitter.com/austinmrobinson">Twitter Profile</a>.</p> 
            </Container>
        </Layout>
    )
}

export default ContactPage