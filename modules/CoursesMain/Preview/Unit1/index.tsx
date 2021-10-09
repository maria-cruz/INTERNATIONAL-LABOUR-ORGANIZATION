import React from "react";
import SelfPractice from "../components/SelfPractice";
import UnitDetails from "../components/UnitDetails";
import QandA from "../components/Q&A";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}
const Unit1 = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        <UnitDetails />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <SelfPractice />
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <QandA />
      </TabPane>
    </Tabs>
  );
};

<div className="unit1-container"></div>;
export default Unit1;
