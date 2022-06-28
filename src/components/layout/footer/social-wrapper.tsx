import React from 'react'
import styled from 'styled-components'
import { SocialWrapper } from '../../containers/common/style'
import MapSvg from 'images/svg/map.svg'
import PhoneSvg from 'images/svg/phone.svg'
import EmailSvg from 'images/svg/mail.svg'
import device from 'themes/device'
import { CSSElementProps } from 'types/generics'

const ContactLink = styled.a`
    align-self: center;
    padding: 8px;
    display: flex;
    background: white;
    border-radius: 30px;
`

const ContactText = styled.div<CSSElementProps>`
    font-size: 1.6rem;
    line-height: 20px;
    color: white;
    padding-top: 10px;
    padding-left: 10px;
    justify-content: center;
    font-family: Maven Pro;
    cursor: pointer;
`

const ContactImage = styled.img`
    width: 25px;
    height: 25px;
`

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 450px;
    padding-right: 70px;

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
        to: 'https://goo.gl/maps/8Lb4NbYoUpikKJxS6',
    },
    {
        id: 1,
        image: PhoneSvg,
        info: 'Phone:',
        details: '+971 50 861-1678',
        to: 'tel:971508611678',
    },
    {
        id: 2,
        image: EmailSvg,
        info: 'Email:',
        details: 'information@sinbad.software',
        to: 'mailto:information@sinbad.software',
    },
]

const SocialWrapperComponent = () => {
    return (
        <SocialWrapper>
            {contacts.map((contact) => (
                <ContactContainer key={contact.id}>
                    <ContactLink href={contact.to} target="_blank">
                        <ContactImage src={contact.image} />
                    </ContactLink>
                    <div
                        onClick={() => {
                            window.open(contact.to, '_blank')
                        }}
                    >
                        <ContactText>{contact.info}</ContactText>
                        <ContactText>{contact.details}</ContactText>
                    </div>
                </ContactContainer>
            ))}
        </SocialWrapper>
    )
}

export default SocialWrapperComponent
