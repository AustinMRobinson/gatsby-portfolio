import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from "../components/head"
import Container from "../components/container"
import Hero from "../components/hero"

const AboutPage = () => {

    function getAge(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
    
        return age;
    }

    return (
        <Layout>
            <Head title="About" />
            <Hero>
                <Container>
                   <h1>About Me</h1>
                </Container>
            </Hero>
            <Container>
                <p>
                    There will be some info here
                    <br></br>
                    Like what you see? <Link to="/contact">Contact me!</Link>
                    <p>I am {getAge("12/27/1995")} years old!</p>
                </p>
            </Container>
        </Layout>
    )
}

export default AboutPage