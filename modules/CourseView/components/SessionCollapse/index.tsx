import React from "react";
import Collapse from "antd/lib/collapse";
import ExpandMore from "@common/components/Icons/ExpandMore";

const { Panel } = Collapse;

const SessionCollapse = () => {
  function callback(key: any) {
    console.log(key);
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
        <Panel
          header={
            <span className="title">
              Session 1: Work contract and regulating text
            </span>
          }
          key="1"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          header={
            <span className="title">
              Session 2: Execution of the work contract
            </span>
          }
          key="2"
        >
          <p>{text}</p>
        </Panel>
        <Panel
          header={
            <span className="title">
              Session 3: Terms of employment contract
            </span>
          }
          key="3"
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default SessionCollapse;
