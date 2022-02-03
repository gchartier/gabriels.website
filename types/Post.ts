export interface Post {
    content: string
    filePath: string
    data: PostFrontmatter
}

export interface PostFrontmatter {
    title: string
    date: string
    icon: string
    desktopName: string
}

//export function assert
