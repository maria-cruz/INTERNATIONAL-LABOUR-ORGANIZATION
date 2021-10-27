import React from "react";
import Image from "next/image";
import Button from "antd/lib/button";
import Download from "@common/components/Icons/Download";

export interface GuideCardProps {
  unit?: string;
  title?: string;
  description?: string;
  logo: StaticImageData | string;
}
const DownloadCard = ({ unit, title, description, logo }: GuideCardProps) => {
  return (
    <div className="course-card">
      <div className="card-image-container">
        <Image
          src={logo}
          layout="intrinsic"
          placeholder="blur"
          alt="image.jpg"
        />
      </div>
      <div className="card-details-container">
        <div className="card-unit">{unit}</div>
        <div className="card-title">{title}</div>
        <div className="spacer" />
        <div className="card-hover-details">
          <div className="card-description">{description}</div>
          <div className="spacer" />
          <div className="card-view-button">
            <Button type="primary" className="download-btn">
              <Download fill="#ffffff" width="1.4rem" height="1.7rem" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
