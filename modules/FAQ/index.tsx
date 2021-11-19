import Layout, { Header } from "@common/components/Layout";
import React from "react";
import Image from "next/image";
import FAQBackground from "@public/images/FAQ-banner.jpg";
import QuestionForm from "./components/QuestionForm";
import Tabs from "antd/lib/tabs";
import FAQBackgroundMobile from "@public/images/FAQ-mobile-banner.jpg";
import { FaqsProps } from "./types";
import FaqUnit from "./FaqUnit";
const { TabPane } = Tabs;
const callback = (key: any) => {
  console.log(key);
};

const FAQ = ({ allFaqsData }: any) => {
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
        <div className="faq-bg-mobile">
          <Image
            src={FAQBackgroundMobile}
            alt="FAQ-mobile-banner.jpg"
            placeholder="blur"
          />
        </div>
        <div className="faq-bg-filter"></div>
        <div className="bg-description-container ">
          <div className="subheading-upper">Have a Question?</div>
          <div className="subheading-lower">Frequently Asked Questions</div>
        </div>
        <div className="unit-container">
          <div className="unit-wrapper">
            <Tabs
              className="tab-container"
              defaultActiveKey="1"
              onChange={callback}
            >
              {allFaqsData.map((faqData: FaqsProps) => {
                const faqUnit = faqData?.unit;
                return (
                  <TabPane className="tab-item" tab={faqUnit} key={faqUnit}>
                    <FaqUnit faqData={faqData} />
                  </TabPane>
                );
              })}
            </Tabs>
            <QuestionForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
