import React from "react";
import Collapse from "antd/lib/collapse";
import ExpandMore from "@common/components/Icons/ExpandMore";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import useTranslation from "next-translate/useTranslation";

import PostAssessment from "@modules/CourseView/components/SessionCollapse/PostAssessment";
import PreAssessment from "@modules/CourseView/components/SessionCollapse/PreAssessment";
import Topic from "@modules/CourseView/components/SessionCollapse/Topic";

const { Panel } = Collapse;

interface TopicType {
  id: number;
  title?: string;
  description?: string;
  media_embed?: string;
  pre_assessment: any[];
  post_assessment: any[];
}
interface SessionCollapseProps {
  topics: TopicType[];
  currentProgressData: any;
  onClick?: (isSelectedTopicLocked?: boolean) => void;
}

const SessionCollapse = ({
  topics,
  currentProgressData,
  onClick,
}: SessionCollapseProps) => {
  const { t } = useTranslation("courses-view");

  return (
    <div className="session-collapse">
      <Collapse
        defaultActiveKey={["1"]}
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          <ExpandMore rotate={isActive ? 180 : 0} />
        )}
      >
        {topics.map((topic, idx: number) => {
          const targetTopic = currentProgressData?.topics?.find?.(
            (currentTopic: any) => {
              return currentTopic?.topic_id === topic?.id?.toString?.();
            }
          );

          const prevTopic = currentProgressData?.topics?.find?.(
            (currentTopic: any) => {
              return (
                currentTopic?.topic_id === topics?.[idx - 1]?.id?.toString?.()
              );
            }
          );

          const isPrevPostAssessmentCompleted =
            !!prevTopic?.post_assessment?.is_passed;
          const isPreAssessmentCompleted = !!targetTopic?.pre_assessment;
          const isPostAssessmentCompleted =
            !!targetTopic?.post_assessment?.is_passed;
          const isVideoCompleted = targetTopic?.videos?.length > 0;

          const isPreAssessmentLocked =
            !isPrevPostAssessmentCompleted && idx !== 0;
          const isPostAssessmentLocked = !(
            isVideoCompleted && isPreAssessmentCompleted
          );
          const isTopicLocked = !isPreAssessmentCompleted;

          const handlePanelItemClick =
            (isSelectedTopicLocked?: boolean) => (): any => {
              if (!!onClick) onClick(isSelectedTopicLocked);
            };

          return (
            <Panel
              header={
                <span className="session-panel-header">
                  {`${t("session")} ${idx + 1}: ${topic?.title}`}
                </span>
              }
              key={`${idx + 1}`}
            >
              <div onClick={handlePanelItemClick(isPreAssessmentLocked)}>
                <PreAssessment
                  id={topic?.id}
                  isCompleted={isPreAssessmentCompleted}
                  isLocked={false} // isPreAssessmentLocked
                />
              </div>

              <div onClick={handlePanelItemClick(isTopicLocked)}>
                <Topic
                  title={topic?.title || ""}
                  id={topic?.id}
                  isCompleted={isVideoCompleted}
                  isLocked={false} // isTopicLocked
                  currentProgressData={currentProgressData}
                />
              </div>
              <div onClick={handlePanelItemClick(isPostAssessmentLocked)}>
                <PostAssessment
                  id={topic?.id}
                  isCompleted={isPostAssessmentCompleted}
                  isLocked={false} //isPostAssessmentLocked
                />
              </div>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default SessionCollapse;
