import { Post } from "types/Post"

const desktopIcons: Post[] = [
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

export function DesktopIconList() {
    return <></>
}
