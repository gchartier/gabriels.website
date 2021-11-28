import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { List, ListItem, Divider, Button, Panel, AppBar, Toolbar } from "react95"
import { Clock } from "./Clock"

interface StartMenuBarProps {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export function StartMenuBar({ isMenuOpen, setIsMenuOpen }: StartMenuBarProps) {
    return (
        <AppBar style={{ top: "auto", bottom: "0" }}>
            <Toolbar style={{ justifyContent: "space-between" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                    <Button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        active={isMenuOpen}
                        style={{ fontWeight: "bold" }}
                    >
                        <Image src="/g.gif" alt="G" width={25} height={25} />
                        <span style={{ marginLeft: "3px" }}>Start</span>
                    </Button>
                    {isMenuOpen && (
                        <List
                            style={{
                                position: "absolute",
                                left: "0",
                                bottom: "100%",
                            }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <ListItem>
                                <span role="img" aria-label="👨‍💻">
                                    👨‍💻
                                </span>
                                Profile
                            </ListItem>
                            <ListItem>
                                <span role="img" aria-label="📁">
                                    📁
                                </span>
                                My account
                            </ListItem>
                            <Divider />
                            <ListItem disabled>
                                <span role="img" aria-label="🔙">
                                    🔙
                                </span>
                                Logout
                            </ListItem>
                        </List>
                    )}
                </div>
                <Clock />
            </Toolbar>
        </AppBar>
    )
}
