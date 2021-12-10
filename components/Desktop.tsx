import { useContext } from "react"
import { WindowsContext } from "@util/WindowsContext"
import { Window } from "@components/Window"
import { DesktopIconList } from "@components/DesktopIconList"
import { DesktopIcon } from "@components/DesktopIcon"
import { getPostData } from "@util/posts"
import { BlogPosts } from "@components/BlogPosts"

export function Desktop() {
    const { openWindows } = useContext(WindowsContext)

    return (
        <main style={{ padding: ".5rem", overflow: "hidden", minHeight: "100%" }}>
            <BlogPosts />
            {openWindows.map((window) => (
                <Window
                    key={window.id}
                    id={window.id}
                    title={window.title}
                    content={window.content}
                />
            ))}
        </main>
    )
}
