import Head from "next/head";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string;
    description?: string;
}

export function PageWrapper({ children, title, description }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="h-full overflow-hidden">{children}</div>
        </>
    );
}
