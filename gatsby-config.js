require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

const site_url = 'https://sinbad.dev'

module.exports = {
    pathPrefix: process.env.PATH_PREFIX || 'sinbad/br',
    flags: {
        FAST_DEV: true,
    },
    siteMetadata: {
        title: 'Sinbad',
        description: '',
        author: 'sinbad.dev',
        siteUrl: site_url,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
                siteUrl: `${site_url}`,
                noQueryString: true,
            },
        },
        'gatsby-plugin-styled-components',
        `gatsby-transformer-json`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                failOnError: true,
                base64Width: 20,
                stripMetadata: true,
                defaultQuality: 50,
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                excludes: [],
                query: `
                {
                    allSitePage {
                      nodes {
                        path
                      }
                    }
                }
                `,
                resolveSiteUrl: () => site_url,
                resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                    return allPages.map((page) => {
                        return { ...page }
                    })
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Sinbad',
                short_name: 'Sinbad',
                description: 'Sinbad Software',
                start_url: '/',
                background_color: '#000000',
                theme_color: '#000000',
                display: 'standalone',
                icon: './favicons/favicon-512x512.png',
                icons: [
                    {
                        src: `favicons/favicon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                    {
                        src: `favicons/favicon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
                crossOrigin: `use-credentials`,
            },
        },
        {
            resolve: 'gatsby-plugin-svgr',
            options: {
                rule: {
                    include: /svg/, // See below to configure properly
                },
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                stages: ['develop'],
                extensions: ['js', 'ts', 'jsx', 'tsx'],
                exclude: ['node_modules', '.cache', 'public'],
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [
                    {
                        userAgent: '*',
                        allow: '/',
                        disallow: [],
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                offset: -100,
            },
        },
        'gatsby-plugin-use-query-params',
    ],
}
