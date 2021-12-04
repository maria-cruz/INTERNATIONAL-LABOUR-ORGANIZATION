import React from "react";
import Button from "antd/lib/button";
import File from "@common/components/Icons/File";
import DownloadOutlined from "@common/components/Icons/DownloadOutlined";
import getStrapiFileUrl from "@common/utils/getStrapiFileUrl";
import Tooltip from "antd/lib/tooltip";
export interface Files {
  url?: string;
  name?: string;
  size?: string;
}
export interface SelfPracticeProps {
  courseDownloadableFiles?: Files[];
}

const SelfPractice = ({ courseDownloadableFiles = [] }: SelfPracticeProps) => {
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
        {courseDownloadableFiles.map((courseDownloadableFile, idx: number) => {
          const filename = courseDownloadableFile?.name;
          const fileUrl = courseDownloadableFile?.url ?? "";
          const url = getStrapiFileUrl(fileUrl);
          const fileSize = courseDownloadableFile?.size;
          return (
            <div className="download-modules-wrapper" key={idx}>
              <div className="file-item-container">
                <File fill="#007A50" width="4.1rem" height="4.1rem" />
                <div className="file-details-wrapper">
                  <Tooltip placement="topLeft" title={filename}>
                    <div className="file-name-contianer">{filename}</div>
                  </Tooltip>
                  <div className="label-container">{fileSize}</div>
                </div>
              </div>
              <div className="download-button-container">
                <a download={filename} href={url}>
                  <Button
                    className="download-btn"
                    icon={
                      <DownloadOutlined width="24" height="24" fill="#00B274" />
                    }
                  >
                    <p>Download</p>
                  </Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SelfPractice;
