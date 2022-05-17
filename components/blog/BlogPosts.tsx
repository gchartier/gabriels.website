import { DesktopIcon } from "@components/desktop-links/DesktopIcon";
import { WindowsContext } from "@util/WindowsContext";
import { useContext } from "react";
import Link from "next/link";

export function BlogPosts() {
    const { blogPosts } = useContext(WindowsContext);

    return (
        <DesktopIcon
            id={`blogPosts`}
            title={`Blog Posts`}
            icon={`/win-95-folder.png`}
            content={
                <ul>
                    {blogPosts.map((post) => (
                        <li key={post.filePath}>
                            <Link
                                as={`/blog/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                                href={`/blog/posts/[slug]`}
                            >
                                <a>{post.data.title}</a>
                            </Link>
                            {/* <DesktopIcon
                                id={post.filePath}
                                icon={post.data.icon}
                                title={post.data.desktopName}
                                content={async () => {
                                    const blogPostData = await fetch(
                                        `/api/getBlogPost?id=${post.filePath}`
                                    )
                                    const res = await blogPostData.json()
                                    console.log({ res })
                                    return <span>{res.title}</span>
                                }}
                            /> */}
                        </li>
                    ))}
                </ul>
            }
        />
    );
}
