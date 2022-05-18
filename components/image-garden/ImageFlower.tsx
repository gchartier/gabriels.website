import Image from "next/image";
import styled from "styled-components";
import { ImageFlowerStem as Stem } from "@components/image-garden/ImageFlowerStem";

interface Props {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    xPosition?: string;
    yPosition?: string;
}

export function ImageFlower({
    src,
    alt,
    width = 30,
    height = 30,
    xPosition = "0px",
    yPosition = "0px",
}: Props) {
    return (
        <ImageFlowerWrapper>
            <Flower yPosition={yPosition} xPosition={xPosition}>
                <Image src={src} alt={alt} width={width} height={height} />
            </Flower>
            <Stem />
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

interface FlowerProps {
    xPosition: string;
    yPosition: string;
}

const Flower = styled.div<FlowerProps>`
    margin-bottom: ${(props) => props.yPosition};
    margin-left: ${(props) => props.xPosition};
`;
