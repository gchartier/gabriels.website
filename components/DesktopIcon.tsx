import { DesktopIconType } from "types/DesktopIcon"
import styled from "styled-components"
import Image from "next/image"
import React, {
    ReactChild,
    ReactElement,
    ReactFragment,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import { WindowsContext } from "@util/WindowsContext"
import { WindowType } from "types/Window"

const StyledDesktopIcon = styled.button`
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
    id: string
    title: string
    icon: string
    content: ReactElement | (() => Promise<ReactNode>)
}

function isWindowAlreadyOpened(id: string, openWindows: WindowType[]) {
    return openWindows.some((window: WindowType) => window.id === id)
}

export function DesktopIcon({ id, title, icon, content }: DesktopIconProps) {
    const { openWindows, setOpenWindows } = useContext(WindowsContext)
    const [windowContent, setWindowContent] = useState(
        React.isValidElement(content) ? content : undefined
    )

    useEffect(() => {
        async function loadWindowContent() {
            if (isWindowAlreadyOpened(id, openWindows) === false && windowContent === undefined) {
                // @ts-ignore
                const renderedContent = await content()
                setWindowContent(renderedContent)
            }
        }
        loadWindowContent()
    }, [openWindows, id, content, windowContent])

    return (
        <StyledDesktopIcon
            onDoubleClick={() =>
                isWindowAlreadyOpened(id, openWindows)
                    ? undefined
                    : setOpenWindows((openWindows) => [
                          ...openWindows,
                          {
                              id,
                              title,
                              content: windowContent,
                          },
                      ])
            }
        >
            <Image src={icon} alt="Folder" width={40} height={40} />
            <span style={{ padding: "0 3px 3px 3px" }}>{title}</span>
        </StyledDesktopIcon>
    )
}
