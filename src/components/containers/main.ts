import styled from 'styled-components'
import SeeOurPositionsImage from 'images/common/see-our-positions-image.png'
import ContactUs from 'images/common/contact-us-button.png'
import device from 'themes/device'

type HeaderProps = {
    font_size?: string
    font_weight?: string
    color?: string
    text_align?: string
    padding?: string
    line_height?: string
    font_family?: string
    border_bottom?: string
    text_transform?: string
}
type TextProps = {
    font_size?: string
    width?: string
    text_align?: string
    padding?: string
    line_height?: string
    font_family?: string
    font_weight?: string
    text_transform?: string
}
type ImageProps = {
    width?: string
    height?: string
    padding_bottom?: string
    mobile_pb?: string
    max_height?: string
}

export const ContactUsButton = styled.div`
    max-width: 120px;
    max-height: 35px;
    background-image: url(${ContactUs});
    background-repeat: no-repeat;
    background-size: 120px 35px;
`

export const SeeOurPositions = styled.div`
    max-width: 150px;
    max-height: 25px;
    background-image: url(${SeeOurPositionsImage});
    background-repeat: no-repeat;
    background-size: 150px 25px;
`

export const ImageContainer = styled.div<ImageProps>`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    padding-bottom: ${(props) => props.padding_bottom || '0px'};
    max-height: ${(props) => props.max_height || '512px'};
`

export const JoinUsImageContainer = styled(ImageContainer)<ImageProps>`
    object-fit: contain;
    max-width: ${(props) => props.width || '500px'};
    padding-bottom: ${(props) => props.padding_bottom || '100px;'};

    @media ${device.tabletS} {
        max-width: 350px;
        padding-bottom: ${(props) => props.mobile_pb || '40px;'};
    }
`

export const Header = styled.div<HeaderProps>`
    font-size: ${(props) => props.font_size || '2.4rem'};
    line-height: ${(props) => props.line_height || '18px'};
    font-weight: ${(props) => props.font_weight || 'bold'};
    text-align: ${(props) => props.text_align || 'left'};
    padding: ${(props) => props.padding || '10px 40px 10px 0'};
    color: ${(props) => props.color || 'black'};
    font-family: ${(props) => props.font_family || 'unset'};
    border-bottom: ${(props) => props.border_bottom || ''};
    text-transform: ${(props) => props.text_transform || ''};
`
export const Text = styled.div<TextProps>`
    font-size: ${(props) => props.font_size || '1.6rem'};
    line-height: ${(props) => props.line_height || '18px'};
    width: ${(props) => props.width || '300px'};
    text-align: ${(props) => props.text_align || 'left'};
    padding: ${(props) => props.padding || '15px 0'};
    color: ${(props) => props.color || 'black'};
    font-weight: ${(props) => props.font_weight || 'normal'};
    text-transform: ${(props) => props.text_transform || ''};
`
