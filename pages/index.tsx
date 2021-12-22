import { Link } from "@components/Link"
import type { NextPage } from "next"
import Image from "next/image"
import styled from "styled-components"

const LinkWithImage = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    a {
        margin-right: 0.5rem;
    }

    img {
        padding-top: 2rem;
    }
`
interface SideBySideProps {
    spaceBetween?: string
}

const SideBySide = styled.div<SideBySideProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    & * {
        display: inline;
        margin-right: ${(props) => props.spaceBetween || "0.5rem"};
    }
`

const Wrapper = styled.main`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
`

const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CenterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ColoredBackdrop = styled.div`
    background-color: yellow;
    max-width: max-content;
    padding: 1rem;
    border: 0.5rem inset fuchsia;
`

const TopRightAction = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
`

const Home: NextPage = () => {
    return (
        <>
            <Image src="/me00000049.gif" alt="me" layout="fill" objectFit="cover" quality={100} />
            <Wrapper>
                <ColoredBackdrop>
                    <h1>Welcome to Gabriel&apos;s Website</h1>
                    <p>
                        The skeleton of my forthcoming blog can be found{" "}
                        <LinkWithImage>
                            <Link href="/blog" text="here" />
                            <Image src="/enter.gif" alt="Enter my blog" width={40} height={40} />
                        </LinkWithImage>
                    </p>
                    <SideBySide>
                        <h2>What&apos;s up:</h2>
                        <Image src="/thought.gif" alt="Thought bubble" width={20} height={20} />
                    </SideBySide>

                    <ul>
                        <li>Reorganized my home office today</li>
                        <li>
                            <Link href="https://www.gaia.com/series/rewired" text="Rewired" /> on{" "}
                            <Link href="https://www.gaia.com" text="Gaia.com" /> brain fringe
                            science
                        </li>
                        <li>Coconut water</li>
                        <li>Enjoying the rain</li>
                    </ul>
                </ColoredBackdrop>
                <TopRightAction>
                    <a href="mailto:hello@gabrielchartier.dev">
                        <Image src="/email.gif" alt="Email me" width={50} height={50} />
                    </a>
                </TopRightAction>
                <CenterContent>
                    <Footer>
                        <Image
                            src="/construction-spinner.gif"
                            alt="Spinning construction worker sign"
                            width={75}
                            height={75}
                        />
                        <Image
                            src="/under-construction.gif"
                            alt="Under construction banner"
                            width={700}
                            height={40}
                        />
                        <Image
                            src="/construction-spinner.gif"
                            alt="Spinning construction worker sign"
                            width={75}
                            height={75}
                        />
                    </Footer>
                </CenterContent>
            </Wrapper>
        </>
    )
}

export default Home
