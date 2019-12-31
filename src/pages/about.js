import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from '../components/layout.js'
import Head from "../components/head"
import Container from "../components/container"
import Hero from "../components/hero"
import Img from "gatsby-image"
import Icon from "../components/icon.js"
import Button from "../components/button.js"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { lightForeground, kindaLightForeground, foreground, layer0, layer1, transparentLayer0, evenMoreTransparent, layer2 } from "../theme.js"


const Intro = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        margin-top: -3rem;
    }
`

const BlurbTitle = styled.p`
    font-weight: 700;
    color: ${kindaLightForeground};
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin: 2rem 0 .75rem 0;
`

const Blurb = styled.div`
    color: ${lightForeground};
`

const LeftCol = styled.div`
    flex: 0 0 47%;
    position: relative;
    align-self: top;
    max-height: 680px;
    overflow: hidden;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
    @media (max-width: 768px) {
        flex: 1 0 100%;
        max-height: 360px;
    }
    @media (max-width: 460px) {
        max-height: 240px;
    }
`

const RightCol = styled.div`
    padding: 2.5rem 1.5rem;
    flex: 0 0 46%;
    @media (max-width: 768px) {
        flex: 1 0 100%;
        padding: 0 3rem;
        margin-top: -2rem;
        z-index: 2;
        h1 {
            font-size: 3.5rem;
        }
    }
    @media (max-width: 768px) {
        padding: 0;
        h1 {
            font-size: 3rem;
        }
    }
`

const ImageWrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
        margin-top: -144px;
    }

`

const Location = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    z-index: 2;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 1rem 1.5rem;
    color: ${foreground};
    background: ${transparentLayer0};
    backdrop-filter: saturate(180%) blur(5px);
    p {
        margin-bottom: 0;
        text-shadow: 0 4px 8px ${layer0};
    }
    @media (max-width: 768px) {
        height: 8rem;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(rgba(0,0,0,0) 0%, ${layer0} 100%);
        backdrop-filter: none;
        p {
            display: none;
        }
    }
    @media (max-width: 460px) {  
        height: 6rem;
    }

`

const Label = styled.p`
    margin-top: 1px;
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Archivo';
    font-weight: 700;
    margin-right: .5rem;
`

const Place = styled.p`
    font-size: 1rem;
    font-weight: 500;
`

const Companies = styled.div`
    margin: 5rem 0 7rem 0;
    h3 {
        font-family: 'Archivo';
        font-weight: 700;
        color: ${lightForeground};
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        text-align: center;
    }
    @media (max-width: 460px) {
        margin: 0;
    }
`

const CompanyWrapper = styled.div`
    display: flex;
    margin: 4rem 2rem 0 2rem;
    justify-content: space-between;
    @media (max-width: 460px) {
        flex-wrap: wrap;
        justify-content: center;
        margin: 2rem 0;
    }
`

const CompanyItem = styled.a`
`

const CompanyIcon = styled(Icon)`
    fill: ${lightForeground};
    width: 64px;
    height: 64px;
    transition: 0.3s all ease-in-out;
    &:hover{
        fill: ${foreground};
    }
    @media (max-width: 460px) {
        margin: 1rem 1.5rem;
        width: 48px;
        height: 48px;
    }
`

const ContactSocialWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.5rem 0;
    h3 {
        font-family: "Archivo";
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
    @media (max-width: 768px) {
        flex-wrap: wrap;
        padding: 0.5rem 0;
        h3 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }
    }
`

const Contact = styled.div`
    flex: 0 0 46%;
    @media (max-width: 768px) {
        flex: 1 0 100%;
        margin: 2rem 0;
    }
`

const Input = styled.input`
    padding: 20px 24px;
    height: auto;
    color: ${lightForeground};
    background: ${layer1};
    border: none;
    display: block;
    width: 100%;
    margin-bottom: 1rem;
`

const TextArea = styled.textarea`
    padding: 20px 24px;
    height: auto;
    color: ${lightForeground};
    background: ${layer1};
    border: none;
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    max-width: 500px;
    min-height: 88px;
    @media (max-width: 768px) {
        max-width: none;
    }
`

