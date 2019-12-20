import React from 'react'
import styled from 'styled-components'
import StyledLink from './styledlink.js'

const Div = styled.div`
    width: 30%;
    h3 {
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }
`

const Text = styled.p`
    color: #737373;
    margin-bottom: 2rem;
`

const PageCTA = (props) => {
    return (
        <Div>
            <img src={props.url} alt={props.alt} width="40px" height="40px"></img>
            <h3>{props.heading}</h3>
            <Text>{props.text}</Text>
            <StyledLink to={props.link}>{props.linktext}</StyledLink>
        </Div>
    )
}

export default PageCTA