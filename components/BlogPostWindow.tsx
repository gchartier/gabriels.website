import { Post } from "types/Post"
import { Window } from "@/components/Window"

interface BlogPostWindowProps {
    post: Post
    onClose: (id: number) => void
}

export function BlogPostWindow({ post, onClose }: BlogPostWindowProps) {
    return (
        <Window
            title={`${post.title}${post.extension}`}
            content={post.content}
            onClose={() => onClose(post.id)}
        />
    )
}
