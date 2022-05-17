import fs from "fs"
import matter from "gray-matter"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import dynamic from "next/dynamic"
import Head from "next/head"
import Link from "next/link"
import path from "path"
import { postFilePaths, POSTS_PATH } from "@util/mdxUtils"
import { SpicyLink } from "@components/blog/SpicyLink"
import { GifDivider } from "@components/blog/GifDivider"
import PostLayout from "@components/blog/PostLayout"
import { PostFrontmatter } from "types/Post"

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const defaultComponents = { SpicyLink, GifDivider }
const components = {
    ...defaultComponents,
    // a: SpicyLink,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    //SpicyLink: dynamic(() => import("@components/blog/SpicyLink")),
    //GifDivider: dynamic(() => import("@components/blog/GifDivider")),
    Head,
}

interface PostPageProps {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    frontMatter: PostFrontmatter
}

export default function PostPage({ source, frontMatter }: PostPageProps) {
    return (
        <PostLayout>
            <header>
                <nav>
                    <Link href="/">
                        <a>👈 Go back home</a>
                    </Link>
                </nav>
            </header>
            <div className="post-header">
                <h1>{frontMatter.title}</h1>
            </div>
            <main>
                <MDXRemote {...source} components={components} />
            </main>

            <style jsx>{`
                .post-header h1 {
                    margin-bottom: 0;
                }
                .post-header {
                    margin-bottom: 2rem;
                }
                .description {
                    opacity: 0.6;
                }
            `}</style>
        </PostLayout>
    )
}

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data as PostFrontmatter,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ""))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
