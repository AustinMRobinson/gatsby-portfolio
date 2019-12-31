import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'
import Head from "../components/head"
import Container from "../components/container"
import Hero from "../components/hero"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404 Not Found" />
                <Hero>
                    <Container>
                        <h1>Page not found</h1>
                        <p><Link to="/">Head home</Link></p>
                    </Container>
                </Hero>

        </Layout>
    )
}

export default NotFound