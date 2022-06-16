import type { NextPage } from "next";
import { PageWrapper } from "@components/common/PageWrapper";
import { FullPageImage } from "@components/common/FullPageImage";
import { ImageFlower } from "@components/image-garden/ImageFlower";
import { PageWrapper } from "@components/common/PageWrapper";

export async function getStaticProps(context: any) {
    return {
        props: {},
    };
}

const ScreenshotGarden: NextPage = () => {
    return (
        <PageWrapper title="Screenshot Garden">
            <FullPageImage
                src="/win95-fields-large.jpg"
                alt="Windows 95 fields background - rolling green hills with a lightly clouded blue sky"
            />
            <div className="w-full h-full absolute top-0 left-0">
                <ImageFlower
                    src="/screenshot-garden/Alexa-Waste-Paper-On-To-The-Floor.png"
                    alt="TODO"
                    width={150}
                    height={60}
                    imageYPosition={-7}
                    flowerBottom={20}
                    flowerLeft={120}
                />

                <ImageFlower
                    src="/screenshot-garden/Binky-Bong-v-Rinky-Dink-Valtruvian.png"
                    alt="TODO"
                    width={120}
                    height={200}
                    imageYPosition={-8}
                    flowerBottom={200}
                    flowerLeft={350}
                />

                <ImageFlower
                    src="/screenshot-garden/Found-A-Blunt-On-The-Beach.png"
                    alt="TODO"
                    width={100}
                    height={150}
                    imageYPosition={-6}
                    flowerBottom={250}
                    flowerRight={20}
                />

                <ImageFlower
                    src="/screenshot-garden/Insured-Schneeman-Millward.jpg"
                    alt="TODO"
                    width={100}
                    height={60}
                    imageYPosition={-6}
                    flowerBottom={0}
                    flowerRight={150}
                />

                <ImageFlower
                    src="/screenshot-garden/Just-like-the-other-millions.png"
                    alt="TODO"
                    width={300}
                    height={25}
                    imageYPosition={-6}
                    flowerBottom={280}
                    flowerRight={300}
                />

                <ImageFlower
                    src="/screenshot-garden/Lightsaber-Unleashed.png"
                    alt="TODO"
                    width={100}
                    height={150}
                    imageYPosition={-6}
                    flowerBottom={250}
                    flowerRight={800}
                />

                <ImageFlower
                    src="/screenshot-garden/Memes-Are-Taking-Up-Space.png"
                    alt="TODO"
                    width={140}
                    height={60}
                    imageYPosition={-6}
                    flowerBottom={100}
                    flowerRight={40}
                />

                <ImageFlower
                    src="/screenshot-garden/Minecraft-Rage-Quit.png"
                    alt="TODO"
                    width={200}
                    height={90}
                    imageYPosition={-6}
                    flowerBottom={320}
                    flowerLeft={100}
                />

                <ImageFlower
                    src="/screenshot-garden/Minecraft-Ragequit-2.png"
                    alt="TODO"
                    width={200}
                    height={90}
                    imageYPosition={-6}
                    flowerBottom={170}
                    flowerLeft={40}
                />

                <ImageFlower
                    src="/screenshot-garden/Personal-Facebook-Cringe.png"
                    alt="TODO"
                    width={120}
                    height={260}
                    imageYPosition={-6}
                    flowerBottom={300}
                    flowerRight={650}
                />

                <ImageFlower
                    src="/screenshot-garden/Reddit-Create-Account-To-Browse-Anonymously.jpg"
                    alt="TODO"
                    width={170}
                    height={100}
                    imageYPosition={-6}
                    flowerBottom={130}
                    flowerRight={300}
                />

                <ImageFlower
                    src="/screenshot-garden/RIP-Halo-3.png"
                    alt="TODO"
                    width={100}
                    height={150}
                    imageYPosition={-6}
                    flowerBottom={200}
                    flowerRight={165}
                />

                <ImageFlower
                    src="/screenshot-garden/Skylars-Car-Accident.png"
                    alt="TODO"
                    width={100}
                    height={150}
                    imageYPosition={-6}
                    flowerBottom={20}
                    flowerLeft={600}
                />

                <ImageFlower
                    src="/screenshot-garden/Unsubscribe-Rebuke-and-Desperation.png"
                    alt="TODO"
                    width={200}
                    height={130}
                    imageYPosition={-6}
                    flowerBottom={110}
                    flowerRight={520}
                />

                <ImageFlower
                    src="/screenshot-garden/TikTok-Comments-Shut-Up.png"
                    alt="TODO"
                    width={200}
                    height={80}
                    imageYPosition={-6}
                    flowerBottom={10}
                    flowerRight={390}
                />

                <ImageFlower
                    src="/screenshot-garden/Voyager-WORST-BEST.png"
                    alt="TODO"
                    width={100}
                    height={150}
                    imageYPosition={-6}
                    flowerBottom={7}
                    flowerLeft={400}
                />
            </div>
        </PageWrapper>
    );
};

export default ScreenshotGarden;
