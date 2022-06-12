import Image from "next/image";
import styled from "styled-components";

export function ImageFlowerStem() {
    return (
        <StemWrapper>
            <Image
                src={`/flower-stem.png`}
                alt={`The green stem of an image flower. A green leaf on each side of the stem as it connects to the ground.`}
                height={30}
                width={30}
                quality={100}
            />
        </StemWrapper>
    );
}

const StemWrapper = styled.div`
    position: relative;
`;
