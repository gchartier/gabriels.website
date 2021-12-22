import styled from "styled-components"
import NextLink from "next/link"

const StyledLink = styled.a``

interface LinkProps {
    href: string
    text: string
}

export function Link({ href, text }: LinkProps) {
    return (
        <NextLink href={href} passHref>
            <StyledLink>{text}</StyledLink>
        </NextLink>
    )
}
