import React from "react";
import Image from "next/image";
import Button from "antd/lib/button";
import Download from "@common/components/Icons/Download";
import CardSampleImage from "@public/images/card-sample-3.jpg";
import useTranslation from "next-translate/useTranslation";

export interface GuideCardProps {
  unit?: string;
  title?: string;
  description?: string;
  thumbnail: StaticImageData | string;
  url?: string;
}

const DownloadCard = ({
  unit = "",
  title = "",
  thumbnail = CardSampleImage,
  url = "",
}: GuideCardProps) => {
  const imageSrc = !!thumbnail ? thumbnail : CardSampleImage;
  const { t } = useTranslation("download-guide");

  return (
    <div className="course-card">
      <div className="card-image-container">
        <Image
          src={imageSrc}
          width={553}
          height={303}
          objectFit="cover"
          alt="courses-image"
        />
      </div>
      <div className="card-details-container">
        <div className="card-unit">{unit}</div>
        <div className="card-title">{title}</div>
        <div className="spacer" />
        <div className="card-hover-details">
          <div className="spacer" />
          <div className="card-view-button">
            <a download={title} href={url}>
              <Button type="primary" className="download-btn">
                <Download fill="#ffffff" width="1.4rem" height="1.7rem" />
                {t("downloadBtn")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
