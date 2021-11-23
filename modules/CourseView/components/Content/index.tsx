import React from "react";
import router, { useRouter } from "next/router";
import ParamLink from "@common/components/ParamLink";
import BackArrow from "@common/components/Icons/BackArrow";
import CheckCircle from "@common/components/Icons/CheckCircle";

import CourseTabs from "@common/components/CourseTabs";

const Content = ({ data }: { data: any }) => {
  const handleBackClick = () => {
    router.push("preview");
  };

  const videoHTML = data?.media_embed?.rawData?.html;
  return (
    <div className="content-container">
      <header className="unit-header">
        <div className="back-button" onClick={handleBackClick}>
          <div className="back-icon"> {<BackArrow />}</div>
          <div className="back-text">Back</div>
        </div>
        <div className="title">
          Unit 1: The employment contract. (Conclusion, implementation and
          termination)
        </div>
      </header>

      <section className="unit-content">
        <div className="title">Session 1 - Post assessment</div>
        <div
          className="video-container"
          dangerouslySetInnerHTML={{ __html: videoHTML }}
        />
      </section>

      <section className="unit-info">
        <CourseTabs />
      </section>
    </div>
  );
};

export default Content;
