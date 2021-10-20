import React from "react";
import Image from "next/image";
import InstructorProfile from "@public/images/girl-profile.jpeg";
import Progress from "antd/lib/progress";
import CheckCircleFilled from "@ant-design/icons/CheckCircleFilled";

const SAMPLE_LIST = [
  "Morbi auctor lacinia ornare. Sed venenatis viverra pretium.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor lacinia ornare. Sed venenatis viverra pretium. Suspendisse potenti.",
  "Suspendisse potenti.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Morbi auctor lacinia ornare. Sed venenatis viverra pretium.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Morbi auctor lacinia ornare. Sed venenatis viverra pretium.",
];

type ObjectiveType = {
  objective: string;
};

interface UnitDetails {
  avatar?: any;
  instructor?: string;
  topicsCount?: number;
  progress?: number;
  description?: string;
  objectives?: ObjectiveType[] | [];
}

const UnitDetails = ({
  avatar,
  instructor = "No Instructor",
  topicsCount = 0,
  progress = 0,
  description = "",
  objectives = [],
}: UnitDetails) => {
  const hasObjectives = objectives.length > 0;

  return (
    <section className="details-container">
      <div className="upper-details-wrapper">
        <div className="img-container">
          <Image
            src={InstructorProfile}
            alt="girl-profile.jpg"
            width={60}
            height={60}
            placeholder="blur"
          />
        </div>
        <div className="instructor-name">{instructor}</div>
        <div className="topic-container">
          Unit topics: <span className="digit-wrapper">{topicsCount}</span>
        </div>
        <div className="progress-wrapper">
          Progress:
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
          <div className="_subheading-label">Learning objectives</div>
          {objectives.map((item, index) => (
            <div className="list-item" key={index}>
              <CheckCircleFilled
                className="checklist"
                style={{ color: "#007a50" }}
              />
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default UnitDetails;
