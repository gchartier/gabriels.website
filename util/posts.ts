import fs from "fs"
import path from "path"
import { bundleMDX } from "mdx-bundler"

const postsDirectory = path.join(process.cwd(), "posts")

export function getBlogPostDesktopIcons() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName) => {
        return {
            id: fileName.replace(/\.mdx$/, ""),
            title: fileName.replace(/\.mdx$/, ""),
            icon: "/win95Folder.png",
        }
    })
}

export async function getPostData(id: any) {
    const fullPath = path.join(postsDirectory, `${id}.mdx`)
    const source = fs.readFileSync(fullPath, "utf8")

    const { code, frontmatter } = await bundleMDX({ source })

    return {
        id,
        frontmatter,
        code,
    }
}
