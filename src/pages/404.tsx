import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from 'components/layout/layout'
import { ContainerWrapper } from 'components/containers/common/style'

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-white);
    min-height: 700px;
`
const DescriptionContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const PageNotFoundContainerInfo = styled.div`
    margin: 16px;

    * {
        margin: 1.6rem 0;
    }
`
const PageNotFoundContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`
const ButtonWrapper = styled.div`
    margin-top: 3rem;
    text-align: center;
`
const LinkButton = styled(Link)`
    font-size: 1.6rem;
    text-align: center;
    text-decoration: none;
    width: fit-content;
    padding: 8px;
    background-color: var(--color-sand-4);
    border-radius: 8px;
    color: var(--color-white);
`

const Header = styled.div`
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 4rem;
    text-align: center;
`

const Text = styled.div`
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-align: center;
`

const PageNotFound = () => {
    return (
        <Layout>
            <DescriptionContainer>
                <DescriptionContainerWrapper>
                    <PageNotFoundContainer>
                        <StaticImage
                            key={1}
                            src="../images/common/sinbad-thinking.png"
                            alt="Page not found"
                            loading="eager"
                            placeholder="none"
                        />
                        <PageNotFoundContainerInfo>
                            <Header>We couldn’t find that page</Header>
                            <Text>
                                It may not be available in your country, or maybe a broken link has
                                brought you here.
                            </Text>
                            <ButtonWrapper>
                                <LinkButton to="/">Visit our homepage</LinkButton>
                            </ButtonWrapper>
                        </PageNotFoundContainerInfo>
                    </PageNotFoundContainer>
                </DescriptionContainerWrapper>
            </DescriptionContainer>
        </Layout>
    )
}

export default PageNotFound
