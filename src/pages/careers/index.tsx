import React from 'react'
import WorkWithUs from './work-with-us'
import WhyWithUs from './why-with-us'
import PerksBenefits from './perks-benefits'
import OpenPositions from './open-positions'
import HiringProcess from './hiring-process'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { JoinUs } from 'pages/home'

const Careers = () => {
    return (
        <Layout>
            <SEO
                title="Careers | IT and software developer jobs at Sinbad Software"
                description="Explore software and app development, IT jobs, and more at Sinbad Software and get a chance to learn from our talented teams and tech stack.
"
            />
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
