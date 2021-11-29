import React from "react";
import Image from "next/image";
import AboutUsImage1 from "@public/images/about-us-image-1.jpg";
import TrainingReferencesImage from "@public/images/training-references.jpg";
import useTranslation from "next-translate/useTranslation";

const GalleryDesktop = () => {
  const { t } = useTranslation("about-us");

  return (
    <div className="gallery-wrapper-desktop">
      <div className="content-item">
        <div className="image-container">
          <Image
            src={AboutUsImage1}
            alt="background-scope.jpg"
            objectFit="cover"
            placeholder="blur"
            width={960}
            height={500}
          />
        </div>
      </div>

      <div className="content-item-info">
        <div className="content-item-wrapper">
          <div className="item-label _subheading-label">{t("scopeLabel")}</div>
          <div className="description-container">{t("scopeDescription")}</div>
        </div>
      </div>

      <div className="content-item-info">
        <div className="content-item-wrapper _lower">
          <div className="item-label _subheading-label">
            {t("referencesLabel")}
          </div>
          <div className="description-container _lower-desciption">
            {t("referencesDescription")}
          </div>
        </div>
      </div>

      <div className="content-item">
        <div className="image-container">
          <Image
            src={TrainingReferencesImage}
            alt="training-references.jpg"
            objectFit="cover"
            placeholder="blur"
            width={960}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryDesktop;
