import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ContainerWrapper, Flex } from 'components/containers'
import { Card } from 'components/containers/flex'
import {
    Benefits,
    Salary,
    Bonus,
    Insurance,
    House,
    DressCode,
    Contract,
    BlueBackground,
} from 'images/common/jd'

const BenefitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BlueBackground});
    background-repeat: no-repeat;
    background-size: 45% 100%;
    width: 100%;
    height: 100%;
`

const BenefitsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    @media (max-width: 1335px) {
        align-items: center;
    }
`

const StyledHeader = styled.h2<{ font_family?: string }>`
    text-transform: uppercase;
    color: var(--color-sand-4);
    padding: 40px 40px 40px 0;
    font-size: 3.8rem;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: right;
`

const BenefitsImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 30px 0;
`

const LocationImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: 30px;

    div:nth-child(1) {
        text-transform: uppercase;
        font-size: 3.8rem;
    }
`

const StyledImg = styled.img`
    padding-right: 50px;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const CardHeader = styled.div<{ font_family?: string }>`
    font-size: 1.9rem;
    line-height: 32px;
    color: var(--color-black-3);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    padding: 25px 10px 0;
`

const LocationContainer = styled(Flex)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;

    @media (max-width: 1335px) {
        justify-content: center;
    }
`

const StyledSSText = styled.div<{ font_family?: string }>`
    padding: unset;
    color: var(--color-sand-4);
    font-size: 3.3rem;
    line-height: 62px;
    font-weight: 656;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    padding-right: 5px;
`
const StyledText = styled.div<{ font_family?: string }>`
    max-width: 350px;
    font-size: 1.6rem;
    line-height: 27px;
    color: #1b1b1b;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
    padding-bottom: 10px;
`

const data = [
    { text: 'Market-based salary', icon: Salary },
    { text: 'Annual performance bonus', icon: Bonus },
    { text: 'Medical insurance', icon: Insurance },
    { text: 'Housing & transportation allowance', icon: House },
    { text: 'Casual dress code', icon: DressCode },
    { text: 'Work permit', icon: Contract },
]

const BenefitsList = () => {
    return (
        <BenefitsContainer>
            <BenefitsContainerWrapper>
                <BenefitsImageContainer>
                    <StyledHeader>Benefits</StyledHeader>
                    <StyledImg src={Benefits} />
                </BenefitsImageContainer>
                <Flex wrap="wrap" jc="center">
                    {data.map(({ icon, text }, index) => {
                        return (
                            <Card
                                key={index}
                                ai="center"
                                fd="column"
                                jc="center"
                                max_width="370px"
                                height="280px"
                                padding="55px 0"
                                margin="15px"
                                border_radius="5px"
                            >
                                <img src={icon} />
                                <CardInfo>
                                    <CardHeader>{text}</CardHeader>
                                </CardInfo>
                            </Card>
                        )
                    })}
                </Flex>
                <LocationContainer>
                    <Card
                        direction="row"
                        ai="center"
                        jc="flex-end"
                        width="auto"
                        height="180px"
                        margin="50px 15px 15px 15px"
                        padding="0 20px"
                    >
                        <LocationImageContainer>
                            <StyledSSText font_family="Maven Pro Bold">Location</StyledSSText>
                            <StyledText>Dubai, the UAE</StyledText>
                        </LocationImageContainer>
                        <StaticImage
                            src="../../images/common/jd/location.png"
                            alt="location"
                            placeholder="tracedSVG"
                        />
                    </Card>
                </LocationContainer>
            </BenefitsContainerWrapper>
        </BenefitsContainer>
    )
}

export default BenefitsList
