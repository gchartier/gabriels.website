import Image from "next/image";

export function UnderConstructionFooter() {
    return (
        <footer className="flex justify-center items-center">
            <div className="absolute bottom-0">
                <Image
                    src="/construction-spinner.gif"
                    alt="Spinning construction worker sign"
                    width={75}
                    height={75}
                />
                <Image
                    src="/under-construction.gif"
                    alt="Under construction banner"
                    width={700}
                    height={40}
                />
                <Image
                    src="/construction-spinner.gif"
                    alt="Spinning construction worker sign"
                    width={75}
                    height={75}
                />
            </div>
        </footer>
    );
}
