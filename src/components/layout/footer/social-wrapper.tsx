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
    max-width: 300px;
    font-size: 1.6rem;
    line-height: 20px;
    color: white;
    padding-top: 10px;
    padding-left: 10px;
    justify-content: center;
    cursor: pointer;
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

const contacts = [
    {
        id: 0,
        image: MapSvg,
        info: 'Sinbad Software LLC',
        details:
            '2201, 22nd Floor, One by Omniyat Building, Al Mustaqbal Street, Business Bay, Dubai, UAE',
    },
    {
        id: 1,
        image: PhoneSvg,
        info: 'Phone:',
        details: '+971 50 861-1678',
    },
    {
        id: 2,
        image: EmailSvg,
        info: 'Email:',
        details: 'information@sinbad.software',
    },
]

const SocialWrapperComponent = () => {
    const sendMailToSinbad = () => {
        const link = 'mailto:information@sinbad.software'
        window.location.href = link
    }

    return (
        <SocialWrapper>
            {contacts.map((contact) => (
                <ContactContainer key={contact.id}>
                    <ContactLink to={'mailto:information@sinbad.software'}>
                        <ContactImage src={contact.image} />
                    </ContactLink>
                    {contact.id == 2 ? (
                        <div onClick={sendMailToSinbad}>
                            <ContactText>{contact.info}</ContactText>
                            <ContactText>{contact.details}</ContactText>
                        </div>
                    ) : (
                        <div>
                            <ContactText>{contact.info}</ContactText>
                            <ContactText>{contact.details}</ContactText>
                        </div>
                    )}
                </ContactContainer>
            ))}
        </SocialWrapper>
    )
}

export default SocialWrapperComponent
