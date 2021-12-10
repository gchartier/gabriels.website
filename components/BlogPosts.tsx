import { DesktopIcon } from "@components/DesktopIcon"
import { WindowsContext } from "@util/WindowsContext"
import { useContext } from "react"

export function BlogPosts() {
    const { blogPosts } = useContext(WindowsContext)

    return (
        <DesktopIcon
            id={`blogPosts`}
            title={`Blog Posts`}
            icon={`/win95Folder.png`}
            content={
                <ul>
                    {blogPosts.map((post) => (
                        <li key={post.id}>
                            <DesktopIcon
                                id={post.id}
                                icon={post.icon}
                                title={post.title}
                                content={async () => {
                                    const blogPostData = await fetch(
                                        `/api/getBlogPost?id=${post.id}`
                                    )
                                    const res = await blogPostData.json()
                                    console.log({ res })
                                    return <span>{res.title}</span>
                                }}
                            />
                        </li>
                    ))}
                </ul>
            }
        />
    )
}
