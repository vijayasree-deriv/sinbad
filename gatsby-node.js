/* eslint-disable import/order */
const path = require('path')
// const positions = require('src/pages/job-description/data')

exports.onCreatePage = () => {}

const StylelintPlugin = require('stylelint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const style_lint_options = {
    files: 'src/**/*.js',
    emitErrors: false,
    lintDirtyModulesOnly: true,
}

exports.onCreateWebpackConfig = ({ actions, getConfig }, { ...options }) => {
    const config = getConfig()
    if (config.optimization) {
        config.optimization.minimizer = [new TerserPlugin()]
    }
    actions.setWebpackConfig({
        plugins: [new StylelintPlugin({ ...style_lint_options, ...options })],
        resolve: {
            alias: {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
                'react/jsx-runtime': 'preact/jsx-runtime',
            },
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    })
}

exports.createPages = async ({ reporter, actions, graphql }) => {
    const { createPage } = actions
    const position_template = path.resolve(__dirname, 'src/templates/position.tsx')

    // Fetch the data JSON for positions
    const result = await graphql(`
        query All {
            allPositionsJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panic(result.errors)
    }

    const positions = result.data.allPositionsJson.edges

    positions.forEach(({ node: { slug } }) => {
        const path = `/job-description/${slug}/`

        createPage({
            path,
            component: position_template,
            context: {
                locale: 'en',
                pathname: path,
                slug,
            },
        })
    })
}
