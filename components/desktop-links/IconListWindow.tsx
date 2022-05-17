import { Window } from "@components/desktop-links/Window";
import { ReactNode } from "react";

interface IconListItem {
    id: number;
    icon: ReactNode;
    title: string;
}

interface IconListWindowProps {
    id: string;
    title: string;
    items: IconListItem[];
    onClose: () => void;
}

export function IconListWindow({ title, items, id }: IconListWindowProps) {
    return (
        <Window
            id={id}
            title={title}
            content={
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            }
        />
    );
}
