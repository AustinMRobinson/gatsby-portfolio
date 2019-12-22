// import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// import Icon from "../components/icon.js"
import { withTheme } from 'styled-components'
import { foreground, layer0, accent } from "../theme.js"

const Button = styled(Link).attrs(props => ({
    mt: props.mt || "0em",
    mb: props.mb || "0em",
    ml: props.ml || "0em",
    mr: props.mr || "0em",
}))`
    display: ${props => (props.expanded === "true" ? "flex" : "inline-flex")};
    padding: ${props => (props.size === "large" ? "20px 40px" : "12px 24px")};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    border: 3px solid rgba(0,0,0,0);
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all 0.3s;
    align-items: center;
    color: ${layer0};
    background: ${foreground};
    &:hover {
        background: ${accent};
    }
    ${'' /* ${props => {
    if (props.variant === "secondary") {
      return `
        background: rgba(0,0,0,0);
        color: ${props => props.foreground};
        border-color: ${foreground};
        &:hover {
            background: ${transparent};
        }
    `
    } else if (props.variant === "tertiary") {
      return `
        background: rgba(0,0,0,0);
        color: ${props => props.theme.foreground};
        &:hover {
            background: ${props => props.theme.opaque};
        }
    `
    } else if (props.variant === "success") {
      return `
        background: #00cf0a;
        color: ${props => props.theme.background};
        &:hover {
            background: #00b509;
        }
    `
    } else if (props.variant === "danger") {
      return `
        background: #e80000;
        color: ${props => props.theme.background};
        &:hover {
            background: #cf0000;
        }
    `
    } else {
      return `
        background: ${foreground};
        color: ${layer0};
        &:hover {
            background: ${accent};
        }
    `
    }
  }} */}
`

// const Button = (props) => {
//     return (
//         <StyledButton variant={props.variant} size={props.size} expanded={props.expanded}>
//             {props.children}
//             <Icon name={props.icon} width="24px"></Icon>
//         </StyledButton>
//     )
// }

export default withTheme(Button)