import * as React from 'react'
import { Helmet } from 'react-helmet'
import type { PageProps } from 'gatsby'
import { BenefitsList, Description, JobTitle } from './loading'
import { positions } from './data'
import { JoinUs, Layout } from 'pages/home'

const JobDescription = (props: PageProps) => {
    const position = positions?.find(({ id }) => id === props.params.id)

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
