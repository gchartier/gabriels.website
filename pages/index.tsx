import type { NextPage } from "next";
import { EmailPrompt } from "@components/common/EmailPrompt";
import { useBlobityCursor } from "@hooks/useBlobityCursor";
import { UnderConstructionFooter } from "@components/home/UnderConstructionFooter";
import { ContentGrid } from "@components/home/ContentGrid";
import { ContentCell } from "@components/home/ContentCell";
import { PageWrapper } from "@components/common/PageWrapper";
import { Link } from "@components/common/Link";
import Image from "next/image";

const Home: NextPage = () => {
    useBlobityCursor();

    return (
        <PageWrapper>
            <EmailPrompt />
            <ContentGrid>
                <ContentCell>
                    <Link href="/blog" openNewTab>
                        <div className="bg-lime-600 p-8 flex justify-center items-center text-white relative h-full text-2xl">
                            <h2>Blog</h2>
                            <div className="absolute bottom-0 right-2">
                                <Image
                                    src="/Doodle-Arrow-Right.svg"
                                    alt="Doodle Arrow that takes you to my blog"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>
                    </Link>
                </ContentCell>
                <ContentCell>
                    <div className="relative w-full h-full">
                        <Image
                            src="/me.gif"
                            alt="Flickering and grainy green and black image of me"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </ContentCell>
            </ContentGrid>
            <UnderConstructionFooter />
        </PageWrapper>
    );
};

export default Home;
