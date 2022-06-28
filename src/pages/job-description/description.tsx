import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { JobTitleProps } from './data'
import { Card } from 'components/containers/flex'
import { ContainerWrapper, Header } from 'components/containers'
import { BlueBackground } from 'images/common/jd'
import device from 'themes/device'

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url(${BlueBackground});
    background-repeat: no-repeat;
    background-size: 45% 100%;
    width: 100%;
    height: 100%;
`

const DescriptionContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledHeader = styled(Header)`
    text-transform: uppercase;
    color: var(--color-sand-4);
    font-size: 3.8rem;
    line-height: 50px;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};

    @media ${device.tabletL} {
        text-align: center;
        padding: 0px;
    }
`

const HeaderImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 30px;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;
    }
`

const JDContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 60px;

    @media ${device.laptopL} {
        width: 90%;
    }
`

const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    max-width: 1190px;
    margin: 20px 0;

    @media ${device.tabletL} {
        align-items: center;
        padding: 10px;
    }
`

const StyledImg = styled.div`
    padding-right: 50px;
    align-items: flex-end;

    @media ${device.tabletL} {
        align-items: center;
        padding: 10px 0px;
    }
`

const ArrowImage = styled.div`
    flex: none;
    width: 18px;
    height: 18px;
    margin-top: 8px;
    align-self: start;
    @media ${device.laptopL} {
        margin-top: 10px;
    }
`

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 50px;

    @media ${device.tabletL} {
        padding-top: 30px;
        padding-right: 30px;
    }

    @media ${device.mobileL} {
        padding-top: 30px;
        padding-right: 10px;
    }
`

const StyledListItem = styled.li<{ pb?: string }>`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    color: var(--color-black-3);
    padding-left: 75px;
    max-width: 1000px;
    padding-bottom: ${(props) => props.pb || 'unset'};

    @media ${device.laptopL} {
        max-width: 950px;
    }

    @media ${device.tabletL} {
        max-width: 700px;
        padding-left: 10px;
    }
    @media ${device.tablet} {
        max-width: 600px;
        padding-left: 25px;
    }
`

const StyledText = styled.div<{
    font_family?: string
    padding?: string
    mobile_ta?: string
    max_width?: string
}>`
    font-size: 1.9rem;
    line-height: 33px;
    color: var(--color-black-2);
    font-weight: 320;
    text-align: left;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    padding: ${(props) => props.padding || 'unset'};
    display: flex;
    align-items: center;
    max-width: ${(props) => props.max_width || 'none'};

    @media ${device.tabletL} {
        padding: 0px 10px;
    }

    @media ${device.tablet} {
        text-align: ${(props) => props.mobile_ta || 'center'};
    }
`

const Description = ({ position }: JobTitleProps) => {
    return (
        <DescriptionContainer>
            <DescriptionContainerWrapper>
                <JDContainer>
                    <StyledCard ai="center">
                        {position?.description.map((paragraph, index) => {
                            return (
                                <StyledText padding="50px 75px" max_width="1100px" key={index}>
                                    {paragraph}
                                </StyledText>
                            )
                        })}
                    </StyledCard>
                    <StyledCard direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Your challenges</StyledHeader>
                            <StyledImg>
                                <StaticImage
                                    src="../../images/common/jd/challenges.png"
                                    alt="career join us image"
                                    placeholder="none"
                                />
                            </StyledImg>
                        </HeaderImageContainer>
                        <StyledList>
                            {position?.challenges.map((challenge, index) => {
                                return (
                                    <StyledListItem key={index}>
                                        <ArrowImage>
                                            <StaticImage
                                                src="../../images/common/jd/arrow.png"
                                                alt="career join us image"
                                                placeholder="none"
                                            />
                                        </ArrowImage>
                                        <StyledText padding="0 0 0 10px" mobile_ta="left">
                                            {challenge}
                                        </StyledText>
                                    </StyledListItem>
                                )
                            })}
                        </StyledList>
                    </StyledCard>
                    <StyledCard direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Our Team</StyledHeader>
                            <StyledImg>
                                <StaticImage
                                    src="../../images/common/jd/team.png"
                                    alt="career join us image"
                                    placeholder="none"
                                />
                            </StyledImg>
                        </HeaderImageContainer>
                        <StyledText padding="25px 75px 50px" max_width="1050px">
                            {position?.team}
                        </StyledText>
                    </StyledCard>
                    <StyledCard direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Requirements</StyledHeader>
                            <StyledImg>
                                <StaticImage
                                    src="../../images/common/jd/requirements.png"
                                    alt="career join us image"
                                    placeholder="none"
                                />
                            </StyledImg>
                        </HeaderImageContainer>
                        <StyledList>
                            {position?.requirements.map((requirement, index) => {
                                return (
                                    <StyledListItem key={index}>
                                        <ArrowImage>
                                            <StaticImage
                                                src="../../images/common/jd/arrow.png"
                                                alt="career join us image"
                                                placeholder="none"
                                            />
                                        </ArrowImage>
                                        <StyledText padding="0 0 0 10px" mobile_ta="left">
                                            {requirement}
                                        </StyledText>
                                    </StyledListItem>
                                )
                            })}
                        </StyledList>
                    </StyledCard>
                    {position?.good_to_have.length && (
                        <StyledCard direction="column">
                            <HeaderImageContainer>
                                <StyledHeader>What’s good to have</StyledHeader>
                                <StyledImg>
                                    <StaticImage
                                        src="../../images/common/jd/good-to-have.png"
                                        alt="career join us image"
                                        placeholder="none"
                                    />
                                </StyledImg>
                            </HeaderImageContainer>
                            <StyledList>
                                {position?.good_to_have.map((ability, index) => {
                                    return (
                                        <StyledListItem key={index}>
                                            <ArrowImage>
                                                <StaticImage
                                                    src="../../images/common/jd/arrow.png"
                                                    alt="career join us image"
                                                    placeholder="none"
                                                />
                                            </ArrowImage>
                                            <StyledText padding="0 0 0 10px" mobile_ta="left">
                                                {ability}
                                            </StyledText>
                                        </StyledListItem>
                                    )
                                })}
                            </StyledList>
                        </StyledCard>
                    )}
                </JDContainer>
            </DescriptionContainerWrapper>
        </DescriptionContainer>
    )
}

export default Description
