import React from "react";
import Image from "next/image";
import HandWritingImage from "@public/images/hand-writing.jpg";
import Progress from "antd/lib/progress";
import { Button } from "antd";

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
        <Image src={logo} layout="intrinsic" placeholder="blur" />
      </div>
      <div className="card-details-container">
        <div className="upper-container">
          <div className="card-unit">{unit}</div>
          <div className="card-title">{title}</div>
          <div className="card-hover-details">
            <div className="card-description">{description}</div>
            <div className="card-view-button">
              <Button>View Unit</Button>
            </div>
          </div>
        </div>

        <div className="spacer" />

        <div className="lower-container">
          <div className="card-percentage">
            <Progress
              percent={30}
              strokeColor="#7ED958"
              className="progress-bar-container"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