const Socials = styled.div`
    flex: 0 0 46%;
    @media (max-width: 768px) {
        margin: 2rem 0;
        flex: 1 0 100%;
    }
`

const Subheading = styled.p`
    font-family: 'Archivo';
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${lightForeground};
    font-size: 0.8rem;
    margin-bottom: .5rem;
`

const SocialAccount = styled.a`
    text-decoration: none;
    padding: 1rem;
    color: ${kindaLightForeground};
    display: flex;
    border: 1px solid ${evenMoreTransparent};
    margin-bottom: 1rem;
    font-family: 'Archivo';
    transition: 0.3s all ease-in-out;
    &:hover {
        background: ${layer2};
    }
`

const AccountTitle = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0 .5rem 0 0;
`

const AccountHandle = styled.p`
    color: ${lightForeground};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.7rem;
    font-weight: 700;
    margin: 0;
`

const AboutPage = () => {

    const data = useStaticQuery(graphql`
        query {
            contentfulAboutPage {
                title
                intro
                photo {
                    fixed(height: 700, quality: 100) {
                        src
                        srcSet
                        height
                        width
                    }
                    title
                }
                blurbTitle
                blurb {
                    json
                }
                location
                companies {
                    companyName
                    companyLink
                }
                socialMediaAccounts {
                    socialMediaName
                    username
                    link
                }
            }
        }
    `)

    // Contentful Page Data Vars (shortened)
    const title = data.contentfulAboutPage.title
    const intro = data.contentfulAboutPage.intro
    const fixed = data.contentfulAboutPage.photo.fixed
    const photoTitle = data.contentfulAboutPage.photo.title
    const blurbTitle = data.contentfulAboutPage.blurbTitle
    const blurb = data.contentfulAboutPage.blurb.json
    const location = data.contentfulAboutPage.location
    const companies = data.contentfulAboutPage.companies
    const socialMediaAccounts = data.contentfulAboutPage.socialMediaAccounts


    return (
        <Layout>
            <Head title={title} />
            <Hero>
                <Container>
                    <Intro>
                        <LeftCol>
                            <ImageWrapper>
                                <Img fixed={fixed} alt={photoTitle} objectFit="cover" objectPosition="50% 50%"></Img>
                            </ImageWrapper>
                            <Location>
                                <Label>Location</Label>
                                <Place>{location}</Place>
                            </Location>
                        </LeftCol>
                        <RightCol>
                            <h1>{intro}</h1>
                            <BlurbTitle>{blurbTitle}</BlurbTitle>
                            <Blurb>{documentToReactComponents(blurb)}</Blurb>
                        </RightCol>
                    </Intro>
                </Container>
            </Hero>
            <Companies>
                <Container>
                    <h3>Companies I've Worked With</h3>
                    <CompanyWrapper>
                    {companies.map(company => (
                        <CompanyItem href={company.companyLink}>
                            <CompanyIcon name={company.companyName}></CompanyIcon>
                        </CompanyItem>
                    ))}
                    </CompanyWrapper>
                </Container>
            </Companies>
            <section>
                <Container>
                <ContactSocialWrapper>
                    <Contact>
                        <Subheading>If you want to talk to me!</Subheading>
                        <h3>Contact Me</h3>
                        <form>
                            <Input placeholder="Full Name"></Input>
                            <Input placeholder="Email Address"></Input>
                            <TextArea placeholder="Your Message"></TextArea>
                            <Button size="large" mt="1rem">Send Message</Button>
                        </form>
                    </Contact>
                    <Socials>
                        <Subheading>Or.. if you want to follow me!</Subheading>
                        <h3>My Socials</h3>
                        <div>
                            {socialMediaAccounts.map(socialMediaAccount => (
                                <SocialAccount href={socialMediaAccount.link}>
                                    <AccountTitle>{socialMediaAccount.socialMediaName}</AccountTitle>
                                    <AccountHandle>{socialMediaAccount.username}</AccountHandle>
                                </SocialAccount>
                            ))}
                        </div>
                    </Socials>
                </ContactSocialWrapper>
                </Container>
            </section>
        </Layout>
    )
}

export default AboutPage