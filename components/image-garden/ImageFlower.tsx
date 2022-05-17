import { ImageFlowerStem } from "@components/image-garden/ImageFlowerStem";
import Image from "next/image";
import styled from "styled-components";

interface Props {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export function ImageFlower({ src, alt, width = 30, height = 30 }: Props) {
    return (
        <ImageFlowerWrapper>
            <Image src={src} alt={alt} width={width} height={height} />
            <ImageFlowerStem />
        </ImageFlowerWrapper>
    );
}

const ImageFlowerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
`;
