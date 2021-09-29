import React from "react";
import Image from "next/image";
import Progress from "antd/lib/progress";
import { Button } from "antd";

export interface CoursesCardProps {
  unit?: string;
  title?: string;
  description?: string;
  logo: StaticImageData | string;
  percentage?: number;
  status?: string;
}
const CoursesCard = ({
  unit = "",
  title = "",
  description = "",
  logo,
  percentage = 0,
}: CoursesCardProps) => {
  return (
    <div className="course-card">
      <div className="card-image-container">
        <Image
          src={logo}
          width={553}
          height={303}
          layout="fixed"
          placeholder="blur"
          alt="courses-image"
        />
      </div>
      <div className="card-details-container">
        <div className="upper-container">
          <div className="card-unit">{unit}</div>
          <div className="card-title">{title}</div>
          <div className="card-hover-details">
            <div className="card-description">{description}</div>
            <div className="spacer" />
            <div className="card-view-button">
              <Button type="primary">View Unit</Button>
            </div>
          </div>
        </div>
        <div className="spacer" />
        <div className="lower-container">
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
    </div>
  );
};

export default CoursesCard;
