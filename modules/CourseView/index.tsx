import React, { useState } from "react";

import Menu from "@common/components/Icons/Menu";
import Close from "@common/components/Icons/Close";
import Content from "@modules/CourseView/components/Content";
import BackArrow from "@common/components/Icons/BackArrow";
import CourseTabs from "@common/components/CourseTabs";
import useTranslation from "next-translate/useTranslation";

import ProgressTracker from "./components/ProgressTracker";
import SessionCollapse from "./components/SessionCollapse";
import { useRouter } from "next/router";

import Collapse from "antd/lib/collapse";
const { Panel } = Collapse;

import UnitUnlock from "./components/UnitUnlock";

interface ProgressType {
  unit: number;
  completed_topics_count: number;
  total_topics_count: number;
  is_unit_completed: boolean;
}

interface TopicsType {
  id: number;
  title?: string;
  description?: string;
  media_embed?: string;
  pre_assessment: any[];
  post_assessment: any[];
}

interface CourseDataType {
  id: number;
  unit?: number;
  title?: string;
  slug?: string;
  description?: string;
  topics: TopicsType[];
  topicsCount: number;
  progress?: ProgressType;
  objectives: any;
}

interface CourseDataProps {
  data: CourseDataType;
  unitDetailsProps: any;
  unitQandAProps: any;
  unitDownloadableFilesProps: any;
}

const CourseView = ({
  data,
  unitDetailsProps,
  unitQandAProps,
  unitDownloadableFilesProps,
}: CourseDataProps) => {
  const { t } = useTranslation("courses-view");
  const [isSessionColumnOpen, setIsSessionColumnOpen] = useState(true);
  const [isContentLocked, setIsContentLocked] = useState(true);

  const router = useRouter();
  const slug = router?.query?.slug;
  const currentUnitId = data?.id ?? null;
  const currentProgressData = data?.progress;
  const currentContentData = data.topics.find(
    (topic) => router?.query?.topic == `${topic?.id}`
  );

  const isCompleted = unitDetailsProps?.progress === 100 ? true : false;

  const handleBackClick = () => {
    if (!slug) return;
    router.push(`/courses/preview/${slug}`);
  };

  const handleSessionHeaderClick = () => {
    setIsSessionColumnOpen(!isSessionColumnOpen);
  };

  const handleSessionItemClick = (isSelectedTopicLocked?: boolean) => {
    setIsSessionColumnOpen(!isSessionColumnOpen);
    setIsContentLocked(!!isSelectedTopicLocked);
  };

  return (
    <>
      <UnitUnlock visible={isCompleted} />
      <div className="courses-view">
        <div className="left-column">
          <header className="unit-header">
            <div className="back-button" onClick={handleBackClick}>
              <div className="back-icon"> {<BackArrow />}</div>
              <div className="back-text">{t("back")}</div>
            </div>
            <div className="title">{`${t("unit")} ${data?.unit}: ${
              data?.title
            }`}</div>
          </header>

          <Collapse
            bordered={false}
            activeKey={isSessionColumnOpen ? "1" : ""}
            expandIcon={() => (
              <div onClick={handleSessionHeaderClick}>
                <Menu width="32" height="32" />
              </div>
            )}
            className={"session-column-collapse"}
          >
            <Panel
              header={
                <div onClick={handleSessionHeaderClick}>
                  {t("sessionContents")}
                </div>
              }
              key="1"
            >
              <div className="session-column">
                <ProgressTracker percentage={unitDetailsProps?.progress} />
                <SessionCollapse
                  topics={data?.topics}
                  currentProgressData={currentProgressData}
                  onClick={handleSessionItemClick}
                />
              </div>
            </Panel>
          </Collapse>

          <Content
            currentContentData={currentContentData}
            currentUnitId={currentUnitId}
            currentProgressData={currentProgressData}
            isLocked={isContentLocked}
          />

          <section className="unit-info">
            <CourseTabs
              unitDetailsProps={unitDetailsProps}
              unitQandAProps={unitQandAProps}
              unitDownloadableFilesProps={unitDownloadableFilesProps}
            />
          </section>
        </div>

        <div className="right-column">
          <header className="session-header">
            <div className="session-menu-left-container">
              <div className="session-menu-icon">
                <Menu width="32" height="32" />
              </div>
              <div className="session-menu-text">{t("sessionContents")}</div>
            </div>
            <div className="session-menu-right-container">
              <div className="session-menu-close">
                <Close width="40" height="40" />
              </div>
            </div>
          </header>

          <ProgressTracker percentage={unitDetailsProps?.progress} />
          <SessionCollapse
            topics={data?.topics}
            currentProgressData={currentProgressData}
            onClick={handleSessionItemClick}
          />
        </div>
      </div>
    </>
  );
};

export default CourseView;
