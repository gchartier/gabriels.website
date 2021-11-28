import { useState, useEffect } from "react"
import { Panel } from "react95"

export function Clock() {
    const [date, setDate] = useState(new Date())

    function refreshClock() {
        setDate(new Date())
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000)
        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    return (
        <Panel variant="well" style={{ padding: "3px" }}>
            {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Panel>
    )
}
