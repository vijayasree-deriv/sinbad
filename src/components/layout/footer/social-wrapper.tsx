import React from 'react'
import styled from 'styled-components'
import { SocialWrapper } from '../../containers/common/style'
import { isMobile } from 'common/os-detect'
import MapSvg from 'images/svg/map.svg'
import PhoneSvg from 'images/svg/phone.svg'
import EmailSvg from 'images/svg/mail.svg'
import device from 'themes/device'
import { CSSElementProps } from 'types/generics'
import { EMAIL, MOBILE } from 'common/constants'

const ContactIcon = styled.div<CSSElementProps>`
    align-self: start;
    padding: 8px;
    display: flex;
    background: white;
    border-radius: 30px;
`

const ContactText = styled.div<CSSElementProps>`
    max-width: 250px;
    font-size: 1.6rem;
    line-height: 20px;
    color: white;
    padding-left: 10px;
    justify-content: center;
    font-family: Maven Pro;
`

const ContactImage = styled.img`
    width: 25px;
    height: 25px;
`

const ContactContainer = styled.div<CSSElementProps>`
    display: flex;
    flex-direction: row;
    width: fit-content;
    padding-right: 55px;
    cursor: ${(props) => props.cursor || 'unset'};

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
        target: '_blank',
        only_mobile: false,
    },
    {
        id: 1,
        image: PhoneSvg,
        info: 'Phone:',
        details: '+971 50 861-1678',
        to: `tel:${MOBILE}`,
        target: '_self',
        only_mobile: true,
    },
    {
        id: 2,
        image: EmailSvg,
        info: 'Email:',
        details: `${EMAIL}`,
        to: `mailto:${EMAIL}`,
        target: '_blank',
        only_mobile: false,
    },
]

const SocialWrapperComponent = () => {
    return (
        <SocialWrapper>
            {contacts.map(({ id, image, info, details, to, target, only_mobile }) => (
                <ContactContainer
                    key={id}
                    cursor={only_mobile ? 'unset' : 'pointer'}
                    onClick={() => {
                        {
                            only_mobile && isMobile() && window.open(to, target)
                        }
                        {
                            !only_mobile && window.open(to, target)
                        }
                    }}
                >
                    <ContactIcon>
                        <ContactImage src={image} />
                    </ContactIcon>
                    <div>
                        <ContactText>{info}</ContactText>
                        <ContactText>{details}</ContactText>
                    </div>
                </ContactContainer>
            ))}
        </SocialWrapper>
    )
}

export default SocialWrapperComponent
