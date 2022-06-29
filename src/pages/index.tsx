import React from 'react'
import Carousel from './home/carousel'
import Welcome from './home/welcome'
import { JoinUs, OurTerms, TechStack } from './home'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'

const Home = () => {
    return (
        <Layout>
            <SEO
                title="Software development services | IT solutions - Sinbad Software"
                description="Sinbad Software is a world-class fintech software development provider specialising in cutting-edge IT solutions."
            />
            <Carousel />
            <Welcome />
            <OurTerms />
            <TechStack />
            <JoinUs appearance="home" />
        </Layout>
    )
}

export default Home
