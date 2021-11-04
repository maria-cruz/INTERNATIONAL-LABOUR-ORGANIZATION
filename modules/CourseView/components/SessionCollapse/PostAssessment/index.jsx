import React from "react";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";

const PostAssessment = () => {
  return (
    <div className="session-panel-item">
      <div className="icon">
        <CheckCircleOutline />
      </div>
      <div className="text">{"Post assessment"}</div>
    </div>
  );
};

export default PostAssessment;
