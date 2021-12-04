import React from "react";
import SelfPractice, {
  SelfPracticeProps,
} from "@common/components/CourseTabs/SelfPractice";
import QandA, { QandAProps } from "@common/components/CourseTabs/Q&A";
import UnitDetails, {
  UnitDetailsProps,
} from "@common/components/CourseTabs/UnitDetails";
import Tabs from "antd/lib/tabs";
import useTranslation from "next-translate/useTranslation";

const { TabPane } = Tabs;

export interface CourseTabsProps {
  unitDetailsProps?: UnitDetailsProps;
  unitQandAProps?: QandAProps;
  unitDownloadableFilesProps?: SelfPracticeProps;
}

const CourseTabs = ({
  unitDetailsProps,
  unitQandAProps,
  unitDownloadableFilesProps,
}: CourseTabsProps) => {
  const { t } = useTranslation("courses-preview");

  return (
    <Tabs className="tab-container" defaultActiveKey="1">
      <TabPane className="tab-item" tab={t("unitDetails")} key="1">
        <UnitDetails
          {...unitDetailsProps}
          instructorName={unitDetailsProps?.instructorName}
        />
      </TabPane>
      <TabPane className="tab-item" tab={t("questionsAndAnswers")} key="2">
        <QandA {...unitQandAProps} />
      </TabPane>
      <TabPane className="tab-item" tab={t("selfPractice")} key="3">
        <SelfPractice {...unitDownloadableFilesProps} />
      </TabPane>
    </Tabs>
  );
};

export default CourseTabs;
