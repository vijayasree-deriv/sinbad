import React from 'react'
import { Helmet } from 'react-helmet'

type SeoType = {
    description: string
    title: string
}

const SEO = ({ description, title }: SeoType) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default SEO
