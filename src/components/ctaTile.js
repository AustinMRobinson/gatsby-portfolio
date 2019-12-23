import React from 'react'
import Button from '../components/button'
import styled from 'styled-components'
import { layer1, lightForeground } from '../theme.js'


const Tile = styled.div`
    display: inline-block;
    width: 48%;
`

const TileInfo = styled.div`
    padding: 3rem 3rem 1.5rem 3rem;
    text-align: center;
    background: ${layer1};
    h2 {
        margin: 0;
        font-size: 40px;
    }
    p {
        color: ${lightForeground};
    }
`

const Status = styled.p`
    color: ${lightForeground};
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