import Image from "next/image";
import styled from "styled-components";

export function ImageFlowerStem() {
    return (
        <StemWrapper>
            <Image src={`/flower-stem.png`} alt={`The stem of a flower`} height={30} width={30} />
        </StemWrapper>
    );
}

const StemWrapper = styled.div`
    position: relative;
`;
