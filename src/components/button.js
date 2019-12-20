//  import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled(Link).attrs(props => ({
    mt: props.mt || "0em",
    mb: props.mb || "0em",
    ml: props.ml || "0em",
    mr: props.mr || "0em",
}))`
    display: ${props => (props.expanded === "true" ? "block" : "inline-block")};
    padding: ${props => (props.size === "large" ? "20px 40px" : "12px 24px")};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    color: ${props => (props.variant === "secondary" ? "#000000" : "#ffffff")};
    background: ${props => (props.variant === "secondary" ? "rgba(0,0,0,0)" : "#000000")};
    border: 3px solid black;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all 0.3s;
    &:hover {
        background: ${props => (props.variant === "secondary" ? "rgba(0,0,0,0.05)" : "#d9ae6d")};
        border-color: ${props => (props.variant === "secondary" ? "#000000" : "#d9ae6d")}
    }
`

export default Button