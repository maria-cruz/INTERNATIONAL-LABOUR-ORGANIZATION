import Layout, { Header } from "@common/components/Layout";
import React from "react";
import Image from "next/image";
import FAQBackground from "@public/images/FAQ-banner.jpg";
import QuestionForm from "./components/QuestionForm";
import SearchQuestion from "./components/SearchQuestion";
import Tabs from "antd/lib/tabs";
import FaqUnit1 from "./FaqUnit1";
import FaqUnit2 from "./FaqUnit2";
import FaqUnit3 from "./FaqUnit3";

const { TabPane } = Tabs;
const callback = (key: any) => {
  console.log(key);
};

const FAQ = () => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="FAQ-section">
        <div className="faq-bg">
          <Image
            src={FAQBackground}
            height={513}
            width={1920}
            alt="FAQ-banner.jpg"
            placeholder="blur"
          />
        </div>
        <div className="faq-bg-filter"></div>
        <div className="bg-description-container ">
          <div className="subheading-upper">Have a Question?</div>
          <div className="subheading-lower _section-label">
            Frequently Asked Questions
          </div>
        </div>
        <div className="unit-container">
          <div className="unit-wrapper">
            <Tabs
              className="tab-container"
              defaultActiveKey="1"
              onChange={callback}
            >
              <TabPane className="tab-item" tab="Unit 1" key="1">
                <FaqUnit1 />
              </TabPane>
              <TabPane className="tab-item" tab={"Unit 2"} key="2">
                <FaqUnit2 />
              </TabPane>
              <TabPane className="tab-item" tab="Unit 3" key="3">
                <FaqUnit3 />
              </TabPane>
            </Tabs>
            <SearchQuestion />
          </div>
        </div>
        <QuestionForm />
      </section>
    </Layout>
  );
};

export default FAQ;
