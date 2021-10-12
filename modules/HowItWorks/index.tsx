import React from "react";
import Flag from "@common/components/Icons/Flag";
import OpenBook from "@common/components/Icons/OpenBook";
import Trophy from "@common/components/Icons/Trophy";
import Button from "antd/lib/button";
import Link from "next/link";
const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <div className="how-it-works">
        <div className="how-it-works-title-container">How It Works?</div>
        <div className="how-it-works-icon-and-description-container">
          <div className="icon-container">
            <div className="icon-wrapper">
              <Flag fill="#CCCCCC" height="73" width="71" />
            </div>
            <div className="icon-wrapper">
              <OpenBook fill="#CCCCCC" height="76.5" width="78" />
            </div>
            <div className="icon-wrapper">
              <Trophy fill="#CCCCCC" height="76.5" width="78" />
            </div>
          </div>
          <div className="divider-container">
            <div className="divider-vertical" />
          </div>
          <div className="how-it-works-description-container">
            <div className="description-title-container">Start unit</div>
            <div className="description-container">
              The huqouqi fil 3amal course is organized into 3 units. As you
              complete a unit, the next unit will unlock. Each unit includes
              learning objectives, topics, Q&A and self practice resources.
            </div>
            <div className="description-title-container">
              Learn and complete assessments
            </div>
            <div className="description-container">
              Complete each topic in unit to progress. Each topic includes a
              pre-assessment, video instruction, exercises, and a final
              assessment of your learning to advance.
            </div>
            <div className="description-title-container">Get certified!</div>
            <div className="description-container">
              Once you complete all topics within the three units with an
              assessment of 70% or higher, you will complete the course and
              unlock your huqouqi fil 3amal certificate!
            </div>
          </div>
        </div>
        <div className="done-button-container">
          <Link href="/courses/all">
            <Button className="done-btn" type="primary">
              Done
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
