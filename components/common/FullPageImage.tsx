import Image from "next/image";
import styled from "styled-components";

interface Props {
    src: string;
    alt: string;
}

export function FullPageImage({ src, alt }: Props) {
    return (
        <FullPageImageWrapper>
            <Image src={src} alt={alt} layout="fill" />
        </FullPageImageWrapper>
    );
}

const FullPageImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;
