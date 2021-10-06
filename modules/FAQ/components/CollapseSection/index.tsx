import React from "react";
import Collapse from "antd/lib/collapse";
import UpOutlined from "@ant-design/icons/UpOutlined";

export interface CollapseProps {
  question?: string;
  answer?: string;
}
const { Panel } = Collapse;

const CollapseSection = ({ question = "", answer = "" }: CollapseProps) => {
  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <UpOutlined rotate={isActive ? 180 : 0} style={{ fontSize: "100%" }} />
      )}
      className="collapse-container"
    >
      <Panel header={question} key="1" className="collapse-panel">
        <p>{answer}</p>
      </Panel>
    </Collapse>
  );
};

export default CollapseSection;
