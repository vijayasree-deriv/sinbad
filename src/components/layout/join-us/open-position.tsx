import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { JoinUsContainer, JoinUsInfo, StyledHeader, StyledText, TextContainer } from './home'
import { JoinUsImageContainer } from 'components/containers/main'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { SectionLabel } from 'components/chunks'
import { Banner } from 'images/common/jd'

const Wrapper = styled.div`
    background-color: var(--color-sand-transparent);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
    width: 100%;
`

const JoinUsWrapper = styled(JoinUsContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-repeat: no-repeat;
    background-image: url(${Banner});
    background-size: 47.5% 65%;
    width: 100%;
`

const JoinUsOpenPositions = () => {
    return (
        <Wrapper>
            <JoinUsWrapper>
                <JoinUsContainer>
                    <JoinUsInfo>
                        <SectionLabel />
                        <TextContainer>
                            <StyledHeader>JOIN OUR TEAM!</StyledHeader>
                            <StyledText>
                                Is your dream to build great products using leading technologies?
                                Join Sinbad Software, where creativity, talent, and a passion for
                                challenges come together.
                            </StyledText>
                        </TextContainer>
                    </JoinUsInfo>
                    <JoinUsImageContainer padding_bottom="unset">
                        <StaticImage
                            src="../../../images/common/openpositions/join-team.png"
                            alt=" Build cutting-edge software with Sinbad Software"
                            placeholder="tracedSVG"
                        />
                    </JoinUsImageContainer>
                </JoinUsContainer>
            </JoinUsWrapper>
        </Wrapper>
    )
}

export default JoinUsOpenPositions
