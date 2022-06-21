import React from 'react'
import { Helmet } from 'react-helmet'
import Loadable from '@loadable/component'
export const Hero = Loadable(() => import('./hero'))
export const OpenPositions = Loadable(() => import('./open-positions'))
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
