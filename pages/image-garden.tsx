import type { NextPage } from "next";
import { PageWrapper } from "@components/common/PageWrapper";
import { FullPageImage } from "@components/common/FullPageImage";

const ImageGarden: NextPage = () => {
    return (
        <PageWrapper>
            <FullPageImage
                src="/win95-fields-large.jpg"
                alt="Windows 95 fields background - rolling green hills with a lightly clouded blue sky"
            />
        </PageWrapper>
    );
};

export default ImageGarden;
