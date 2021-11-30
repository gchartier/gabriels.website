import { createContext, Dispatch, SetStateAction } from "react"
import { WindowType } from "types/Window"

export const WindowsContext = createContext<{
    openWindows: WindowType[]
    setOpenWindows: Dispatch<SetStateAction<WindowType[]>>
}>({ openWindows: [], setOpenWindows: () => {} })
