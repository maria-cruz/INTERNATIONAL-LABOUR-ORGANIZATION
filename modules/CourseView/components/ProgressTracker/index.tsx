import React from "react";
import Progress from "antd/lib/progress";
import useTranslation from "next-translate/useTranslation";

const ProgressTracker = ({ percentage = 0 }) => {
  const { t } = useTranslation("courses-view");
  return (
    <div className="progress-tracker">
      <div className="label">{t("progress")}</div>
      <div className="progress-container">
        <Progress
          percent={percentage}
          strokeColor="#7ED958"
          className="progress-bar-container"
          format={() => (percentage === 100 ? "100%" : `${percentage}%`)}
        />
      </div>
    </div>
  );
};

export default ProgressTracker;
