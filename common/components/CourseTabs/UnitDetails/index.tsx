import React from "react";
import Image from "next/image";
import DefaultInstructorProfile from "@public/images/girl-profile.jpeg";
import Progress from "antd/lib/progress";
import CheckCircleFilled from "@ant-design/icons/CheckCircleFilled";
import useTranslation from "next-translate/useTranslation";

type ObjectiveType = {
  objective: string;
};

export interface UnitDetailsProps {
  instructorAvatar?: any;
  instructorName?: string;
  topicsCount?: number;
  progress?: number;
  description?: string;
  objectives?: ObjectiveType[] | [];
}

const UnitDetails = ({
  instructorAvatar,
  instructorName = "Reyhan Mahfouz",
  topicsCount = 0,
  progress = 0,
  description = "",
  objectives = [],
}: UnitDetailsProps) => {
  const { t } = useTranslation("courses-preview");
  const hasObjectives = objectives.length > 0;
  const avatarSrc = !!instructorAvatar
    ? instructorAvatar
    : DefaultInstructorProfile;

  return (
    <section className="details-container">
      <div className="upper-details-wrapper">
        <div className="instructor-details-container">
          <div className="img-container">
            <Image src={avatarSrc} alt="avatar image" width={60} height={60} />
          </div>

          <div className="instructor-name">{instructorName}</div>
        </div>

        <div className="topic-container">
          {t("unitTopics")}:{" "}
          <span className="digit-wrapper">{topicsCount}</span>
        </div>
        <div className="progress-wrapper">
          {t("progress")}:
          <Progress
            percent={progress}
            strokeColor="#E3FFF5"
            className="progress-bar-container"
          />
        </div>
      </div>
      <div className="introduction-container">{description}</div>

      {hasObjectives ? (
        <div className="learning-objectives-container">
          <div className="_subheading-label">{t("learningObjectives")}</div>
          {objectives.map((objective, index) => (
            <div className="list-item" key={index}>
              <CheckCircleFilled
                className="checklist"
                style={{ color: "#007a50" }}
              />
              {objective?.objective}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default UnitDetails;
