import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function ContentCell({ children }: Props) {
    return <li className="border-2 border-red-500">{children}</li>;
}
