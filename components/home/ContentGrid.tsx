import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
    children: ReactNode;
}

export function ContentGrid({ children }: Props) {
    return <StyledGrid>{children}</StyledGrid>;
}

const StyledGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, minmax(200px, 1fr));
`;
