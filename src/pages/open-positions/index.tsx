import React from 'react'
import Hero from './hero'
import OpenPositions from './open-positions'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { JoinUs } from 'pages/home'

const Positions = () => {
    return (
        <Layout>
            <SEO
                title="Open positions for IT and tech jobs at Sinbad Software"
                description="View our current job openings in IT, tech, and more. Be part of the team creating exceptional products with innovative technology."
            />
            <Hero />
            <OpenPositions />
            <JoinUs appearance="openPositions" />
        </Layout>
    )
}

export default Positions
