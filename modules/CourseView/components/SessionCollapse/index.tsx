import React from "react";
import Collapse from "antd/lib/collapse";
import ExpandMore from "@common/components/Icons/ExpandMore";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import { useRouter } from "next/router";

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
}

const SessionCollapse = ({
  topics,
  currentProgressData,
}: SessionCollapseProps) => {
  const router = useRouter();
  const currentTopicId = router?.query?.topic;

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

          const isPreAssessmentCompleted = !!targetTopic?.pre_assessment;
          const isPostAssessmentCompleted =
            !!targetTopic?.post_assessment?.is_passed;
          const isVideoCompleted = targetTopic?.videos?.length > 0;

          return (
            <Panel
              header={
                <span className="session-panel-header">
                  {`Session ${idx + 1}: ${topic?.title}`}
                </span>
              }
              key={`${idx + 1}`}
            >
              <PreAssessment
                id={topic?.id}
                isCompleted={isPreAssessmentCompleted}
              />
              <Topic
                title={topic?.title || ""}
                id={topic?.id}
                isCompleted={isVideoCompleted}
              />
              <PostAssessment
                id={topic?.id}
                isCompleted={isPostAssessmentCompleted}
              />
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default SessionCollapse;
