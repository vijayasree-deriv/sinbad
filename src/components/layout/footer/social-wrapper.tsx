import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { SocialWrapper } from '../../containers/common/style'
import MapSvg from 'images/svg/map.svg'
import PhoneSvg from 'images/svg/phone.svg'
import EmailSvg from 'images/svg/mail.svg'
import device from 'themes/device'

const ContactLink = styled(GatsbyLink)`
    align-self: center;
    padding: 8px;
    display: flex;
    background: white;
    border-radius: 30px;
`

const ContactText = styled.div`
    font-size: 1.6rem;
    color: white;
    padding-top: 10px;
    padding-left: 10px;
    justify-content: center;
`

const ContactImage = styled.img`
    width: 25px;
    height: 25px;
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    padding-right: 45px;

    @media ${device.tabletL} {
        padding: 0;
        width: 100%;
        margin: 0 0 15px 0;
    }
`

const SocialWrapperComponent = () => {
    const contacts = [
        {
            id: 0,
            image: MapSvg,
            info: 'Sinbad Software LLC',
            details: 'Suite 112, Excepteur cupidatat non',
            link: '',
        },
        {
            id: 1,
            image: PhoneSvg,
            info: 'Phone:',
            details: '888 22200 33300',
            link: '',
        },
        {
            id: 2,
            image: EmailSvg,
            info: 'Email:',
            details: 'info@sinbad.software',
            link: '',
        },
    ]

    return (
        <SocialWrapper>
            {contacts.map((contact) => (
                <ContactContainer key={contact.id}>
                    <ContactLink to={contact.link}>
                        <ContactImage src={contact.image} />
                    </ContactLink>
                    <div>
                        <ContactText>{contact.info}</ContactText>
                        <ContactText>{contact.details}</ContactText>
                    </div>
                </ContactContainer>
            ))}
        </SocialWrapper>
    )
}

export default SocialWrapperComponent
