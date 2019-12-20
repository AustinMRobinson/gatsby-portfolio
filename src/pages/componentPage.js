import React from 'react'
import Button from "../components/button.js"
import Container from "../components/container.js"
import Layout from "../components/layout.js"
import styled from 'styled-components'

const Hero = styled.section`
    padding: 5rem 0 2rem 0;
    color: white;
    background: black;
    h1 {
        font-size: 56px;
    }
`

const ComponentGroup = styled.div`
    padding: 3rem 0;
    h2 {
        margin-bottom: 3rem;
    }
`

const ComponentPage = () => {
    return (
        <Layout>
                <Hero>
                    <Container>
                        <h1>Component Sheet</h1>
                    </Container>
                </Hero>
                <section>
                    <Container>
                        <ComponentGroup>
                            <h2>Buttons</h2>
                            <Button mr="2em">Primary Button</Button>
                            <Button variant="secondary">Secondary Button</Button>
                            <br></br>
                            <Button size="large" mt="2em" mr="2em">Large Primary Button</Button>
                            <Button variant="secondary" size="large" mt="2em">Large Secondary Button</Button>
                        </ComponentGroup>
                    </Container>
                </section>
        </Layout>
    )   
}

export default ComponentPage