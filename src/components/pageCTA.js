import React from 'react'
import styled from 'styled-components'
import StyledLink from './styledlink.js'
import { lightForeground, foreground } from "../theme.js"
import Icon from "../components/icon.js"
import { transparent } from "../theme.js"

const Div = styled.div`
    flex: 1 0 30%;
    h3 {
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }
    @media (max-width: 768px) {
        text-align: center;
        margin: 1rem auto 1rem auto;
        max-width: 80%;
        padding: 3rem 0;
        border-bottom: 1px solid ${transparent};
    }
    @media (max-width: 460px) {
        h3 {
            font-size: 1.5rem;
    }
`

const Text = styled.p`
    color: ${lightForeground};
    margin-bottom: 2rem;
`

const PageCTAIcon = styled(Icon)`
    fill: ${foreground};
    margin-bottom: 2rem;
`

const PageCTA = (props) => {
    return (
        <Div>
            <PageCTAIcon title={props.alt} name={props.name} width="44px" height="44px" />
            <h3>{props.heading}</h3>
            <Text>{props.text}</Text>
            <StyledLink to={props.link}>{props.linktext}</StyledLink>
        </Div>
    )
}

export default PageCTA