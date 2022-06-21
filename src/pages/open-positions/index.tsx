import React from 'react'
import { Helmet } from 'react-helmet'
import { Hero, OpenPositions } from './loading'
import { JoinUs, Layout } from 'pages/home'

const Positions = () => {
    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Open Positions</title>
            </Helmet>
            <Hero />
            <OpenPositions />
            <JoinUs appearance="openPositions" />
        </Layout>
    )
}

export default Positions
