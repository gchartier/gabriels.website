import { DesktopIcon } from "@components/DesktopIcon"
import { DesktopIconType } from "types/DesktopIcon"

const desktopIcons: DesktopIconType[] = [
    {
        id: "1",
        title: "Blog Posts",
        icon: "/win95Folder.png",
        windowId: "1",
    },
]

export function DesktopIconList() {
    return (
        <>
            {/* {desktopIcons.map((dIcon) => (
                <DesktopIcon key={dIcon.id} desktopIcon={dIcon} />
            ))} */}
        </>
    )
}
