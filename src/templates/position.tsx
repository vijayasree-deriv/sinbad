import * as React from 'react'
import type { PageProps } from 'gatsby'
import Description from '../pages/job-description/description'
import JobTitle from '../pages/job-description/job-title'
import BenefitsList from '../pages/job-description/benefits'
import Positions from 'data/positions.json'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { JoinUs } from 'pages/home'

const JobDescription = (props: PageProps) => {
    const position = Positions?.find(({ id }) => id === props.pageContext.slug)

    return (
        <Layout>
            <SEO title={position?.seo_title} description={position?.seo_description} />
            <JobTitle position={position} />
            <Description position={position} />
            <BenefitsList />
            <JoinUs appearance="job" position={position} />
        </Layout>
    )
}

export default JobDescription
