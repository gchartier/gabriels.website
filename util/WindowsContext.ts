import { createContext, Dispatch, SetStateAction } from "react"
import { Post } from "types/Post"
import { WindowType } from "types/Window"

export const WindowsContext = createContext<{
    openWindows: WindowType[]
    setOpenWindows: Dispatch<SetStateAction<WindowType[]>>
    blogPosts: Post[]
}>({ openWindows: [], setOpenWindows: () => {}, blogPosts: [] })
