import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'

/* stylelint-disable */

export type TermProps = {
    index?: number
    margin?: string
    font_family?: string
    border_left?: boolean
}

type TermsType = { header?: string; text?: string; icon?: string }

export type TableType = {
    first_column?: TermsType[]
    second_column?: TermsType[]
    first?: TermsType
    other?: TermsType[]
    header?: string
    text?: string
    icon?: string
}

type DataType = {
    data?: TableType[]
    text?: string
}

const TableContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    max-width: 635px;
    width: 100%;

    @media ${device.bp1060} {
        max-width: 525px;
    }
    @media ${device.laptopM} {
        max-width: 405px;
    }
    @media ${device.laptop} {
        max-width: 410px;
    }
    @media ${device.tabletL} {
        max-width: 315px;
    }
    @media ${device.tablet} {
        max-width: 245px;
    }
    @media (max-width: 620px) {
        max-width: 245px;
        justify-content: center;
    }
    @media ${device.mobileL} {
        padding-right: 0px;
    }
`

const TermHeaderText = styled.h2<TermProps>`
    font-size: 3.8rem;
    line-height: 53px;
    color: var(--color-black-3);
    font-weight: bold;
    text-align: left;
    padding: 0 115px 30px 0;

    @media ${device.laptopM} {
        font-size: 3.4rem;
    }
    @media ${device.tabletL} {
        padding: 0 80px 0 0;
        font-size: 3rem;
    }
    @media (max-width: 620px) {
        padding: 0 20px 0 0;
    }
`

const TermImage = styled.img`
    width: 95px;
    height: 95px;
    filter: drop-shadow(0 0 13.5px rgba(0, 0, 0, 0.15));

    @media ${device.laptopM} {
        width: 80px;
        height: 80px;
    }

    @media ${device.tabletL} {
        width: 55px;
        height: 55px;
    }

    @media ${device.tabletS} {
        width: 40px;
        height: 40px;
    }
`

const TermText = styled.div<TermProps>`
    font-size: 1.8rem;
    line-height: 22px;
    color: var(--color-black-3);
    font-family: Maven Pro Bold;
    text-align: left;

    @media ${device.laptopM} {
        font-size: 1.25rem;
        line-height: 18px;
    }

    @media ${device.tabletL} {
        line-height: 14px;
    }
`

const Term = styled.div<TermProps>`
    max-width: 232px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    border-top: ${(props) =>
        props.index === 0
            ? 'unset'
            : props.index < 2
            ? 'unset'
            : '1px solid rgb(168, 168, 168, 0.5)'};
    border-bottom: ${(props) => (props.index > 5 ? 'unset' : '1px solid rgb(225, 225, 225, 0.5)')};
    border-left: ${(props) => (props.index % 2 ? '1px solid rgb(225, 225, 225, 0.5)' : 'unset')};

    @media ${device.laptopM} {
        max-width: 190px;
    }
    @media ${device.tabletL} {
        max-width: 120px;
        height: 90px;
    }
    @media ${device.tablet} {
        max-width: 120px;
    }
    @media ${device.tabletS} {
        height: 70px;
    }
`

const Table = ({ data, text }: DataType) => {
    return (
        <TableContainer>
            <TermHeaderText>{text}</TermHeaderText>
            {data.map((item, index) => (
                <Term key={index} index={index}>
                    <TermImage src={item.icon} alt={item.text} />
                    <TermText>{item.text}</TermText>
                </Term>
            ))}
        </TableContainer>
    )
}

export default Table
