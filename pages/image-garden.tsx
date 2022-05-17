import type { NextPage } from "next";
import { PageWrapper } from "@components/common/PageWrapper";
import { FullPageImage } from "@components/common/FullPageImage";
import { ImageFlower } from "@components/image-garden/ImageFlower";

const ImageGarden: NextPage = () => {
    return (
        <PageWrapper>
            <FullPageImage
                src="/win95-fields-large.jpg"
                alt="Windows 95 fields background - rolling green hills with a lightly clouded blue sky"
            />
            <div className="absolute top-0 w-full h-full justify-center flex items-center">
                <ImageFlower src="/enter.gif" alt="Test" />
            </div>
        </PageWrapper>
    );
};

export default ImageGarden;
