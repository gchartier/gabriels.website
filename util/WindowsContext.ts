import { createContext, Dispatch, SetStateAction } from "react"
import { DesktopIconType } from "types/DesktopIcon"
import { WindowType } from "types/Window"

export const WindowsContext = createContext<{
    openWindows: WindowType[]
    setOpenWindows: Dispatch<SetStateAction<WindowType[]>>
    blogPosts: DesktopIconType[]
}>({ openWindows: [], setOpenWindows: () => {}, blogPosts: [] })
