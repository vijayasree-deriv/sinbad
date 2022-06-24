import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ContainerWrapper, ImageContainer } from 'components/containers'
import device from 'themes/device'

const WorkWithUsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-white);

    @media ${device.mobileL} {
        background-image: none;
    }
`
const CareersContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        align-items: center;
    }
`
const WhyWithUsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
    @media ${device.tabletL} {
        padding: 40px 0;
    }
    @media ${device.mobileL} {
        padding: 0px;
    }
`
const StyledHeader = styled.div<{ font_family?: string }>`
    font-size: 4.8rem;
    line-height: 50px;
    color: #1b1b1b;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 20px;

    @media ${device.tabletL} {
        font-size: 3.8rem;
    }
    @media ${device.tabletS} {
        font-size: 3.2rem;
    }
`
const StyledText = styled.div<{ font_family?: string }>`
    max-width: 940px;
    width: 100%;
    font-size: 1.8rem;
    line-height: 34px;
    color: #4c4c4c;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: center;

    @media ${device.tabletL} {
        font-size: 2.2rem;
    }
    @media ${device.tabletS} {
        font-size: 2.4rem;
    }
`
const StyledImage = styled(ImageContainer)`
    width: 700px;
    height: 600px;
    max-height: unset;

    @media ${device.tabletL} {
        max-width: 600px;
        height: 500px;
    }
    @media ${device.tabletS} {
        max-width: 380px;
        height: 350px;
    }
    @media ${device.bp680} {
        max-width: 500px;
        max-height: 370px;
    }
    @media ${device.mobileL} {
        max-width: 330px;
        max-height: 300px;
    }
    @media ${device.mobileM} {
        max-width: 310px;
        max-height: 280px;
    }
    @media ${device.mobileS} {
        max-width: 280px;
        max-height: 250px;
    }
`

const WhyWithUs = () => {
    return (
        <WorkWithUsContainer>
            <CareersContainerWrapper>
                <WhyWithUsText>
                    <StyledHeader>Why work at sinbad software?</StyledHeader>
                    <StyledText>
                        Fintech is an industry where projects come in many shapes and sizes. You’ll
                        be constantly challenged to come up with new solutions and work with various
                        technologies. With us, you’ll have the opportunity to continuosly learn and
                        build your skills while working on new challenges with a smart, supportive
                        team.
                    </StyledText>
                </WhyWithUsText>
                <StyledImage>
                    <StaticImage
                        src="../../images/common/careers/words.png"
                        alt="reasons to work at sinbad"
                        placeholder="tracedSVG"
                        loading="eager"
                    />
                </StyledImage>
            </CareersContainerWrapper>
        </WorkWithUsContainer>
    )
}

export default WhyWithUs
