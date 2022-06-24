import * as React from 'react'
import { Helmet } from 'react-helmet'
import type { PageProps } from 'gatsby'
import { JoinUs, Layout } from 'pages/home'
import Positions from 'data/positions.json'
import { BenefitsList, Description, JobTitle } from 'pages/job-description/loading'

const JobDescription = (props: PageProps) => {
    const position = Positions?.find(({ id }) => id === props.pageContext.slug)

    return (
        <Layout>
            <Helmet>
                <title>Sinbad | {position?.position}</title>
            </Helmet>
            <JobTitle position={position} />
            <Description position={position} />
            <BenefitsList />
            <JoinUs appearance="job" />
        </Layout>
    )
}

export default JobDescription
