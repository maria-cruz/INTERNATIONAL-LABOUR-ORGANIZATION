import React from "react";
import classNames from "classnames";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";

interface PostAssessmentProps {
  isActive?: boolean;
  isCompleted?: boolean;
}
const PostAssessment = ({
  isActive = false,
  isCompleted = false,
}: PostAssessmentProps) => {
  return (
    <div
      className={classNames(
        "session-panel-item",
        { active: isActive },
        { completed: isCompleted }
      )}
    >
      <div className="icon">
        <CheckCircleOutline />
      </div>
      <div className="text">{"Pre assessment"}</div>
    </div>
  );
};

export default PostAssessment;
