import { Link, navigate } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import { ContainerWrapper } from 'components/containers'
import { Button } from 'components/elements'
import device from 'themes/device'
import { contactUsAction } from 'common/utility'
import { HeaderTitle } from 'components/containers/common/style'

/* stylelint-disable */

type MenuProps = {
    open?: boolean
    setOpen?: (open: boolean) => void
}

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: var(--color-sand-1);
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 999;

    @media ${device.tabletL} {
        padding: unset;
    }
    @media ${device.mobileL} {
        position: static;
    }
`
const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-sand-1);
    border-radius: 5px;
    width: 100%;

    @media ${device.tabletL} {
        justify-content: flex-end;
    }
`

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
`

const StyledHeaderLink = styled(Link)`
    text-decoration: none;
    font-size: 1.6rem;
    line-height: 30px;
    text-transform: uppercase;
    color: var(--color-black-2);
    font-weight: bold;
    text-align: left;
    padding-right: 30px;

    &:hover {
        color: var(--color-sand-4);
    }
`

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    color: white;

    @media ${device.tabletL} {
        a,
        button {
            display: none;
        }
    }
`
const StyledBurger = styled.button<MenuProps>`
    position: absolute;
    top: 15%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    div {
        width: 2.5rem;
        height: 0.25rem;
        background: ${({ open }) => (open ? '#0D0C1D' : 'var(--color-sand-4)')};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? 'rotate(48deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-42deg)' : 'rotate(0)')};
        }
    }

    @media ${`(max-width: 425px)`} {
        top: 2.2%;
    }
`
const StyledMenu = styled.nav<MenuProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #effffa;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    padding-top: 11rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 3;

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0d0c1d;
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 576px) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: #343078;
        }
    }
`

const BurgerMenu = styled.div`
    @media ${`(min-width: 992px)`} {
        display: none;
    }
`

const Burger = ({ open, setOpen }: MenuProps) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) return
            handler(event)
        }
        document.addEventListener('mousedown', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
        }
    }, [ref, handler])
}

const Header = () => {
    const [open, setOpen] = React.useState(false)
    const node = React.useRef()
    useOnClickOutside(node, () => setOpen(false))

    const HomeRedirect = () => {
        navigate('/')
    }
    const active_link = { color: 'var(--color-sand-4)' }

    return (
        <Container>
            <BurgerMenu ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <StyledMenu open={open}>
                    <StyledHeaderLink to="/" activeStyle={active_link} partiallyActive={false}>
                        Home
                    </StyledHeaderLink>
                    <StyledHeaderLink
                        to="/careers"
                        activeStyle={active_link}
                        partiallyActive={true}
                    >
                        Careers
                    </StyledHeaderLink>
                    <StyledHeaderLink
                        to="/open-positions"
                        activeStyle={active_link}
                        partiallyActive={true}
                    >
                        Open Positions
                    </StyledHeaderLink>
                </StyledMenu>
            </BurgerMenu>
            <ContainerWrapper>
                <HeaderContainer>
                    <StyledHeader onClick={() => HomeRedirect()}>
                        <HeaderTitle font_family="Maven Pro Bold" color="var(--color-sand-4)">
                            Sinbad
                        </HeaderTitle>
                        <HeaderTitle padding_left="5px" color="var(--color-sand-4)">
                            Software
                        </HeaderTitle>
                    </StyledHeader>
                    <NavWrapper>
                        <StyledHeaderLink to="/" activeStyle={active_link} partiallyActive={false}>
                            Home
                        </StyledHeaderLink>
                        <StyledHeaderLink
                            to="/careers"
                            activeStyle={active_link}
                            partiallyActive={true}
                        >
                            Careers
                        </StyledHeaderLink>
                        <StyledHeaderLink
                            to="/open-positions"
                            activeStyle={active_link}
                            partiallyActive={true}
                        >
                            Open Positions
                        </StyledHeaderLink>
                        <Button label="Contact Us" onClick={contactUsAction} />
                    </NavWrapper>
                </HeaderContainer>
            </ContainerWrapper>
        </Container>
    )
}

export default Header
