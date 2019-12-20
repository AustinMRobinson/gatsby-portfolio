import {Link } from 'gatsby'
import styled from "styled-components"

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all 0.3s;
    &:hover {
        color: #d9ae6d;
    }
`

export default StyledLink