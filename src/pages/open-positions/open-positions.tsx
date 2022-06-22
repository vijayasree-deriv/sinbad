import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Text } from 'components/containers/main'
import { ContainerWrapper } from 'components/containers/common/style'
import RightArrow from 'images/common/openpositions/arrow.png'
import Flex, { Card } from 'components/containers/flex'
import device from 'themes/device'
import { positions } from 'pages/job-description/data'
import { BlueBackground } from 'images/common/jd'

type StyledProps = {
    font_family?: string
    border_bottom?: string
    color?: string
    text_align?: string
    line_height?: string
    font_size?: string
    padding?: string
    text_transform?: string
}

/* stylelint-disable */

const OpenPositionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${BlueBackground});
    background-repeat: no-repeat;
    background-size: 45% 100%;
    width: 100%;
    height: 100%;
`

const OpenPositionsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

const PositionsCarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
    align-items: center;
    padding-right: 60px;

    @media ${device.tablet} {
        padding: 60px 0;
    }
    @media ${device.mobileL} {
        width: 100%;
        max-width: 300px;
        padding-right: 35px;
        padding-top: 0px;
    }
`
const CardButtonContainer = styled(Link)`
    display: flex;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: var(--color-blue-3);
    padding: 5px;
`
const CardButton = styled.img`
    width: 10px;
    height: 10px;
`
const LinkContainer = styled(Link)`
    display: flex;
    text-decoration: none;
`

const StyledFlex = styled(Flex)`
    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        width: unset;
    }
`

const OpenPositionsInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    align-self: start;
    left: 30px;
    top: 10px;

    @media ${device.tablet} {
        display: none;
    }
`

const StyledHeader = styled.div<StyledProps>`
    font-size: ${(props) => props.font_size || '2.9rem'};
    line-height: ${(props) => props.line_height || '34px'};
    color: ${(props) => props.color || 'var(--color-black-3)'};
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    border-bottom: ${(props) => props.border_bottom || 'unset'};
    padding: ${(props) => props.padding || '10px 0 20px'};
    text-transform: ${(props) => props.text_transform || 'unset'};
    text-align: ${(props) => props.text_align || 'center'};

    @media ${device.laptopM} {
        max-width: 320px;
        font-size: 4.4rem;
        line-height: 48px;
    }
`

const StyledHeaderText = styled.div<StyledProps>`
    font-size: 1.6rem;
    line-height: 27px;
    color: ${(props) => props.color || 'var(--color-black-3)'};
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: ${(props) => props.text_align || 'left'};
    padding: ${(props) => props.padding || 'unset'};
    padding-bottom: 10px;
    text-transform: ${(props) => props.text_transform || 'uppercase'};

    @media ${device.laptopM} {
        max-width: 320px;
        font-size: 1.5rem;
        line-height: 25px;
    }
`

const StyledText = styled.div<StyledProps>`
    font-size: 1.5rem;
    line-height: 24px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: ${(props) => props.text_align || 'left'};
    padding-bottom: 10px;

    @media ${device.laptopM} {
        max-width: 320px;
        font-size: 1.5rem;
        line-height: 25px;
    }
`

const OpenPositions = () => {
    return (
        <OpenPositionsContainer>
            <OpenPositionsContainerWrapper>
                <PositionsCarouselContainer>
                    <StyledFlex width="760px" wrap="wrap">
                        {positions.map(({ position, text, id }, index) => {
                            return (
                                <Card
                                    key={index}
                                    fd="column"
                                    ai="center"
                                    jc="space-between"
                                    max_width=" 340px"
                                    height="300px"
                                    padding="30px"
                                    margin="20px"
                                >
                                    <StyledHeader color="var(--color-sand-4)" padding="20px 0px">
                                        {position}
                                    </StyledHeader>
                                    <StyledText font_size="14px" text_align="center">
                                        {text}
                                    </StyledText>
                                    <LinkContainer to={`/job-description/${id}`}>
                                        <Text
                                            font_size="1.5rem"
                                            text_align="center"
                                            width="50px"
                                            padding="0px"
                                            font_family="Maven Pro Bold"
                                            text_transform="uppercase"
                                        >
                                            More
                                        </Text>
                                        <CardButtonContainer to={`/job-description/${id}`}>
                                            <CardButton src={RightArrow} />
                                        </CardButtonContainer>
                                    </LinkContainer>
                                </Card>
                            )
                        })}
                    </StyledFlex>
                </PositionsCarouselContainer>
                <OpenPositionsInfo>
                    <StyledHeader text_align="left" padding="unset">
                        Open
                    </StyledHeader>
                    <StyledHeader text_align="left" border_bottom="2px solid var(--color-sand-1)">
                        Positions
                    </StyledHeader>
                    <StyledHeaderText padding="30px 0 10px">Back-end Development</StyledHeaderText>
                    <StyledHeaderText>Business Intelligence</StyledHeaderText>
                    <StyledHeaderText>DevOps</StyledHeaderText>
                    <StyledHeaderText>Quantitative</StyledHeaderText>
                    <StyledHeaderText>Mobile app Development</StyledHeaderText>
                    <StyledHeaderText
                        color="var(--color-sand-4)"
                        font_size="18px"
                        padding="25px 0"
                        text_transform="unset"
                    >
                        and more...
                    </StyledHeaderText>
                </OpenPositionsInfo>
            </OpenPositionsContainerWrapper>
        </OpenPositionsContainer>
    )
}

export default OpenPositions
