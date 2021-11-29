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
}

const SessionCollapse = ({ topics }: SessionCollapseProps) => {
  const router = useRouter();
  const currentTopicId = router?.query?.topic;

  function callback(key: any) {
    // console.log(key);
  }

  return (
    <div className="session-collapse">
      <Collapse
        defaultActiveKey={["1"]}
        onChange={callback}
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          <ExpandMore rotate={isActive ? 180 : 0} />
        )}
      >
        {topics.map((topic, idx: number) => {
          const isActive = currentTopicId === `${topic?.id}`;

          return (
            <Panel
              header={
                <span className="session-panel-header">
                  {`Session ${idx + 1}: ${topic?.title}`}
                </span>
              }
              key={`${idx + 1}`}
            >
              <PreAssessment id={topic?.id} />
              <Topic title={topic?.title || ""} id={topic?.id} />
              <PostAssessment id={topic?.id} />
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default SessionCollapse;
