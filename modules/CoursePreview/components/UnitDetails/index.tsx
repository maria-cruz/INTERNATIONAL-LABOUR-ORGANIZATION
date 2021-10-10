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

const UnitDetails = () => {
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
        <div className="instructor-name">Reyhan Mahfouz</div>
        <div className="topic-container">
          Unit topics: <span className="digit-wrapper">7</span>
        </div>
        <div className="progress-wrapper">
          Progress:
          <Progress
            percent={0}
            strokeColor="#E3FFF5"
            className="progress-bar-container"
          />
        </div>
      </div>
      <div className="introduction-container">
        By the end of this unit, the trainee will be able to understand the
        nature of work contracts, their contents and types, and the rights and
        duties of each of the parties to the contract stipulated in the relevant
        laws and regulations and will also be able to distinguish between those
        subject to and excluded from the provisions of these laws.
      </div>

      <div className="learning-objectives-container">
        <div className="_subheading-label">Learning objectives</div>
        {SAMPLE_LIST.map((item, index) => (
          <div className="list-item" key={index}>
            <CheckCircleFilled
              className="checklist"
              style={{ color: "#007a50" }}
            />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnitDetails;
