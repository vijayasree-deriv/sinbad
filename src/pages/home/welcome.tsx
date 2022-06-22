import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Flex from 'components/containers/flex'
import { ContainerWrapper } from 'components/containers/common/style'
import { CSSElementProps } from 'types/generics'
import device from 'themes/device'

type StyledTextProps = {
    font_family?: string
}

const WelcomeContainer = styled.div`
    align-items: center;
    flex-direction: column;
    padding: 0;
    display: flex;
    background-color: var(--color-white);
    width: 100%;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    background: var(--color-white);
`

const StyledHeader = styled.div<StyledTextProps>`
    font-size: 4.8rem;
    line-height: 50px;
    color: #1b1b1b;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: center;
    text-transform: uppercase;

    @media ${device.mobileL} {
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        white-space: pre-wrap;
        justify-content: center;
    }
`

const StyledText = styled.div<StyledTextProps>`
    width: 100%;
    max-width: 982px;
    height: 96px;
    font-size: 1.9rem;
    line-height: 34px;
    color: #4c4c4c;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: center;

    @media ${device.tablet} {
        padding: 10px;
        height: fit-content;
    }
`

const StyledFlex = styled(Flex)`
    max-width: 700px;
    flex-wrap: wrap;
    height: auto;
    margin: 20px 0;

    @media (max-width: 930px) {
        flex-direction: column;
        align-items: center;
        width: unset;
    }
`

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;

    @media ${device.laptopM} {
        padding: 35px 0 0 0;
    }

    &::before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        content: '';
        background: var(--color-sea-1);
        width: 100%;
        height: 525px;
        z-index: 2;

        @media ${device.laptopM} {
            height: 100%;
        }
    }
    &::after {
        position: absolute;
        bottom: 0;
        content: '';
        background: var(--color-sand-1);
        width: 100%;
        height: 300px;
        z-index: 1;
    }

    @media ${device.mobileL} {
        padding: 50px 0;
        margin: 50px 0 0 0;
    }
`

const CardContent = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;

    @media ${device.mobileL} {
        flex-direction: column;
    }
    @media ${device.laptopL} {
        flex-wrap: wrap;
    }
`

const Card = styled.div<CSSElementProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 320px;
    height: 340px;
    padding: 32px 44px 32px 32px;
    box-shadow: rgba(14, 14, 14, 0.1) 4px 4px 6px 6px;
    background-color: var(--color-white);
    margin: ${(props) => props.margin || '0 15px 20px 15px'};
    border-radius: 4px;
    filter: drop-shadow(0 13px 17.5px rgba(0, 0, 0, 0.13));
    align-self: ${(props) => props.alignSelf || 'start'};

    &.first {
        margin: 0 15px 0 0;
    }
    img {
        width: 100%;
        max-width: 100px;
        margin: 0 auto;
    }
    @media ${device.mobileL} {
        padding: 10px 0 30px;
        height: auto;
        margin: 10px;
        width: 100vw;
    }
    @media ${device.laptopM} {
        &.first {
            margin: 0 0 10px 0;
        }
    }
`

const CardHeader = styled.div<StyledTextProps>`
    max-width: 241px;
    font-size: 2.2rem;
    line-height: 27px;
    color: #0a0a0a;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: center;
    padding: 20px 0;
`

const CardText = styled.div<StyledTextProps>`
    font-size: 1.7rem;
    line-height: 26px;
    color: #4c4c4c;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: center;

    @media ${device.mobileL} {
        height: auto;
        padding: 20px;
    }
`

const data = {
    first: {
        header: 'App development & integration',
        text: 'We create desktop and mobile software and also manage complex integrations with existing systems',
        icon: (
            <StaticImage
                src="../../images/common/homepage/welcome/first.png"
                alt="ideation icon"
                placeholder="tracedSVG"
                objectFit="contain"
            />
        ),
    },
    other: [
        {
            header: 'Ideation',
            text: 'With research, analysis, ideation, and strategising, we translate our clients needs into opportunities for digital innovation',
            icon: (
                <StaticImage
                    src="../../images/common/homepage/welcome/other-0.png"
                    alt="ideation icon"
                    placeholder="tracedSVG"
                    objectFit="contain"
                />
            ),
        },
        {
            header: 'Quality assurance',
            text: 'Whatever we build goes through rigorous to make sure its quality and security meet our tough standarts',
            icon: (
                <StaticImage
                    src="../../images/common/homepage/welcome/other-1.png"
                    alt="quality assurance icon"
                    placeholder="tracedSVG"
                    objectFit="contain"
                />
            ),
        },
        {
            header: 'Product design',
            text: 'The journey from vision to intuitive software starts here. We design winning products for the fintech industry',
            icon: (
                <StaticImage
                    src="../../images/common/homepage/welcome/other-2.png"
                    alt="product design icon"
                    placeholder="tracedSVG"
                    objectFit="contain"
                />
            ),
        },
        {
            header: 'Software maintenance',
            text: 'Offering lifetime maintenance and upgrading services, we continue to 0pxain our clients digital partner',
            icon: (
                <StaticImage
                    src="../../images/common/homepage/welcome/other-3.png"
                    alt="software maintenance icon"
                    placeholder="tracedSVG"
                    objectFit="contain"
                />
            ),
        },
    ],
}

const Welcome = () => {
    return (
        <WelcomeContainer>
            <ContainerWrapper>
                <TextContainer>
                    <StyledHeader>
                        Welcome to <strong>Sinbad Software</strong>
                    </StyledHeader>
                    <StyledText>
                        Sinbad Software LLC provides software development services and IT solutions
                        for the fintech industri. At every step of the way, we aim to give our
                        clients the power to go beyond digital boundaires and surpass their
                        competitors in the ever-evolving fintech landscape.
                    </StyledText>
                </TextContainer>
            </ContainerWrapper>
            <CardContainer>
                <ContainerWrapper>
                    <CardContent>
                        <Card className="first" alignSelf="center" margin="0">
                            {data.first.icon}
                            <CardHeader>{data.first.header}</CardHeader>
                            <CardText>{data.first.text}</CardText>
                        </Card>
                        <StyledFlex wrap="wrap">
                            {data.other.map(({ header, text, icon }, index) => (
                                <Card key={index}>
                                    {icon}
                                    <CardHeader>{header}</CardHeader>
                                    <CardText>{text}</CardText>
                                </Card>
                            ))}
                        </StyledFlex>
                    </CardContent>
                </ContainerWrapper>
            </CardContainer>
        </WelcomeContainer>
    )
}

export default Welcome
