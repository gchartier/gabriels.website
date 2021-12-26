import { Link } from "@components/Link"
import type { NextPage } from "next"
import Image from "next/image"
import styled from "styled-components"
import useBlobity from "blobity/lib/useBlobity"
import Script from "next/script"
import { useLayoutEffect, useRef } from "react"

const BackgroundImage = styled.div`
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
`

const MainContent = styled.main`
    background-color: yellow;
    max-width: max-content;
    padding: 1rem;
    border: 0.5rem inset fuchsia;

    span {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        a {
            margin-right: 0.5rem;
        }

        img {
            padding-top: 2rem;
        }
    }
`

const StatusUpdates = styled.div`
    div {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        & * {
            display: inline;
            margin-right: 0.5rem;
        }
    }
`

const EmailMe = styled.a`
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
`

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        position: absolute;
        bottom: 0;
    }
`

const Home: NextPage = () => {
    useBlobity({
        invert: true,
        mode: "bouncy",
        focusableElementsOffsetX: 5,
        focusableElementsOffsetY: 5,
    })

    const titleRef = useRef<HTMLHeadingElement>(null)

    // useLayoutEffect(() => {
    //     // BLOTTER - Example 1
    //     var text = new Blotter.Text("observation", {
    //         family: "'EB Garamond', serif",
    //         size: 27,
    //         fill: "#202020",
    //     })

    //     var material = new Blotter.Material()

    //     var blotter = new Blotter(material, {
    //         texts: text,
    //     })

    //     var scope = blotter.forText(text)

    //     scope.appendTo(titleRef)
    // }, [titleRef])

    return (
        <>
            <Script src="/blotter.min.js" />
            <BackgroundImage>
                <Image
                    src="/me00000049.gif"
                    alt="me"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </BackgroundImage>

            <Wrapper>
                <MainContent>
                    <h1 ref={titleRef}>Welcome to Gabriel&apos;s Website</h1>
                    <p>
                        The skeleton of my forthcoming blog can be found{" "}
                        <span>
                            <Link href="/blog" text="here" />
                            <Image src="/enter.gif" alt="Enter my blog" width={40} height={40} />
                        </span>
                    </p>

                    <StatusUpdates>
                        <div>
                            <h2>What&apos;s up:</h2>
                            <Image src="/thought.gif" alt="Thought bubble" width={20} height={20} />
                        </div>

                        <ul>
                            <li>Reorganized my home office today</li>
                            <li>
                                <Link
                                    href="https://www.gaia.com/series/rewired"
                                    text="Rewired"
                                    openNewTab={true}
                                />{" "}
                                on{" "}
                                <Link
                                    href="https://www.gaia.com"
                                    text="Gaia.com"
                                    openNewTab={true}
                                />{" "}
                                for some brain science
                            </li>
                            <li>Coconut water</li>
                            <li>Enjoying the rain</li>
                        </ul>
                    </StatusUpdates>
                </MainContent>

                <EmailMe href="mailto:hello@gabrielchartier.dev">
                    <Image src="/email.gif" alt="Email me" width={50} height={50} />
                </EmailMe>

                <Footer>
                    <div>
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
                    </div>
                </Footer>
            </Wrapper>
        </>
    )
}

export default Home
