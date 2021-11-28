import { ReactNode, useState } from "react"
import styled from "styled-components"
import Draggable from "react-draggable"
import { Window as R95Window, WindowHeader, Button, WindowContent } from "react95"

const WindowWrapper = styled.div`
    .window-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .window {
        width: 400px;
        min-height: 200px;
    }
    .window:nth-child(2) {
        margin: 2rem;
    }
    .footer {
        display: block;
        margin: 0.25rem;
        height: 31px;
        line-height: 31px;
        padding-left: 0.25rem;
    }
`

export interface WindowProps {
    title: string
    content: ReactNode
    onClose: () => void
}

export function Window({ title, content, onClose }: WindowProps) {
    const [activeDrags, setActiveDrags] = useState(0)
    const dragHandlers = { onStart, onStop }

    function onStart() {
        setActiveDrags((current) => ++current)
    }

    function onStop() {
        setActiveDrags((current) => --current)
    }

    return (
        <Draggable handle=".window-header" {...dragHandlers}>
            <WindowWrapper>
                <R95Window className="window">
                    <WindowHeader className="window-header">
                        <span>{title}</span>
                        <Button onClick={() => onClose()}>
                            <span>x</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent>{content}</WindowContent>
                </R95Window>
            </WindowWrapper>
        </Draggable>
    )
}
