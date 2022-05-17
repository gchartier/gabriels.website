import { useContext } from "react";
import { WindowsContext } from "@util/WindowsContext";
import { Window } from "@components/desktop-links/Window";
import { BlogPosts } from "@components/blog/BlogPosts";

export function Desktop() {
    const { openWindows } = useContext(WindowsContext);

    return (
        <main style={{ padding: ".5rem", overflow: "hidden", minHeight: "100%" }}>
            <BlogPosts />
            {openWindows.map((window) => (
                <Window
                    key={window.id}
                    id={window.id}
                    title={window.title}
                    content={window.content}
                />
            ))}
        </main>
    );
}
