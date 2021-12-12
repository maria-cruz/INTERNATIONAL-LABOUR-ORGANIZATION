import React from "react";
import Button from "antd/lib/button";
import File from "@common/components/Icons/File";
import DownloadOutlined from "@common/components/Icons/DownloadOutlined";
import Tooltip from "antd/lib/tooltip";
import useTranslation from "next-translate/useTranslation";

export interface Files {
  url?: string;
  name?: string;
  size?: string;
}
interface SelfPractice {
  id: number;
  files: Files;
}
export interface SelfPracticeProps {
  courseDownloadableFiles?: SelfPractice[];
}

const SelfPractice = ({ courseDownloadableFiles = [] }: SelfPracticeProps) => {
  const { t } = useTranslation("common");

  return (
    <section className="self-practice-section">
      <div className="self-practice-wrapper">
        <div className="exercise-file-title">{t("exercisesFile")}</div>
        <div className="description-container">{t("downloadExercise")}</div>
        {courseDownloadableFiles.map((courseDownloadableFile, idx: number) => {
          const filename = courseDownloadableFile?.files?.name;
          const fileUrl = courseDownloadableFile?.files?.url ?? "";
          const url = fileUrl;
          const fileSize = courseDownloadableFile?.files?.size;
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
                    <p>{t("download")}</p>
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
