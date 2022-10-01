import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import { postFilePaths, POSTS_PATH } from "@util/mdxUtils";
import { SpicyLink } from "@components/blog/SpicyLink";
import { GifDivider } from "@components/blog/GifDivider";
import PostLayout from "@components/blog/PostLayout";
import { PostFrontmatter } from "types/Post";

interface Props {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    frontMatter: PostFrontmatter;
}

export default function PostPage({ source, frontMatter }: Props) {
    return (
        <PostLayout>
            <div className="mb-8">
                <h1 className="mb-0 text-red-500">{frontMatter.title}</h1>
            </div>
            <main>
                <MDXRemote {...source} components={components} />
            </main>
        </PostLayout>
    );
}

const defaultComponents = { SpicyLink, GifDivider };
const components = {
    ...defaultComponents,
    Head,
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
    const source = fs.readFileSync(postFilePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data as PostFrontmatter,
        },
    };
};

export const getStaticPaths = async () => {
    const removeFileExtensionFromPath = (path: string) => path.replace(/\.mdx?$/, "");
    const buildSlugPath = (slug: string) => ({ params: { slug } });
    const paths = postFilePaths.map(removeFileExtensionFromPath).map(buildSlugPath);

    return {
        paths,
        fallback: false,
    };
};
