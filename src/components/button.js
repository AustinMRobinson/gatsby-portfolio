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
    border: 3px solid rgba(0,0,0,0);
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all 0.3s;
    ${props => {
    if (props.variant === "secondary") {
      return `
        background: rgba(0,0,0,0);
        color: #000000;
        border-color: black;
        &:hover {
            background: rgba(0,0,0,0.05);
        }
    `
    } else if (props.variant === "tertiary") {
      return `
        background: rgba(0,0,0,0);
        color: #000000;
        &:hover {
            background: rgba(0,0,0,0.05);
            color: black;
        }
    `
    } else if (props.variant === "success") {
      return `
        background: #00cf0a;
        color: #ffffff;
        &:hover {
            background: #00b509;
        }
    `
    } else if (props.variant === "danger") {
      return `
        background: #e80000;
        color: #ffffff;
        &:hover {
            background: #cf0000;
        }
    `
    } else {
      return `
        background: #d9ae6d;
        color: #ffffff;
        &:hover {
            background: black;
            color: white;
        }
    `
    }
  }}
`

export default Button