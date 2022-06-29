import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { Button } from 'components/elements'
import { JoinUsImageContainer } from 'components/containers/main'
import device from 'themes/device'
import { openPositionActions } from 'common/utility'
import { Banner } from 'images/common/careers'

const Wrapper = styled.div`
    background-color: var(--color-sand-transparent);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
    width: 100%;
`

export const StyledHeader = styled.h2<{ font_family?: string }>`
    text-transform: uppercase;
    color: var(--color-black-3);
    font-size: 4.8rem;
    line-height: 58px;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};

    @media ${device.mobileL} {
        text-align: center;
    }
`

export const StyledText = styled.div<{ font_family?: string }>`
    max-width: 432px;
    width: 100%;
    font-size: 2.1rem;
    line-height: 34px;
    color: var(--color-black-3);
    font-weight: 320;
    text-align: left;
    padding: 25px 0;
    font-family: Maven Pro;

    @media ${device.mobileL} {
        text-align: center;
    }
`

export const JoinUsContainer = styled.div<{ fd?: string; height?: string }>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: ${(props) => props.height || '100%'};
    padding: 70px 0;

    @media ${device.tabletL} {
        display: flex;
        flex-direction: ${(props) => props.fd || 'column'};
        justify-content: center;
        padding: 20px 0;
    }
`
export const TextContainer = styled.div<{ padding_bottom?: string }>`
    padding-bottom: ${(props) => props.padding_bottom || '190px'};

    @media ${device.tabletL} {
        padding-bottom: 60px;
    }
    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const JoinUsWrapper = styled(JoinUsContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 42% 70%;
    width: 100%;
`

export const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    @media ${device.mobileL} {
        align-items: center;
        padding: 10px;
    }
`

const JoinUsHome = () => {
    return (
        <Wrapper>
            <JoinUsWrapper>
                <JoinUsContainer>
                    <JoinUsInfo>
                        <TextContainer padding_bottom="80px">
                            <StyledHeader>Join Our Team!</StyledHeader>
                            <StyledText>
                                Is your dream to build great products using leading technologies?
                                Join Sinbad Software, where creativity, talent, and a passion for
                                challenges come together.
                            </StyledText>
                            <Button label="See Our Open Positions" onClick={openPositionActions} />
                        </TextContainer>
                    </JoinUsInfo>
                    <JoinUsImageContainer padding_bottom="unset">
                        <StaticImage
                            src="../../../images/common/homepage/join-us/home-join-us.png"
                            alt="Sinbad Software with a tracking software"
                            placeholder="tracedSVG"
                        />
                    </JoinUsImageContainer>
                </JoinUsContainer>
            </JoinUsWrapper>
        </Wrapper>
    )
}

export default JoinUsHome
