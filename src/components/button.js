// import React from 'react'
import styled from 'styled-components'
import theme from "styled-theming";
// import { Link } from 'gatsby'
// // import Icon from "../components/icon.js"
// import { withTheme } from 'styled-components'
// import { foreground, layer0, accent } from "../theme.js"

const color = theme.variants("mode", "variant", {
    default: { light: "#ffffff", dark: "#000000" },
    secondary: { light: "#000000", dark: "#ffffff" },
    tertiary: { light: "#000000", dark: "#ffffff"},
    success: { light: "#ffffff", dark: "#000000" },
    warning: { light: "#ffffff", dark: "#000000" },
    Disabled: { light: '#adadad', dark: "#737373" }
});

const backgroundColor = theme.variants("mode", "variant", {
    default: { light: "#000000", dark: "#ffffff" },
    secondary: { light: "rgba(0,0,0,0)", dark: "rgba(0,0,0,0)" },
    tertiary: { light: "rgba(0,0,0,0)", dark: "rgba(0,0,0,0)"},
    success: { light: "#1da32d", dark: "#52e063"},
    warning: { light: "#c91010", dark: "#f04242"},
    Disabled: { light: '#e0e0e0', dark: "#2e2e2e" }
});

const hover = theme.variants("mode", "variant", {
    default: { light: "#d9ae6d", dark: "#ead2ae" },
    secondary: { light: "rgba(0,0,0,0.05)", dark: "rgba(255,255,255,0.1)" },
    tertiary: { light: "rgba(0,0,0,0.05)", dark: "rgba(255,255,255,0.1)" },
    success: { light: "#188b25", dark: "#86ea91"},
    warning: { light: "#a50d0d", dark: "#f47171"},
});

const borderColor = theme.variants("mode", "variant", {
    default: { light: "rgba(0,0,0,0)", dark: "rgba(0,0,0,0)" },
    secondary: { light: "#000000", dark: "#ffffff" },
    tertiary: { light: "rgba(0,0,0,0)", dark: "rgba(0,0,0,0)"},
    success: { light: "rgba(0,0,0,0)", dark: "rgba(0,0,0,0)"},
    warning: { light: "rgba(0,0,0,0)", dark: "rgba(0,0,0,0)"},
    Disabled: { light: "rgba(0,0,0,0)", dark: "rgba(0,0,0,0)"},
});

// const display = theme.variants("mode", "expanded", {
//     default: { light: "inline-flex", dark: "inline-flex" },
//     true: { light: "flex", dark: "flex" },
// });

  
  const Button = styled.button.attrs(props => ({
    mt: props.mt || "0em",
    mb: props.mb || "0em",
    ml: props.ml || "0em",
    mr: props.mr || "0em",
}))`
    display: ${props => (props.expanded === "true" ? "block" : "inline-block")};
    width: ${props => (props.expanded === "true" ? "100%" : "auto")};
    padding: ${props => (props.size === "large" ? "20px 40px" : "12px 24px")};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    border: 3px solid ${borderColor};
    cursor: ${props => (props.variant === "Disabled" ? "not-allowed" : "pointer")};
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-family: "Archivo";
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all 0.3s;
    color: ${color};
    background: ${backgroundColor};
    &:hover {
        background: ${hover};
    }
  `;
  
//   Button.propTypes = {
//     variant: PropTypes.oneOf(["default", "primary", ...]),
//   };
  
  Button.defaultProps = {
    variant: "default",
    size: "",
    expanded: "",
  };

// const Button = styled(Link).attrs(props => ({
//     mt: props.mt || "0em",
//     mb: props.mb || "0em",
//     ml: props.ml || "0em",
//     mr: props.mr || "0em",
// }))`

     /* ${props => {
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
  }} */


// const Button = (props) => {
//     return (
//         <StyledButton variant={props.variant} size={props.size} expanded={props.expanded}>
//             {props.children}
//             <Icon name={props.icon} width="24px"></Icon>
//         </StyledButton>
//     )
// }

export default Button