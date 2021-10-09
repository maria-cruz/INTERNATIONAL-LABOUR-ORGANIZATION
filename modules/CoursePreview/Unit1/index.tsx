import React from "react";
import SelfPractice from "../components/SelfPractice";
import UnitDetails from "../components/UnitDetails";
import QandA from "../components/Q&A";
import Tabs from "antd/lib/tabs";
import Image from "next/image";
import Unit1Banner from "@public/images/unit1-banner.jpg";
import Button from "antd/lib/button";
import BackArrow from "@common/components/Icons/BackArrow";
import ForwardArrow from "@common/components/Icons/ForwardArrow";
import { useRouter } from "next/router";

const { TabPane } = Tabs;

const callback = (key: any) => {
  console.log(key);
};
const Unit1 = () => {
  const router = useRouter();
  const handleStartClick = () => {
    router.push("/courses/view");
  };

  return (
    <div className="unit1-container">
      <div className="banner-container">
        <Image
          src={Unit1Banner}
          alt="unit1-banner.jpg"
          placeholder="blur"
          height={445}
          width={1920}
        />
      </div>
      <div className="bg-filter"></div>
      <div className="bg-descriiption-wrapper">
        <div className="unit-label-container">Unit 1</div>
        <div className="title-container">
          <div className="back-icon">
            <BackArrow width="3.6rem" height="4.3rem" fill="#8F949D" />
          </div>
          <span className="title-wrapper">
            The Employment Contract. (Conclusion, Execution and Termination)
          </span>
          <div className="forward-icon">
            <ForwardArrow width="3.6rem" height="4.3rem" fill="#8F949D" />
          </div>
        </div>
        <Button
          onClick={handleStartClick}
          htmlType="submit"
          type="primary"
          className="start-btn"
        >
          Start Lesson
        </Button>
      </div>
      <Tabs className="tab-container" defaultActiveKey="1" onChange={callback}>
        <TabPane className="tab-item" tab="Unit Details" key="1">
          <UnitDetails />
        </TabPane>
        <TabPane className="tab-item" tab={"Q & A"} key="2">
          <QandA />
        </TabPane>
        <TabPane className="tab-item" tab="Self Practice" key="3">
          <SelfPractice />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Unit1;
