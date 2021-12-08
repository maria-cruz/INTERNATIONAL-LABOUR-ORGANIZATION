import React from "react";
import Image from "next/image";
import Progress from "antd/lib/progress";
import Button from "antd/lib/button";
import Locked from "@common/components/Icons/Locked";
import CardSampleImage from "@public/images/card-sample-3.jpg";
import router from "next/router";
import useTranslation from "next-translate/useTranslation";

export interface CoursesCardProps {
  unit?: string;
  title?: string;
  slug?: string;
  description?: string;
  thumbnail: StaticImageData | string;
  percentage?: number;
  status?: string;
}
const CoursesCard = ({
  unit = "",
  title = "",
  slug = "",
  description = "",
  thumbnail = CardSampleImage,
  percentage = 0,
}: CoursesCardProps) => {
  const { t } = useTranslation("courses");

  const isLocked = percentage === 0;
  const imageSrc = !!thumbnail ? thumbnail : CardSampleImage;
  const handleViewUnit1Click = () => {
    router.push(`/courses/preview/${slug}`);
  };

  return (
    <div className="course-card">
      <div className="card-image-container">
        <Image src={imageSrc} width={553} height={303} alt="courses-image" />
      </div>

      <div className={`card-dark-filter ${isLocked ? "" : "_invisible"}`} />

      <div className="card-details-container">
        <div className="upper-container">
          <div className="card-unit">{`${t("unit")} ${unit}`}</div>
          <div className="card-title">{title}</div>
          <div className="card-description">{description}</div>
        </div>
        <div className="spacer" />
        <div className="lower-container">
          <div className="card-view-button">
            <Button type="primary" onClick={handleViewUnit1Click}>
              {t("viewUnit")}
            </Button>
          </div>
          <div className="card-percentage">
            <Progress
              percent={percentage}
              strokeColor="#7ED958"
              className="progress-bar-container"
              format={() => (percentage === 100 ? "100%" : `${percentage}%`)}
            />
          </div>
        </div>
      </div>
      <div className={`locked-icon-container ${isLocked ? "" : "_invisible"}`}>
        <Locked />
      </div>
    </div>
  );
};

export default CoursesCard;
