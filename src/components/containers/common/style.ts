import styled from 'styled-components'
import Flex from 'components/containers/flex'
import device from 'themes/device'

type HeaderProps = {
    font_family?: string
    color?: string
    padding_left?: string
    padding_right?: string
}

export const HeaderTitle = styled.div<HeaderProps>`
    font-size: 3.4rem;
    line-height: 58px;
    color: ${(props) => props.color || 'var(--color-black-1)'};
    padding-left: ${(props) => props.padding_left || '0px'};
    padding-right: ${(props) => props.padding_right || '0px'};
    font-family: ${(props) => props.font_family || 'Maven Pro'};
`

export const DefaultFooter = styled.footer`
    background-color: var(--color-blue-1);
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;

    @media ${device.mobileL} {
        padding-bottom: 6rem;

        @media ${device.tabletL} {
            padding-bottom: 0;
        }
    }
`

export const SocialWrapper = styled.div`
    align-items: center;
    height: 250px;
    background: var(--color-blue-1);
    color: white;
    display: flex;
    justify-content: space-between;

    @media ${device.tabletL} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 3rem 0 1rem;

        a:first-child {
            img {
                margin-left: 0;
            }
        }
    }
`

export const DisclaimerWrapper = styled.div`
    width: 100%;
    height: 150px;
    background: var(--color-blue-1);
    color: white;
    border-top: 1px solid rgb(22, 57, 79);
    display: flex;
`

export const PagesWrapper = styled(Flex)`
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ContainerWrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    overflow: hidden;
    max-width: 1200px;
`
