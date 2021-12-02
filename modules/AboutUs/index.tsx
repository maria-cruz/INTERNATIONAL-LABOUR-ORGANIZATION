import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import Banner from "@public/images/about-banner.jpg";
import useTranslation from "next-translate/useTranslation";
import Partners from "@common/components/Partners";
import Inquiry from "./Inquiry";
import AboutMobile from "@public/images/about-mobile.jpg";
import GalleryDesktop from "./GalleryDesktop";
import GalleryMobile from "./GalleryMobile";

const AboutUs = () => {
  const { t } = useTranslation("about-us");

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="about-us-section">
        <div className="about-us-banner">
          <Image
            className="banner-desktop"
            src={Banner}
            width={1920}
            alt="about-banner.jpg"
            placeholder="blur"
            objectFit="cover"
          />
        </div>
        <div className="about-us-mobile">
          <Image
            className="banner-mobile"
            src={AboutMobile}
            objectFit="cover"
            alt="about-mobile.jpg"
            placeholder="blur"
          />
        </div>

        <div className="about-us-info">
          <div className="info-wrapper">
            <h1 className="about-us-label _section-label">{t("aboutUs")}</h1>
            <div className="about-us-description">
              <p>{t("firstDescription")}</p>
              <br />
              <p>{t("secondDescription")}</p>
              <br />
              <p>{t("thirdDescription")}</p>
              <br />
              <p>{t("lastDescription")}</p>
            </div>
          </div>
        </div>

        <div className="gallery-section">
          <GalleryDesktop />
          <GalleryMobile />
        </div>

        <Partners />
        <Inquiry />
      </section>
    </Layout>
  );
};

export default AboutUs;
