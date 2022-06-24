import React from 'react'
import { Helmet } from 'react-helmet'
import { JoinUs, OurTerms, TechStack, Welcome, Carousel, Layout } from './home'

const Home = () => {
    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Home</title>
            </Helmet>
            <Carousel />
            <Welcome />
            <OurTerms />
            <TechStack />
            <JoinUs appearance="home" />
        </Layout>
    )
}

export default Home
