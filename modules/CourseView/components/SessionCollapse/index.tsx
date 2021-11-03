import React from "react";
import Collapse from "antd/lib/collapse";
import ExpandMore from "@common/components/Icons/ExpandMore";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";

import PostAssessment from "@modules/CourseView/components/SessionCollapse/PostAssessment";
import PreAssessment from "@modules/CourseView/components/SessionCollapse/PreAssessment";
import Topic from "@modules/CourseView/components/SessionCollapse/Topic";

const { Panel } = Collapse;

interface TopicType {
  description: string;
  id: number;
  media_embed: string;
  post_assessment: any[];
  pre_assessment: any[];
  title: string;
}
interface SessionCollapseProps {
  topics: TopicType[];
}

const SessionCollapse = ({ topics }: SessionCollapseProps) => {
  console.log("T: ", topics);

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
          return (
            <Panel
              header={
                <span className="session-panel-header">
                  {`Session ${idx + 1}: ${topic?.title}`}
                </span>
              }
              key={`${idx + 1}`}
            >
              <PreAssessment />
              <Topic title={topic?.title} />
              <PostAssessment />
            </Panel>
          );
        })}
        {/* <Panel
          header={
            <span className="session-panel-header">
              Session 1: Work contract and regulating text
            </span>
          }
          key="1"
        >
          <div className="session-panel-item">
            <div className="icon">
              <CheckCircleOutline />
            </div>
            <div className="text">{"Pre assessment"}</div>
          </div>
          <div className="session-panel-item">
            <div className="icon">
              <CheckCircleOutline />
            </div>
            <div className="text">
              {"General terms of the employment contract."}
            </div>
          </div>
          <div className="session-panel-item">
            <div className="icon">
              <CheckCircleOutline />
            </div>
            <div className="text">{"Elements of an employment contract."}</div>
          </div>
          <div className="session-panel-item">
            <div className="icon">
              <CheckCircleOutline />
            </div>
            <div className="text">{"Post assessment"}</div>
          </div>
        </Panel>
        <Panel
          header={
            <span className="session-panel-header">
              Session 2: Execution of the work contract
            </span>
          }
          key="2"
        >
          <div className="session-panel-item">
            <div className="icon">
              <CheckCircleOutline />
            </div>
            <div className="text">{"Pre assessment"}</div>
          </div>
          <div className="session-panel-item">
            <div className="icon">
              <CheckCircleOutline />
            </div>
            <div className="text">{"Place and forms of execution"}</div>
          </div>
          <div className="session-panel-item">
            <div className="icon">
              <CheckCircleOutline />
            </div>
            <div className="text">{"Contract types"}</div>
          </div>
          <div className="session-panel-item">
            <div className="icon">
              <CheckCircleOutline />
            </div>
            <div className="text">{"Post assessment"}</div>
          </div>
        </Panel> */}
      </Collapse>
    </div>
  );
};

export default SessionCollapse;
