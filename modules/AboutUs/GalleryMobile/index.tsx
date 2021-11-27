import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import SessionMobile from "@public/images/training-sessions-mobile.jpg";
import ReferencesMobile from "@public/images/references-mobile.jpg";
const GalleryMobile = () => {
  const { t } = useTranslation("about-us");

  return (
    <div className="gallery-wrapper-mobile">
      <div className="content-item">
        <div className="image-container">
          <Image
            className="session-mobile"
            src={SessionMobile}
            objectFit="cover"
            alt="training-sessions-mobile.jpg"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="content-item-info">
        <div className="content-item-wrapper">
          <div className="item-label _subheading-label">{t("scopeLabel")}</div>
          <div className="description-container">{t("scopeDescription")}</div>
        </div>
      </div>

      <div className="content-item">
        <div className="image-container">
          <Image
            className="reference-mobile"
            src={ReferencesMobile}
            objectFit="cover"
            alt="references-mobile.jpg"
            placeholder="blur"
          />
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
    </div>
  );
};

export default GalleryMobile;
