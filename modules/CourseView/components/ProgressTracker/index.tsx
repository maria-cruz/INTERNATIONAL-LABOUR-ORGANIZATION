import React from "react";
import Progress from "antd/lib/progress";

const ProgressTracker = ({ percentage = 0 }) => {
  return (
    <div className="progress-tracker">
      <div className="label">Progress</div>
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
