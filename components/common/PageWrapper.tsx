import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function PageWrapper({ children }: Props) {
    return <div className="h-full overflow-hidden">{children}</div>;
}
