import React from 'react'
import Button from '../components/button'
import styled from 'styled-components'

const Tile = styled.div`
    display: inline-block;
    width: 48%;
`

const TileInfo = styled.div`
    padding: 2rem 3rem 1rem 3rem;
    background: white;
    text-align: center;
    h2 {
        margin: 0;
        font-size: 40px;
    }
    p {
        color: #737373;
    }
`

const Status = styled.p`
    color: #adadad;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
`

const CTATile = ({
    heading,
    status,
    text,
}) => (
    <Tile>
        <TileInfo>
            <h2>{heading}</h2>
            <Status>{status}</Status>
            <p>{text}</p>
        </TileInfo>
        <Button size="large" expanded="true" mt="1em">Ch-ch-check it out</Button>
    </Tile>
    
)

export default CTATile