import React from "react";
import SelfPractice from "@common/components/CourseTabs/SelfPractice";
import QandA, { QandAProps } from "@common/components/CourseTabs/Q&A";
import UnitDetails, {
  UnitDetailsProps,
} from "@common/components/CourseTabs/UnitDetails";
import Tabs from "antd/lib/tabs";

const { TabPane } = Tabs;

export interface CourseTabsProps {
  unitDetailsProps?: UnitDetailsProps;
  unitQandAProps?: QandAProps;
}

const CourseTabs = ({ unitDetailsProps, unitQandAProps }: CourseTabsProps) => {
  return (
    <Tabs className="tab-container" defaultActiveKey="1">
      <TabPane className="tab-item" tab="Unit Details" key="1">
        <UnitDetails
          topicsCount={unitDetailsProps?.topicsCount}
          progress={unitDetailsProps?.progress}
          description={unitDetailsProps?.description}
          objectives={unitDetailsProps?.objectives}
        />
      </TabPane>
      <TabPane className="tab-item" tab={"Q & A"} key="2">
        <QandA {...unitQandAProps} />
      </TabPane>
      <TabPane className="tab-item" tab="Self Practice" key="3">
        <SelfPractice />
      </TabPane>
    </Tabs>
  );
};

export default CourseTabs;
