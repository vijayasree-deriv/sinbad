import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { JoinUsContainer, JoinUsInfo, StyledHeader, StyledText, TextContainer } from './home'
import { Button } from 'components/elements'
import { JoinUsImageContainer } from 'components/containers/main'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { Banner } from 'images/common/jd'
import { HR_EMAIL } from 'common/constants'

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

const JoinUsJob = () => {
    const sendMailToHR = () => {
        const link = `mailto:${HR_EMAIL}`
        window.open(link, '_blank')
    }

    return (
        <Wrapper>
            <JoinUsWrapper>
                <JoinUsContainer fd="column-reverse">
                    <JoinUsImageContainer padding_bottom="unset" width="600px" mobile_pb="unset">
                        <StaticImage
                            src="../../../images/common/jd/job-join-us.png"
                            alt="jobs join us image"
                            placeholder="tracedSVG"
                        />
                    </JoinUsImageContainer>
                    <JoinUsInfo>
                        <TextContainer>
                            <StyledHeader>Join Our Team!</StyledHeader>
                            <StyledText>
                                To apply for this position please send us your CV with a cover
                                letter to hr@sinbad.software
                            </StyledText>
                            <Button label="Apply for this job" onClick={sendMailToHR} />
                        </TextContainer>
                    </JoinUsInfo>
                </JoinUsContainer>
            </JoinUsWrapper>
        </Wrapper>
    )
}

export default JoinUsJob
