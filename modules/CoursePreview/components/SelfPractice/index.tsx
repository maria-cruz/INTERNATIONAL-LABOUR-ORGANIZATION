import React from "react";
import Button from "antd/lib/button";
import File from "@common/components/Icons/File";
import DownloadOutlined from "@common/components/Icons/DownloadOutlined";

const SAMPLE_MODULES = [
  "Lorem_ipsum_dolor_sit_amet_exercise.zip",
  "Lorem_ipsum_dolor_sit_amet_case_study.zip",
  "Lorem_ipsum_dolor_sit_amet_powerpoint.zip",
  "Lorem_ipsum_dolor_sit_amet_weblinks.zip",
];
const SelfPractice = () => {
  return (
    <section className="self-practice-section">
      <div className="self-practice-wrapper">
        <div className="exercise-file-title">
          Exercise files to practice while learning
        </div>
        <div className="description-container">
          Download exercises and other supporting documents here for this
          learning Unit.
        </div>
        {SAMPLE_MODULES.map((item, index) => (
          <div className="download-modules-wrapper" key={index}>
            <div className="file-item-container">
              <File fill="#007A50" width="4.1rem" height="4.1rem" />
              <div className="file-details-wrapper">
                <div className="file-name-contianer">{item}</div>
                <div className="label-container">50 kb</div>
              </div>
            </div>
            <div className="download-button-container">
              <Button
                className="download-btn"
                icon={
                  <DownloadOutlined width="24" height="24" fill="#00B274" />
                }
              >
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelfPractice;
