import React from 'react'
import styled from 'styled-components'
import { RoundRight } from 'images/svg'
import device from 'themes/device'

/* stylelint-disable */

type ButtonProps = {
    has_icon?: boolean
    label: string
    onClick: () => void
}

const ButtonItem = styled.button`
    display: flex;
    width: fit-content;
    align-items: center;
    height: 42px;
    background: var(--color-sand-4);
    border-radius: 30px 0px 0px 30px;
    transition: 0.2s ease-in background;
    padding: 8px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;

    &:hover {
        background: var(--color-sand-5);
    }

    img {
        height: 32px;
    }

    span {
        font-size: 1.6rem;
        color: var(--color-white);
        text-transform: uppercase;
        font-weight: bold;
        margin: 0 10px 0 10px;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    @media ${device.mobileL} {
        justify-content: center;
    }
`

const Button = ({ has_icon = true, label, onClick }: ButtonProps) => {
    return (
        <ButtonContainer>
            <ButtonItem onClick={onClick}>
                {has_icon && <img alt={label} src={RoundRight} />}
                <span>{label}</span>
            </ButtonItem>
        </ButtonContainer>
    )
}

export default Button
