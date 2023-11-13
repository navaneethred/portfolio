"use client"

import Link from "next/link";
import Image from "next/image";

const InfoBox = ({ text, link, btnText }: { text: string, link: string, btnText: string }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link href={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <Image src="/icons/arrow.svg" alt="arrow icon" width={14} height={15} priority />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Navaneeth</span>👋
            <br />
            A software Engineer from India.
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked with many companies and picked up many skills along the way"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="Led multiple projects to success over the years. Curious about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away!"
            link="/contact"
            btnText="Let's talk!"
        />
    ),
};

export const HomeInfo = ({ currentStage }: { currentStage: number }) => {
    // @ts-ignore
    return renderContent[currentStage] || null;
};
