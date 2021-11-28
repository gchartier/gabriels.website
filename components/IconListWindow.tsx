import { Window } from "@/components/Window"
import { ReactNode } from "react"

interface IconListItem {
    id: number
    icon: ReactNode
    title: string
}

interface IconListWindowProps {
    title: string
    items: IconListItem[]
    onClose: () => void
}

export function IconListWindow({ title, items, onClose }: IconListWindowProps) {
    return (
        <Window
            title={title}
            content={
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            }
            onClose={onClose}
        />
    )
}
