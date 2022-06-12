import Image from "next/image";
import styled from "styled-components";
import { ImageFlowerStem as Stem } from "@components/image-garden/ImageFlowerStem";

interface Props {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    imageXPosition?: number;
    imageYPosition?: number;
    flowerTop?: number;
    flowerRight?: number;
    flowerBottom?: number;
    flowerLeft?: number;
}

export function ImageFlower({
    src,
    alt,
    width = 30,
    height = 30,
    imageXPosition = 0,
    imageYPosition = 0,
    flowerTop,
    flowerRight,
    flowerBottom,
    flowerLeft,
}: Props) {
    return (
        <FlowerWrapper top={flowerTop} right={flowerRight} bottom={flowerBottom} left={flowerLeft}>
            <Flower
                yPosition={`${imageYPosition.toString()}px`}
                xPosition={`${imageXPosition.toString()}px`}
            >
                <Image src={src} alt={alt} width={width} height={height} />
            </Flower>
            <Stem />
        </FlowerWrapper>
    );
}
interface WrapperProps {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

const FlowerWrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${({ top }) => (top !== undefined ? `${top.toString()}px` : "revert")};
    right: ${({ right }) => (right !== undefined ? `${right.toString()}px` : "revert")};
    bottom: ${({ bottom }) => (bottom !== undefined ? `${bottom.toString()}px` : "revert")};
    left: ${({ left }) => (left !== undefined ? `${left.toString()}px` : "revert")};
`;

interface FlowerProps {
    xPosition: string;
    yPosition: string;
}

const Flower = styled.div<FlowerProps>`
    margin-bottom: ${({ yPosition }) => yPosition};
    margin-left: ${({ xPosition }) => xPosition};
`;
