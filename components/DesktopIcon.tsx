import { DesktopIconType } from "types/DesktopIcon"
import styled from "styled-components"
import Image from "next/image"

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
    onDoubleClick: () => void
}

export function DesktopIcon({ desktopIcon, onDoubleClick }: DesktopIconProps) {
    return (
        <FolderIcon onDoubleClick={() => onDoubleClick()}>
            <Image src="/win95Folder.png" alt="Folder" width={40} height={40} />
            <span style={{ padding: "0 3px 3px 3px" }}>Blog Posts</span>
        </FolderIcon>
    )
}
