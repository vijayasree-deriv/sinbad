import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import device, { size } from 'themes/device'

type FlexBoxProps = {
    width?: string
    height?: string
    min_height?: string
    max_width?: string
    position?: string
    background?: string
    wrap?: string
    jc?: string
    fw?: string
    bg?: string
    fd?: string
    ai?: string
    direction?: string
    tablet_direction?: string
    tablet_ai?: string
    tablet_jc?: string
    tablet_fw?: string
}

type CardProps = {
    margin?: string
    padding?: string
    alignSelf?: string
    border_radius?: string
}

const flexStyles = ({ jc, ai, fw, fd }) => css`
    justify-content: ${jc};
    align-items: ${ai};
    flex-wrap: ${fw};
    flex-direction: ${fd};
`

const mediaqueries = Object.keys(size)
    .sort(function (a, b) {
        return size[b] - size[a]
    })
    .reduce((accumulator, label) => {
        accumulator[label] = (...args) => css`
            @media (max-width: ${size[label]}px) {
                ${css(...args)};
            }
        `
        return accumulator
    }, {})

const generateResponsiveStyles = (stylesGenerator) => (props) => {
    return Object.keys(mediaqueries).reduce((rules, mq) => {
        if (!props[mq]) return rules
        const styles = mediaqueries[mq]`        
        ${stylesGenerator(props[mq])}
        `
        return [...rules, styles]
    }, [])
}

const responsiveStyles = generateResponsiveStyles(flexStyles)

export const Box = styled.div<FlexBoxProps>`
    width: ${(props) => props.width || ''};
    height: ${(props) => props.height || ''};
    min-height: ${(props) => props.min_height || ''};
    max-width: ${(props) => props.max_width || ''};
    position: ${(props) => props.position || ''};
    background: ${(props) => (props.background || props.bg ? props.background || props.bg : '')};
    ${responsiveStyles}
`

const Flex = styled(Box)<FlexBoxProps>`
    display: flex;
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    flex-wrap: ${(props) => (props.wrap || props.fw ? props.wrap || props.fw : '')};
    justify-content: ${(props) => props.jc || 'center'};
    align-items: ${(props) => props.ai || ''};
    flex-direction: ${(props) => (props.direction || props.fd ? props.direction || props.fd : '')};

    @media ${device.tablet} {
        flex-direction: ${(props) => props.tablet_direction || ''};
        align-items: ${(props) => props.tablet_ai || ''};
        justify-content: ${(props) => props.tablet_jc || ''};
        flex-wrap: ${(props) => props.tablet_fw};
    }

    ${responsiveStyles}
`

export const Card = styled(Flex)<CardProps>`
    box-shadow: rgba(14, 14, 14, 0.1) 4px 4px 6px 6px;
    background-color: var(--color-white);
    padding: ${(props) => props.padding || 'unset'};
    margin: ${(props) => props.margin || 'unset'};
    align-self: ${(props) => props.alignSelf || 'start'};
    border-radius: ${(props) => props.border_radius || '4px'};
`

export const CardButton = styled.div`
    display: flex;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: var(--color-blue-3);
    padding: 5px;
`

export const LinkContainer = styled(Link)`
    display: flex;
    text-decoration: none;
`

export default Flex
