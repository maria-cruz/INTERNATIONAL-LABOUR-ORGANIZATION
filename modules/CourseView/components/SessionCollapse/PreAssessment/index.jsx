import React from "react";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";

const PreAssessment = () => {
  return (
    <div className="session-panel-item">
      <div className="icon">
        <CheckCircleOutline />
      </div>
      <div className="text">{"Pre assessment"}</div>
    </div>
  );
};

export default PreAssessment;
