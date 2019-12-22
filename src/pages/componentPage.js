import React from 'react'
import styled from 'styled-components'
import Button from "../components/button.js"
import Container from "../components/container.js"
import Layout from "../components/layout.js"
import Icon from "../components/icon.js"
import Hero from "../components/hero"

const ComponentGroup = styled.div`
    padding: 3rem 0;
    h2 {
        margin-bottom: 2rem;
    }
    h3 {
        margin-top: 4rem;
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
                        <Button variant="secondary" mr="2em">Secondary Button</Button>
                        <Button variant="tertiary">Tertiary Button</Button>
                        <br></br>
                        <Button size="large" mt="2em" mr="2em">Large Primary Button</Button>
                        <Button variant="secondary" size="large" mt="2em" mr="2em">Large Secondary Button</Button>
                        <Button variant="tertiary" size="large" mt="2em">Tertiary Button</Button>
                        <h3>Status Buttons</h3>
                        <Button variant="success" mr="2em">Success!</Button>
                        <Button variant="danger">Warning!</Button>
                    </ComponentGroup>
                    <ComponentGroup>
                        <h2>Icons</h2>
                        <Icon name="phone" width="24px"></Icon>
                        <Icon name="phone" width="24px"></Icon>
                    </ComponentGroup>
                </Container>
            </section>
        </Layout>
    )   
}

export default ComponentPage