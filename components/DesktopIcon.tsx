import { DesktopIconType } from "types/DesktopIcon"
import styled from "styled-components"
import Image from "next/image"
import { useContext } from "react"
import { WindowsContext } from "@util/WindowsContext"
import { WindowType } from "types/Window"
import { Windows } from "@util/Windows"

const FolderIcon = styled.button`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: transparent;
    border: 2px dotted transparent;
    &:focus {
        border-color: gray;
    }
`

interface DesktopIconProps {
    desktopIcon: DesktopIconType
}

export function DesktopIcon({ desktopIcon }: DesktopIconProps) {
    const { openWindows, setOpenWindows } = useContext(WindowsContext)
    const windowIsAlreadyOpen = (window: WindowType) => window.id === desktopIcon.windowId
    const window = Windows.find((window) => window.id === desktopIcon.windowId)
    if (!window) throw new Error("Desktop window not found")

    return (
        <FolderIcon
            onDoubleClick={() =>
                openWindows.some(windowIsAlreadyOpen)
                    ? undefined
                    : setOpenWindows((openWindows) => [...openWindows, window])
            }
        >
            <Image src={desktopIcon.icon} alt="Folder" width={40} height={40} />
            <span style={{ padding: "0 3px 3px 3px" }}>{desktopIcon.title}</span>
        </FolderIcon>
    )
}
