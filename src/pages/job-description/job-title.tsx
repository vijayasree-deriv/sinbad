import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { JobTitleProps } from './data'
import { ContainerWrapper, ImageContainer } from 'components/containers'
import Background from 'images/common/background.png'

const JobTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-sand-1);
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;
`

const JobTitleContainerWrapper = styled(ContainerWrapper)`
    flex-direction: column;
    align-items: center;
`

const StyledHeader = styled.div<{ font_family?: string }>`
    max-width: 600px;
    font-size: 4.8rem;
    line-height: 58px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding-top: 100px;
`

const JobTitle = ({ position }: JobTitleProps) => {
    return (
        <JobTitleContainer>
            <JobTitleContainerWrapper>
                <StyledHeader>{position?.position.slice(0, -1)}</StyledHeader>
                <ImageContainer max_height="unset">
                    <StaticImage
                        src="../../images/common/jd/analytic-background.png"
                        alt="job description"
                        loading="eager"
                        objectFit="scale-down"
                        placeholder="tracedSVG"
                    />
                </ImageContainer>
            </JobTitleContainerWrapper>
        </JobTitleContainer>
    )
}

export default JobTitle
