import React from 'react'
import styled from 'styled-components'
import Dashboard from 'images/common/dashboard.png'
import { ContainerWrapper } from 'components/containers'
import device from 'themes/device'
import { BlueBackground } from 'images/common/jd'
import { SectionLabel } from 'components/chunks'

type StyledTextProps = {
    font_family?: string
}

const TechStackContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${BlueBackground});
    background-repeat: no-repeat;
    background-size: 50% 100%;
    width: 100%;
    height: 100%;
`

const TechStackContainerWrapper = styled(ContainerWrapper)`
    padding: 100px 0;

    @media ${device.laptopM} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.laptopM} {
        padding: 30px 0 0;
    }
`

const TechDashboard = styled.img`
    max-width: 800px;
    max-height: 600px;

    @media ${device.tabletL} {
        max-width: 600px;
        max-height: 500px;
    }
    @media ${device.tabletS} {
        max-width: 400px;
        max-height: 400px;
    }
`

const TermsTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    text-align: center;
    align-items: flex-start;
    margin: 30px 15px;
`

const tech_stack = [
    '>  CSS',
    '>  Perl',
    '>  React',
    '>  Sass',
    '>  JavaScript',
    '>  InDesign',
    '>  PostgreSQL',
    '>  Redis',
    '>  Amazon Web Services',
    '>  GitHub',
    '>  Redmine',
    '>  Wikimedia Commons',
]

const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width: 500px;
    max-height: 170px;
    padding: 20px 0;
`

const Stack = styled.div<StyledTextProps>`
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 320;
    padding: 15px 25px 0 0;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
`
const StyledText = styled.div<StyledTextProps>`
    max-width: 350px;
    font-size: 1.6rem;
    line-height: 27px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
`
const StyledHeader = styled.div<StyledTextProps>`
    max-width: 425px;
    font-size: 4.8rem;
    line-height: 51px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding: 10px 0 20px;
`

const StyledDescription = styled.div<StyledTextProps>`
    max-width: 480px;
    font-size: 2.4rem;
    line-height: 27px;
    color: var(--color-sand-4);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding-bottom: 120px;

    @media ${device.laptopM} {
        padding-bottom: 0;
    }
`

const TechStack = () => {
    return (
        <TechStackContainer>
            <TechStackContainerWrapper>
                <TechDashboard src={Dashboard} alt="Tech Stack" />
                <TermsTextContainer>
                    <SectionLabel />
                    <StyledHeader>Tech stack</StyledHeader>
                    <StyledText>
                        We leverage a wide range of programming languages and frameworks to create
                        robust software for the fintech industry to meet our clients’ needs.
                    </StyledText>
                    <StackContainer>
                        {tech_stack.map((item, index) => (
                            <Stack key={index}>{item}</Stack>
                        ))}
                    </StackContainer>
                    <StyledDescription>and more...</StyledDescription>
                </TermsTextContainer>
            </TechStackContainerWrapper>
        </TechStackContainer>
    )
}

export default TechStack
