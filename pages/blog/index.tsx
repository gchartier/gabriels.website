import type { InferGetStaticPropsType } from "next"
import Head from "next/head"
import fs from "fs"
import path from "path"
import React, { useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { styleReset } from "react95"
import millenium from "react95/dist/themes/millenium"
import { StartMenuBar } from "@components/StartMenuBar"
import { Desktop } from "@components/Desktop"
import { WindowType } from "types/Window"
import { WindowsContext } from "@util/WindowsContext"
import { postFilePaths, POSTS_PATH } from "@util/mdxUtils"
import matter from "gray-matter"
import { PostFrontmatter } from "types/Post"
const GlobalStyles = createGlobalStyle`${styleReset}`

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

export function getStaticProps() {
    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
        const { content, data } = matter(source)

        return {
            content,
            data: data as PostFrontmatter,
            filePath,
        }
    })

    return { props: { posts } }
}
