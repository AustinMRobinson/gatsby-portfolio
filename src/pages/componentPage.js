import React from 'react'
import styled from 'styled-components'
import Button from "../components/button.js"
import Container from "../components/container.js"
import Layout from "../components/layout.js"
import Icon from "../components/icon.js"
import Hero from "../components/hero"
import { lightForeground, foreground } from "../theme.js"

const ComponentGroup = styled.div`
    padding: 3rem 0;
    h2 {
        margin-bottom: 2rem;
    }
    h3 {
        margin-top: 4rem;
    }
`

const StyledIcon = styled(Icon)`
    fill: ${lightForeground};
    transition: 0.3s all ease-in-out;
    margin-right: 1rem;
    width: 32px;
    height: 32px;
    &:hover {
        fill: ${foreground};
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
                        <Button variant="warning">Warning!</Button>
                    </ComponentGroup>
                    <ComponentGroup>
                        <h2>Icons</h2>
                        <StyledIcon name="sun"></StyledIcon>
                        <StyledIcon name="moon"></StyledIcon>
                        <StyledIcon name="Blog"></StyledIcon>
                        <StyledIcon name="Photography"></StyledIcon>
                        <StyledIcon name="About Me"></StyledIcon>
                        <StyledIcon name="HP"></StyledIcon>
                    </ComponentGroup>
                </Container>
            </section>
        </Layout>
    )   
}

export default ComponentPage