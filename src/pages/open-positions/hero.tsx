import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { ContainerWrapper } from 'components/containers/common/style'
import Background from 'images/common/homepage/carousel/background.png'
import device from 'themes/device'
/* stylelint-disable */

const ContainersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-position: bottom center;
    background-size: contain;
    justify-content: center;
    background-repeat: no-repeat;
    width: 100%;
`

const PositionsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;

    @media ${device.laptopM} {
        flex-direction: column;
    }
`
const OpenPositionImage = styled.div`
    display: flex;
    flex-direction: row;
    padding: 50px 0;
    object-fit: contain;
    max-width: 700px;
    max-height: none;

    @media ${device.tabletL} {
        padding: 50px 0 0;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 140px;

    @media ${device.laptopM} {
        margin-top: 40px;
        margin-bottom: 0px;
        align-items: center;
    }
`

const StyledHeader = styled.div<{ font_family?: string; mobile_padding?: string; color?: string }>`
    font-size: 5rem;
    line-height: 42px;
    color: var(--color-black-3);
    color: ${(props) => props.color || 'var(--color-black-3)'};
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    padding: 20px 0;
    text-align: left;
    text-transform: uppercase;

    @media ${device.laptopM} {
        font-size: 4.4rem;
        line-height: 48px;
        padding: ${(props) => props.mobile_padding || 'unset'};
    }
`

const Hero = () => {
    return (
        <>
            <ContainersWrapper>
                <ContainerWrapper>
                    <PositionsHeader>
                        <HeaderContainer>
                            <StyledHeader>It careers for</StyledHeader>
                            <StyledHeader mobile_padding="20px 0px" color="var( --color-sand-4)">
                                Challenge
                            </StyledHeader>
                            <StyledHeader>Seekers</StyledHeader>
                        </HeaderContainer>
                        <OpenPositionImage>
                            <StaticImage
                                src="../../images/common/openpositions/first-section.png"
                                alt="selected people icon"
                                placeholder="tracedSVG"
                                objectFit="fill"
                            />
                        </OpenPositionImage>
                    </PositionsHeader>
                </ContainerWrapper>
            </ContainersWrapper>
        </>
    )
}

export default Hero
