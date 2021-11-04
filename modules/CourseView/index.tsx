import React from "react";

import Menu from "@common/components/Icons/Menu";
import Close from "@common/components/Icons/Close";
import Content from "@modules/CourseView/components/Content";

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
  progress?: ProgressType;
}

interface CourseDataProps {
  data: CourseDataType;
}

const CourseView = ({ data }: CourseDataProps) => {
  const { query } = useRouter();
  const currentContentData = data.topics.find(
    (topic) => query.topic == `${topic.id}`
  );

  return (
    <div className="courses-view">
      <Content data={currentContentData} />
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

        <ProgressTracker percentage={26} />
        <SessionCollapse topics={data?.topics} />
      </div>
    </div>
  );
};

export default CourseView;
