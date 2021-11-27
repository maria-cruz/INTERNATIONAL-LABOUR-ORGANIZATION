import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import DownloadGuideBackground from "@public/images/download-guide-banner.jpg";
import GuideCard, { GuideCardProps } from "./components/card";
import DowloadBannerMobile from "@public/images/download-guide-mobile.jpg";

const DownloadGuide = ({ allGuidesData }: any) => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="download-guide-section">
        <div className="background-container">
          <div className="banner-desktop">
            <Image
              src={DownloadGuideBackground}
              alt="download-guide-banner.jpg"
              width={1920}
              height={513}
              placeholder="blur"
            />
          </div>
          <div className="banner-mobile">
            <Image
              src={DowloadBannerMobile}
              alt="dowload-guide-mobile.jpg"
              placeholder="blur"
            />
          </div>
          <div className="dl-guide-filter"></div>
          <div className="bg-description-container">
            <div className="subheading-upper">
              Download <span className="subheading-lower">Guides</span>
            </div>
          </div>
        </div>
        <div className="download-cards-container">
          <div className="guide-container">
            <div className="download-wrapper">
              {allGuidesData.map((guideData: GuideCardProps, index: number) => (
                <GuideCard
                  unit={guideData?.unit}
                  title={guideData?.title}
                  thumbnail={guideData?.thumbnail}
                  key={index}
                  url={guideData?.url}
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
