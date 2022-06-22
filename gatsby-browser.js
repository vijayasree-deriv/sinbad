import React from 'react'
import GlobalStyle from 'themes/global-style'
import './static/css/global-style.css'
import './static/css/ibm-plex-sans-var.css'

export const onInitialClientRender = () => {}

export const onClientEntry = () => {}

export const onRouteUpdate = () => {}

export const wrapPageElement = ({ element, props }) => {
    return (
        <section {...props}>
            <GlobalStyle />
            {element}
        </section>
    )
}
