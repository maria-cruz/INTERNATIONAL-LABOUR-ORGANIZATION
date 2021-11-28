import React from "react";
import classNames from "classnames";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import ParamLink from "@common/components/ParamLink";
import { useRouter } from "next/router";

interface PreAssessmentProps {
  id?: number;
  isCompleted?: boolean;
}
const PreAssessment = ({ id = 0, isCompleted = false }: PreAssessmentProps) => {
  const router = useRouter();
  const currentTopicId = router?.query?.topic;
  const currentTabType = router?.query?.tab;
  const isActive = currentTopicId === `${id}` && currentTabType === "pre";

  return (
    <ParamLink query={{ topic: `${id}`, tab: "pre" }} shallow>
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
    </ParamLink>
  );
};

export default PreAssessment;
