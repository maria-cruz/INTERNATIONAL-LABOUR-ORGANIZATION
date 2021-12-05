import React from "react";

import Menu from "@common/components/Icons/Menu";
import Close from "@common/components/Icons/Close";
import Content from "@modules/CourseView/components/Content";
import BackArrow from "@common/components/Icons/BackArrow";
import CourseTabs from "@common/components/CourseTabs";

import ProgressTracker from "./components/ProgressTracker";
import SessionCollapse from "./components/SessionCollapse";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const slug = router?.query?.slug;
  const currentUnitId = data?.id ?? null;
  const currentProgressData = data?.progress;
  const currentContentData = data.topics.find(
    (topic) => router?.query?.topic == `${topic?.id}`
  );

  const handleBackClick = () => {
    if (!slug) return;
    router.push(`/courses/preview/${slug}`);
  };

  return (
    <div className="courses-view">
      <div className="left-column">
        <header className="unit-header">
          <div className="back-button" onClick={handleBackClick}>
            <div className="back-icon"> {<BackArrow />}</div>
            <div className="back-text">Back</div>
          </div>
          <div className="title">{`Unit ${data?.unit}: ${data?.title}`}</div>
        </header>

        <div className="session-column">
          <header className="session-header">
            <div className="session-menu-left-container">
              <div className="session-menu-icon">
                <Menu width="32" height="32" />
              </div>
              <div className="session-menu-text">Session contents</div>
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
          />
        </div>

        <Content
          currentContentData={currentContentData}
          currentUnitId={currentUnitId}
          currentProgressData={currentProgressData}
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
            <div className="session-menu-text">Session contents</div>
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
        />
      </div>
    </div>
  );
};

export default CourseView;
