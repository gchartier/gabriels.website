import Image from "next/image";

export function EmailPrompt() {
    return (
        <a className="absolute top-0 right-0 p-2" href="mailto:hello@gabrielchartier.dev">
            <Image src="/email.gif" alt="Email me" width={50} height={50} />
        </a>
    );
}
