import Layout, { Header } from "@common/components/Layout";
import React from "react";
import SelfPractice from "./components/SelfPractice";
import UnitDetails from "./components/UnitDetails";
import QandA from "./components/Q&A";
import Tabs from "antd/lib/tabs";
import CarouselBanner from "./components/CarouselBanner";

const { TabPane } = Tabs;

interface CoursePreviewProps {
  coursePreviewData: any;
}

const CoursePreview = ({ coursePreviewData }: CoursePreviewProps) => {
  const { unit, title, description, percentage, objectives } =
    coursePreviewData;

  return (
    <Layout header={<Header title={"Header"} />}>
      <div className="course-preview-container">
        <div className="course-details-container">
          <CarouselBanner unit={unit} title={title} />

          <Tabs className="tab-container" defaultActiveKey="1">
            <TabPane className="tab-item" tab="Unit Details" key="1">
              <UnitDetails
                topicsCount={1}
                progress={percentage}
                description={description}
                objectives={objectives}
              />
            </TabPane>
            <TabPane className="tab-item" tab={"Q & A"} key="2">
              <QandA />
            </TabPane>
            <TabPane className="tab-item" tab="Self Practice" key="3">
              <SelfPractice />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default CoursePreview;
