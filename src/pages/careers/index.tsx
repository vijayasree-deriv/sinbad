import React from 'react'
import { Helmet } from 'react-helmet'
import { HiringProcess, OpenPositions, PerksBenefits, WhyWithUs, WorkWithUs } from './loading'
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
