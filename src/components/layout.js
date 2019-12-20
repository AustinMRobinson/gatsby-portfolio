import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import "../styles/index.scss"
// import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            <div>            
                <Header></Header>
                    {props.children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout