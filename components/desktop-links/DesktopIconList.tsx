import { DesktopIcon } from "@components/desktop-links/DesktopIcon";
import { DesktopIconType } from "types/DesktopIcon";

const desktopIcons: DesktopIconType[] = [
    {
        id: "1",
        title: "Blog Posts",
        icon: "/win-95-folder.png",
    },
];

export function DesktopIconList() {
    return (
        <>
            {/* {desktopIcons.map((dIcon) => (
                <DesktopIcon key={dIcon.id} desktopIcon={dIcon} />
            ))} */}
        </>
    );
}
