import { ReactNode } from "react"

export interface Post {
    id: number
    title: string
    extension: string
    content: ReactNode
    icon: ReactNode
}
