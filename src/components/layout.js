import React from 'react'
import styled from 'styled-components'
import Footer from '../components/footer'
import Header from '../components/header'
import "../styles/index.scss"

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Layout = (props) => {
    return (
        <LayoutWrapper>
            <div>            
                <Header></Header>
                <div>
                    {props.children}
                </div>
            </div>
            <Footer></Footer>
        </LayoutWrapper>
    )
}

export default Layout