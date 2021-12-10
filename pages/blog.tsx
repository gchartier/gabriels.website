import type { InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import React, { useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { styleReset } from "react95"
import millenium from "react95/dist/themes/millenium"
import { StartMenuBar } from "@components/StartMenuBar"
import { Desktop } from "@components/Desktop"
import { WindowType } from "types/Window"
import { WindowsContext } from "@util/WindowsContext"
import { getBlogPostDesktopIcons } from "@util/posts"
const GlobalStyles = createGlobalStyle`${styleReset}`

//import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2"
//import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2"

// @font-face {
//   font-family: 'ms_sans_serif';
//   src: url('${ms_sans_serif}') format('woff2');
//   font-weight: 400;
//   font-style: normal
// }
// @font-face {
//   font-family: 'ms_sans_serif';
//   src: url('${ms_sans_serif_bold}') format('woff2');
//   font-weight: bold;
//   font-style: normal
// }
// body {
//   font-family: 'ms_sans_serif';
// }

export async function getStaticProps() {
    const posts = getBlogPostDesktopIcons()
    return {
        props: {
            posts,
        },
    }
}

export default function Blog(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const [openWindows, setOpenWindows] = useState<WindowType[]>([])

    return (
        <WindowsContext.Provider value={{ openWindows, setOpenWindows, blogPosts: props.posts }}>
            <GlobalStyles />
            <ThemeProvider theme={millenium}>
                <div style={{ width: "100%", height: "100%", backgroundColor: "#008080" }}>
                    <Head>
                        <title>Gabriel&apos;s Blog</title>
                        <meta name="description" content="Here I blog about the web" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <Desktop />
                    <StartMenuBar />
                </div>
            </ThemeProvider>
        </WindowsContext.Provider>
    )
}
