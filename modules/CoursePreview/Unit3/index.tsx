import React from "react";
import SelfPractice from "../components/SelfPractice";
import UnitDetails from "../components/UnitDetails";
import QandA from "../components/Q&A";
import Tabs from "antd/lib/tabs";
import Image from "next/image";
import Unit3Banner from "@public/images/unit3-banner.jpg";
import Button from "antd/lib/button";
import BackArrow from "@common/components/Icons/BackArrow";
import ForwardArrow from "@common/components/Icons/ForwardArrow";
import { useRouter } from "next/router";
import Layout, { Header } from "@common/components/Layout";
import Locked from "@common/components/Icons/Locked";

const { TabPane } = Tabs;

const handleTabsChange = (key: any) => {
  console.log(key);
};

const Unit3 = () => {
  const router = useRouter();

  const handleUnit2Click = () => {
    router.push("/courses/unit2");
  };
  const handleUnit1Click = () => {
    router.push("/courses/preview");
  };
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="course-preview-section">
        <div className="course-details-container">
          <div className="unit-container">
            <div className="banner-container">
              <Image
                src={Unit3Banner}
                alt="unit3-banner.jpg"
                placeholder="blur"
                height={445}
                width={1920}
              />
            </div>
            <div className="bg-filter"></div>
            <div className="bg-descriiption-wrapper">
              <div className="unit-label-container">Unit 3</div>
              <div className="title-container">
                <div className="back-icon" onClick={handleUnit2Click}>
                  <BackArrow width="3.6rem" height="4.3rem" fill="#8F949D" />
                </div>
                <span className="title-wrapper">
                  Social Security and Work Emergencies.
                </span>
                <div className="forward-icon" onClick={handleUnit1Click}>
                  <ForwardArrow width="3.6rem" height="4.3rem" fill="#8F949D" />
                </div>
              </div>
              <Button htmlType="submit" className="locked-btn">
                <Locked width="2rem" height="2.6rem" fill="#FFFFFF" />
                Locked
              </Button>
            </div>
            <Tabs
              className="tab-container"
              defaultActiveKey="1"
              onChange={handleTabsChange}
            >
              <TabPane className="tab-item" tab="Unit Details" key="1">
                <UnitDetails />
              </TabPane>
              <TabPane className="tab-item" disabled tab={"Q & A"} key="2">
                <QandA />
              </TabPane>
              <TabPane
                className="tab-item"
                disabled
                tab="Self Practice"
                key="3"
              >
                <SelfPractice />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Unit3;
