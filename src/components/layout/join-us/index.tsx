import React from 'react'
import JoinUsHome from 'components/layout/join-us/home'
import JoinUsCareers from 'components/layout/join-us/career'
import { JobTitleProps } from 'pages/job-description/data'
import JoinUsOpenPositions from 'components/layout/join-us/open-position'
import JoinUsJob from 'components/layout/join-us/job'
import PageNotFound from 'pages/404'

type JoinUsProps = JobTitleProps & {
    appearance: string
    position?: JobTitleProps
}

const Appearance = {
    home: 'home',
    careers: 'careers',
    openPositions: 'openPositions',
    job: 'job',
}

const JoinUs = ({ appearance, position }: JoinUsProps) => {
    switch (appearance) {
        case Appearance.home:
            return <JoinUsHome />
        case Appearance.careers:
            return <JoinUsCareers />
        case Appearance.openPositions:
            return <JoinUsOpenPositions />
        case Appearance.job:
            return <JoinUsJob position={position} />
        default:
            return <PageNotFound />
    }
}

export default JoinUs
