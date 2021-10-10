import React from "react";

import Menu from "@common/components/Icons/Menu";
import Close from "@common/components/Icons/Close";
import Content from "@modules/CourseView/components/Content";

import ProgressTracker from "./components/ProgressTracker";
import SessionCollapse from "./components/SessionCollapse";

const CourseView = () => {
  return (
    <div className="courses-view">
      <Content />
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
        <SessionCollapse />
      </div>
    </div>
  );
};

export default CourseView;
