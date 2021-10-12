import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import Banner from "@public/images/about-us-banner.jpg";
import BackgroundScope from "@public/images/background-scope.jpg";
import TrainingReferencesImage from "@public/images/training-references.jpg";
import useTranslation from "next-translate/useTranslation";
import Partners from "@common/components/Partners";
import Inquiry from "./Inquiry";

const AboutUs = () => {
  const { t } = useTranslation("about-us");

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="about-us-section">
        <div className="about-us-banner">
          <Image
            src={Banner}
            height={513}
            width={1920}
            alt="banner.jpg"
            placeholder="blur"
          />
        </div>

        <div className="about-us-info">
          <div className="info-wrapper">
            <h1 className="about-us-label _section-label">{t("aboutUs")}</h1>
            <div className="about-us-description">{t("description")}</div>
          </div>
        </div>

        <div className="gallery-section">
          <div className="gallery-wrapper">
            <div className="content-item">
              <div className="image-container">
                <Image
                  src={BackgroundScope}
                  alt="background-scope.jpg"
                  placeholder="blur"
                  width={960}
                  height={500}
                />
              </div>
            </div>

            <div className="content-item-info">
              <div className="content-item-wrapper">
                <div className="item-label _subheading-label">
                  {t("scopeLabel")}
                </div>
                <div className="description-container">
                  {t("scopeDescription")}
                </div>
              </div>
            </div>

            <div className="content-item-info">
              <div className="content-item-wrapper _lower">
                <div className="item-label _subheading-label">
                  {t("referencesLabel")}
                </div>
                <div className="description-container">
                  {t("referencesDescription")}
                </div>
              </div>
            </div>

            <div className="content-item">
              <div className="image-container">
                <Image
                  src={TrainingReferencesImage}
                  alt="training-references.jpg"
                  placeholder="blur"
                  width={960}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        <Partners subheading="Supported by" />
        <Inquiry />
      </section>
    </Layout>
  );
};

export default AboutUs;
