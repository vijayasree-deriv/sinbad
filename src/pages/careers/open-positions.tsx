import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { ContainerWrapper, ImageContainer } from 'components/containers'
import device from 'themes/device'
import { Card, CardButton, LinkContainer } from 'components/containers/flex'

type StyledTextProps = {
    font_family?: string
    uppercase?: string
}

type PositionsType = {
    icon: ReactNode
    position: string
    text: string
}

const OpenPositionsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const OpenPositionsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`

const StyledHeader = styled.div<StyledTextProps>`
    font-size: 4.8rem;
    line-height: 51px;
    color: var(--color-black-3);
    font-weight: 560;
    font-family: ${(props) => (props.uppercase ? 'Maven Pro Bold' : 'Maven Pro')};
    text-transform: ${(props) => props.uppercase || 'unset'};
    padding: 10px 0 20px;
    text-align: center;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
`

const CardHeader = styled.div<StyledTextProps>`
    font-size: 2.2rem;
    line-height: 34px;
    color: var(--color-sand-4);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    padding: 20px 0 10px;

    @media ${device.laptop} {
        font-size: 2.8rem;
    }
`
const CardText = styled.div<StyledTextProps>`
    max-width: 340px;
    width: 100%;
    font-size: 1.7rem;
    line-height: 26px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: center;
    padding: 15px 0;

    @media ${device.laptop} {
        font-size: 2.2rem;
    }
`

const CardLinkText = styled.div<StyledTextProps>`
    font-size: 1.4rem;
    line-height: 22px;
    color: var(--color-black-3);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-transform: uppercase;
    padding-right: 20px;

    @media ${device.laptop} {
        font-size: 2rem;
    }
`

const positions: PositionsType[] = [
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/it.png"
                alt="information security"
                placeholder="tracedSVG"
            />
        ),
        position: 'Information technology',
        text: 'Provide the best solutions for our clients by taking a holistic view of our technical environment.',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/product.png"
                alt="product design"
                placeholder="tracedSVG"
            />
        ),
        position: 'Product design',
        text: 'Deliver intuitive and beautiful designs that will impress our clients and help them reach their goals.',
    },
    {
        icon: (
            <StaticImage
                src="../../images/common/careers/bi.png"
                alt="business intelligence"
                placeholder="tracedSVG"
            />
        ),
        position: 'Business intelligence',
        text: 'Provide analytical and strategic insights that enchance the growth of our clients’ businesses, products, and services.',
    },
]

const OpenPositions = () => {
    return (
        <OpenPositionsContainer>
            <OpenPositionsContainerWrapper>
                <HeaderContainer>
                    <StyledHeader uppercase="uppercase">Open positions</StyledHeader>
                    <StyledHeader>Make your passion your career</StyledHeader>
                </HeaderContainer>
                <CardContainer>
                    {positions.map(({ position, text, icon }, index) => {
                        return (
                            <Card
                                key={index}
                                direction="column"
                                ai="center"
                                jc="center"
                                max_width="360px"
                                height="444px"
                                padding="40px"
                                margin="20px"
                                border_radius="8px"
                            >
                                <ImageContainer width="160px" height="160px">
                                    {icon}
                                </ImageContainer>
                                <CardHeader>{position}</CardHeader>
                                <CardText>{text}</CardText>
                                <LinkContainer to={'/open-positions'}>
                                    <CardLinkText> See jobs</CardLinkText>
                                    <CardButton>
                                        <StaticImage
                                            src="../../images/common/openpositions/arrow.png"
                                            alt="arrow"
                                            width={10}
                                            height={10}
                                            loading="eager"
                                            placeholder="none"
                                        />
                                    </CardButton>
                                </LinkContainer>
                            </Card>
                        )
                    })}
                </CardContainer>
            </OpenPositionsContainerWrapper>
        </OpenPositionsContainer>
    )
}

export default OpenPositions
