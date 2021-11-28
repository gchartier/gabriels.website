import Image from "next/image"
import { useState } from "react"
import { Post } from "types/Post"
import styled from "styled-components"
import { BlogPostWindow } from "@/components/BlogPostWindow"

const posts: Post[] = [
    {
        id: 1,
        title: "WhyEmailIsAwesome",
        extension: ".bin",
        content: (
            <p>
                When you set &quot;resizable&quot; prop, there will be drag handle in the bottom
                right corner (but resizing itself must be handled by you tho!)
            </p>
        ),
        icon: <></>,
    },
]

const folderWindows: Post[] = [
    {
        id: 1,
        title: "WhyEmailIsAwesome",
        extension: ".bin",
        content: (
            <p>
                When you set &quot;resizable&quot; prop, there will be drag handle in the bottom
                right corner (but resizing itself must be handled by you tho!)
            </p>
        ),
        icon: <></>,
    },
]

export function Desktop() {
    const [openPostWindows, setOpenPostWindows] = useState<Post[]>([])

    return (
        <main style={{ padding: ".5rem" }}>
            {openPostWindows.map((post) => (
                <BlogPostWindow
                    key={post.id}
                    post={post}
                    onClose={(id) => {
                        setOpenPostWindows((windows) =>
                            windows.filter((window) => window.id !== id)
                        )
                    }}
                />
            ))}
        </main>
    )
}
