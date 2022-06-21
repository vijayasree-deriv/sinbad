import React from 'react'
import { Helmet } from 'react-helmet'
import Loadable from '@loadable/component'
const WorkWithUs = Loadable(() => import('./work-with-us'))
const WhyWithUs = Loadable(() => import('./why-with-us'))
const PerksBenefits = Loadable(() => import('./perks-benefits'))
const OpenPositions = Loadable(() => import('./open-positions'))
const HiringProcess = Loadable(() => import('./hiring-process'))
import Layout from 'components/layout/layout'
import { JoinUs } from 'pages/home'

const Careers = () => {
    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Careers</title>
            </Helmet>
            <WorkWithUs />
            <WhyWithUs />
            <PerksBenefits />
            <OpenPositions />
            <HiringProcess />
            <JoinUs appearance="careers" />
        </Layout>
    )
}

export default Careers
