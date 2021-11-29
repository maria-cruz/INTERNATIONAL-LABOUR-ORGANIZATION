import React, { useState } from "react";
import { useRouter } from "next/router";
import ParamLink from "@common/components/ParamLink";
import BackArrow from "@common/components/Icons/BackArrow";
import CheckCircle from "@common/components/Icons/CheckCircle";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import Radio, { RadioChangeEvent } from "antd/lib/radio";
import AssessmentModal from "../AssessmentModal";

import CourseTabs from "@common/components/CourseTabs";

interface ContentProps {
  data: any;
}

const Content = ({ data }: ContentProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();
  const slug = router?.query?.slug;
  const tab = router?.query?.tab;

  const isPreAssessmentTab = tab === "pre";
  const isTopicTab = tab === "topic";
  const isPostAssessmentTab = tab === "post";

  const handleBackClick = () => {
    if (!slug) return;
    router.push(`/courses/preview/${slug}`);
  };

  const handleAssessmentButtonClick = () => {
    setIsModalVisible(!isModalVisible);
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
        {isPreAssessmentTab ? (
          <>
            <div className="title">Pre assessment</div>
            <div className="content-box-container">
              <div className={"assessment-title"}>Pre assessment test</div>
              <div className={"assessment-description"}>
                Help us understand your starting knowledge by completing a few
                pre assessment questions.
              </div>
              <Button
                onClick={handleAssessmentButtonClick}
                className={"assessment-button"}
                type="primary"
              >
                Take pre assessment
              </Button>
            </div>
          </>
        ) : null}
        {isTopicTab ? (
          <>
            <div className="title">{data?.title}</div>
            <div
              className="video-container"
              dangerouslySetInnerHTML={{ __html: videoHTML }}
            />
          </>
        ) : null}
        {isPostAssessmentTab ? (
          <>
            <div className="title">Post assessment</div>
            <div className="content-box-container">
              <div className={"assessment-title"}>Post assessment test</div>
              <div className={"assessment-description"}>
                Help us understand your starting knowledge by completing a few
                post assessment questions.
              </div>
              <Button
                onClick={handleAssessmentButtonClick}
                className={"assessment-button"}
                type="primary"
              >
                Take post assessment
              </Button>
            </div>
          </>
        ) : null}
      </section>

      <section className="unit-info">
        <CourseTabs />
      </section>

      <AssessmentModal
        isVisible={isModalVisible}
        onCancel={handleAssessmentButtonClick}
      />
    </div>
  );
};

export default Content;
