import React from "react";
import Image from "next/image";
import Progress from "antd/lib/progress";
import { Button } from "antd";
import Locked from "@common/components/Icons/Locked";

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
  const isLocked = percentage === 0;
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

      <div className={`card-dark-filter ${isLocked ? "" : "_invisible"}`} />

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
      <div className={`locked-icon-container ${isLocked ? "" : "_invisible"}`}>
        <Locked width="2.8rem" height="3.675rem" />
      </div>
    </div>
  );
};

export default CoursesCard;
