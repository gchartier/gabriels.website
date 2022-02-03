import styled from "styled-components"
import NextLink from "next/link"

const StyledLink = styled.a`
    display: inline-block;
    color: red;
`

interface LinkProps {
    href: string
    text: string
    openNewTab?: boolean
}

export function SpicyLink({ href, text, openNewTab = false }: LinkProps) {
    return (
        <NextLink href={href} passHref>
            <StyledLink target={openNewTab ? "_blank" : "_self"} data-blobity-magnetic="true">
                {text}
            </StyledLink>
        </NextLink>
    )
}
