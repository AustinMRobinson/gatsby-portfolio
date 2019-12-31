import React from "react"
import Layout from '../components/layout.js'
import Head from "../components/head"
import Container from "../components/container"
import Hero from "../components/hero"

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