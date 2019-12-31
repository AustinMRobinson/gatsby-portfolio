import React from 'react'
import Footer from './footer'
import Header from './header'
import styled, {ThemeProvider, createGlobalStyle} from "styled-components"
import useTheme from '../usetheme';
import { foreground, layer0 } from "../theme"

const GlobalStyle = createGlobalStyle`
html {
    background: ${layer0}; 
}
body {
  background: ${layer0};
  color: ${foreground};
  ${'' /* border: 12px solid ${layer2}; */}
  transition: all 0.3s ease-in-out;
}
h1, h2, h3, h4, h5, h6 {
    color: ${foreground};
}
`;

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Upper = styled.div`
    flex-grow: 2;
`

const Layout = (props) => {
    const theme = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <LayoutWrapper>
                <Upper>
                    <GlobalStyle />
                    <Header></Header>
                    <div>
                        {props.children}
                    </div>
                </Upper>
                <Footer></Footer>
            </LayoutWrapper>
        </ThemeProvider>
    )
}

export default Layout