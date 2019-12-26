import {Link } from 'gatsby'
import styled from "styled-components"
import { foreground, accent } from "../theme.js"

const StyledLink = styled(Link)`
    color: ${foreground};
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Archivo";
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all 0.3s;
    &:hover {
        color: ${accent};
    }
`

export default StyledLink