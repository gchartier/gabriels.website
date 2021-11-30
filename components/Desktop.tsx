import { useContext } from "react"
import { WindowsContext } from "@util/WindowsContext"
import { Window } from "@components/Window"
import { DesktopIconList } from "@components/DesktopIconList"

export function Desktop() {
    const { openWindows } = useContext(WindowsContext)

    return (
        <main style={{ padding: ".5rem" }}>
            <DesktopIconList />
            {openWindows.map((window) => (
                <Window
                    key={window.id}
                    id={window.id}
                    title={window.title}
                    content={window.content}
                />
            ))}
        </main>
    )
}
