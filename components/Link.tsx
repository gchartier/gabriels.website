import NextLink from "next/link";
import { ReactNode } from "react";

export interface LinkProps {
    href: string;
    children: ReactNode;
    openNewTab?: boolean;
    className?: string;
}

export function Link({ href, children, openNewTab = false, className }: LinkProps) {
    return (
        <NextLink href={href} passHref>
            <a
                className={className}
                target={openNewTab ? "_blank" : "_self"}
                data-blobity-magnetic="true"
            >
                {children}
            </a>
        </NextLink>
    );
}

interface TextLinkProps extends LinkProps {
    children: string;
}

export function TextLink({ className, children, ...props }: TextLinkProps) {
    return (
        <Link className={`inline-block ${className}`} {...props}>
            {children}
        </Link>
    );
}
