import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Background from 'images/common/background.png'
import { ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'
import { ImageContainer } from 'components/containers'

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;

    @media ${device.laptopM} {
        background-image: none;
    }

    @media ${device.tabletS} {
        background-image: none;
    }
`

const CarouselContainerWrapper = styled(ContainerWrapper)`
    justify-content: space-between;
    margin: 50px 0 75px 0;
    height: 600px;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        align-items: center;
        height: 450px;
        margin: 0;
    }
`

const CarouselTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;

    @media ${device.tabletL} {
        padding: 0;
        align-items: center;
    }
`

const CarouselImageContainer = styled(ImageContainer)`
    max-width: 600px;
    max-height: none;
    margin: 4rem 4rem 0 0;

    .gatsby-image-wrapper {
        max-height: 500px;
        height: auto;
        @media ${device.tabletL} {
            max-height: 200px;
        }
        @media ${device.tabletS} {
            max-height: 350px;
        }
        @media ${device.mobileM} {
            max-height: 300px;
        }
    }
    @media ${device.tabletL} {
        height: 400px;
        margin: 0;
        max-width: 400px;
    }
    @media ${device.tabletS} {
        height: 350px;
    }
    @media ${device.mobileM} {
        height: 320px;
    }
`

const PickerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    margin: 10px 0 0 0;

    @media ${device.tabletL} {
        padding-bottom: 15px;
    }
`

const CarouselDots = styled.span`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 0 8px 0 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        border-radius: 100px;
        border: solid 1px var(--color-sand-4);
        width: 0%;
        height: 0%;
        position: absolute;
        transition: all 0.5s ease-in;
    }

    /* stylelint-disable */

    &.active {
        &::before {
            width: 100%;
            height: 100%;
        }
        i {
            background: var(--color-sand-4);
        }
    }

    i {
        display: flex;
        width: 20px;
        height: 20px;
        position: relative;
        z-index: 2;
        background: var(--color-grey-1);
        transition: all 0.5s ease-in;
        border-radius: 100%;
    }
`

const BasicText = styled.div<{ font_family?: string }>`
    font-size: 4.2rem;
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};

    @media ${device.laptop} {
        font-size: 3.6rem;
        line-height: 40px;
    }
    @media ${device.tabletL} {
        font-size: 3.2rem;
        line-height: 34px;
    }
    @media ${device.tablet} {
        font-size: 2.8rem;
        line-height: 30px;
    }
    @media ${device.tabletS} {
        font-size: 2.4rem;
        line-height: 26px;
    }
`

const StyledUpperText = styled(BasicText)`
    font-size: 4.2rem;
    line-height: 59px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-transform: uppercase;

    @media ${device.laptop} {
        font-size: 3.6rem;
        line-height: 52px;
    }
    @media ${device.tabletL} {
        font-size: 2.8rem;
        line-height: 30px;
        text-align: center;
    }
    @media ${device.tablet} {
        font-size: 2.4rem;
    }
    @media ${device.tabletS} {
        font-size: 2.2rem;
    }
`

const TextLabel = styled(BasicText)`
    font-size: 4.2rem;
    line-height: 57px;
    color: var(--color-sand-4);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};

    @media ${device.laptop} {
        font-size: 3.6rem;
        line-height: 48px;
    }
    @media ${device.tabletL} {
        font-size: 3.2rem;
        line-height: 38px;
    }
    @media ${device.tablet} {
        font-size: 2.8rem;
        line-height: 34px;
    }
    @media ${device.tabletS} {
        font-size: 2.4rem;
        line-height: 30px;
    }
`

const data = [
    {
        text: 'Designing scalable apps',
        img: (
            <StaticImage
                key={0}
                src="../../images/common/homepage/carousel/carousel-0.png"
                alt="Designing scalable apps"
                objectFit="contain"
                loading="eager"
                placeholder="tracedSVG"
                layout="fullWidth"
            />
        ),
    },
    {
        text: 'Creating reliable platforms',
        img: (
            <StaticImage
                key={1}
                src="../../images/common/homepage/carousel/carousel-1.png"
                alt="Creating reliable platforms"
                objectFit="contain"
                loading="eager"
                placeholder="tracedSVG"
                layout="fullWidth"
            />
        ),
    },
    {
        text: 'Building powerful software',
        img: (
            <StaticImage
                key={2}
                src="../../images/common/homepage/carousel/carousel-2.png"
                alt="Building powerful software"
                objectFit="contain"
                loading="eager"
                placeholder="tracedSVG"
                layout="fullWidth"
                style={{ 'padding-top': ' 100%' }}
            />
        ),
    },
]

const Carousel = () => {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const next = (active + 1) % 3
        const id = setTimeout(() => setActive(next), 2500)
        return () => clearTimeout(id)
    }, [active])

    return (
        <CarouselContainer>
            <CarouselContainerWrapper>
                <CarouselTextContainer>
                    <StyledUpperText>
                        Transforming <br />
                        ideas into <br />
                        solutions
                    </StyledUpperText>
                    {data.map(
                        (current_item, index) =>
                            index == active && <TextLabel>{current_item.text}</TextLabel>,
                    )}

                    <PickerContainer>
                        {[...Array(data.length).keys()].map((d, e) => (
                            <CarouselDots
                                key={e}
                                onClick={() => setActive(e)}
                                className={active === e ? 'active' : ''}
                            >
                                <i />
                            </CarouselDots>
                        ))}
                    </PickerContainer>
                </CarouselTextContainer>
                <CarouselImageContainer>
                    {data.map((slide, index) => {
                        if (index === active) {
                            return slide.img
                        }
                    })}
                </CarouselImageContainer>
            </CarouselContainerWrapper>
        </CarouselContainer>
    )
}

export default Carousel
