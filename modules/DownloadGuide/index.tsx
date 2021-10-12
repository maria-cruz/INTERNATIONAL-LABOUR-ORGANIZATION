import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import DownloadGuideBackground from "@public/images/download-guide-banner.jpg";
import Unit1Pic from "@public/images/employment-contract-guide.jpg";
import Unit2Pic from "@public/images/employment-termination-guide.jpg";
import Unit3Pic from "@public/images/SS-work-emergency-guide.jpg";
import GuideCard, { GuideCardProps } from "./components/card";

const CARD_DETAILS_SAMPLE = [
  {
    unit: "Unit 1",
    title:
      "The Employment Contract. (Conclusion, Execution and Termination) Guide",
    description:
      "By the end of this unit, the trainee will be able to understand the nature of work contracts, their contents and types, and the rights and duties of each of the parties to the contract stipulated in the relevant laws and regulations and will also be able to distinguish between those subject to and excluded from the provisions of these laws.",
    logo: Unit1Pic,
    value: 1,
  },
  {
    unit: "Unit 2",
    title: "Termination of Employment Contracts Guide",
    description:
      "By the end of this unit, the trainee will be able to distinguish between justified and unjustified termination cases of employment contracts and the conditions and legal consequences of their termination.",
    logo: Unit2Pic,
    value: 2,
  },
  {
    unit: "Unit 3",
    title: "Social Security and Work Emergencies Guide",
    description:
      "By the end of this unit, the trainee will become familiar with the social guarantees secured by the National Social Security Fund and will be able to understand how to adhere to and benefit from these guarantees.",
    logo: Unit3Pic,
    value: 3,
  },
];
const DownloadGuide = () => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="download-guide-section">
        <div className="background-container">
          <Image
            src={DownloadGuideBackground}
            alt="download-guide-banner.jpg"
            width={1920}
            height={513}
            placeholder="blur"
          />
          <div className="dl-guide-filter"></div>
          <div className="bg-description-container ">
            <div className="subheading-upper _section-label">Download</div>
            <div className="subheading-lower _section-label">
              Training Guide
            </div>
          </div>
        </div>
        <div className="download-cards-container">
          <div className="description-label-container">
            <p>
              The huqouqi fil 3amal guides are available for each of the three
              units. Download the guides to support your learning as you
              progress through each of the three units, and also to use as a
              reference after completing the online course.
            </p>
          </div>

          <div className="guide-container">
            <div className="download-wrapper">
              {CARD_DETAILS_SAMPLE.map((item: GuideCardProps, index) => (
                <GuideCard
                  unit={item.unit}
                  title={item.title}
                  description={item.description}
                  logo={item.logo}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DownloadGuide;
