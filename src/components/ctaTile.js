import React from 'react'
import Button from '../components/button'
import styled from 'styled-components'
import { layer1, lightForeground } from '../theme.js'


const Tile = styled.div`
    display: inline-block;
    flex: 0 0 48%;
    @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`

const TileInfo = styled.div`
    padding: 3rem 3.5rem 1.5rem 3.5rem;
    text-align: center;
    background: ${layer1};
    h2 {
        margin: 0;
        font-size: 2.5rem;
    }
    p {
        color: ${lightForeground};
    }
    @media (max-width: 768px) {
        padding: 2.5rem 2rem 1.5rem 2rem;
    }
    @media (max-width: 460px) {
        h2 {
            font-size: 2rem;
    }
}
`

const Status = styled.p`
    color: ${lightForeground};
    font-family: "Archivo";
    font-weight: 700;
    text-transform: uppercase;
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
        <Button size="large" expanded="true" mt="1em">Check it out</Button>
    </Tile>
    
)

export default CTATile