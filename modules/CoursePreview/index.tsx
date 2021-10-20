import Layout, { Header } from "@common/components/Layout";
// import Unit1 from "./Unit1";
import React from "react";

import SelfPractice from "./components/SelfPractice";
import UnitDetails from "./components/UnitDetails";
import QandA from "./components/Q&A";
import Tabs from "antd/lib/tabs";
import Image from "next/image";
import Unit1Banner from "@public/images/unit1-banner.jpg";
import Button from "antd/lib/button";
import BackArrow from "@common/components/Icons/BackArrow";
import ForwardArrow from "@common/components/Icons/ForwardArrow";
import { useRouter } from "next/router";

import CarouselBanner from "./components/CarouselBanner";

// const { TabPane } = Tabs;

// const handleTabsChange = (key: any) => {
//   console.log(key);
// };

const CoursePreview = () => {
  // const router = useRouter();
  // const handleStartClick = () => {
  //   router.push("/courses/view");
  // };
  // const handleUnit2Click = () => {
  //   router.push("/courses/unit2");
  // };
  // const handleUnit3Click = () => {
  //   router.push("/courses/unit3");
  // };

  return (
    <Layout header={<Header title={"Header"} />}>
      <div className="course-preview-container">
        <div className="course-details-container">
          <CarouselBanner unit={1} title={"lol"} />

          {/* <Tabs
                className="tab-container"
                defaultActiveKey="1"
                onChange={handleTabsChange}
              >
                <TabPane className="tab-item" tab="Unit Details" key="1">
                  <UnitDetails />
                </TabPane>
                <TabPane className="tab-item" tab={"Q & A"} key="2">
                  <QandA />
                </TabPane>
                <TabPane className="tab-item" tab="Self Practice" key="3">
                  <SelfPractice />
                </TabPane>
              </Tabs> */}
        </div>
      </div>
    </Layout>
  );
};

export default CoursePreview;
