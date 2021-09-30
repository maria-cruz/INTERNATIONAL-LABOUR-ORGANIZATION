import React from "react";
import Image from "next/image";
import { Button } from "antd";
import Download from "@common/components/Icons/Download";

export interface CoursesCardProps {
  unit?: string;
  title?: string;
  description?: string;
  logo: StaticImageData | string;
}
const CoursesCard = ({ unit, title, description, logo }: CoursesCardProps) => {
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
        <div className="card-details-wrapper">
          <div className="card-unit">{unit}</div>
          <div className="card-title">{title}</div>
          <div className="card-hover-details">
            <div className="card-description">{description}</div>
            <div className="card-view-button">
              <Button>
                <Download width="20" height="20" fill="#FFFFFF" />
                <p className="dl-label">Download</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
