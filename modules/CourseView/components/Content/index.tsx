import React, { useState } from "react";
import { useRouter } from "next/router";
import ParamLink from "@common/components/ParamLink";

import CheckCircle from "@common/components/Icons/CheckCircle";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import Radio, { RadioChangeEvent } from "antd/lib/radio";
import AssessmentModal from "../AssessmentModal";

interface ContentProps {
  data: any;
}

const Content = ({ data }: ContentProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const router = useRouter();
  const tab = router?.query?.tab;

  const isPreAssessmentTab = tab === "pre";
  const isTopicTab = tab === "topic";
  const isPostAssessmentTab = tab === "post";

  const handleAssessmentButtonClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const videoHTML = data?.media_embed?.rawData?.html;
  return (
    <div className="content-container">
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

      <AssessmentModal
        isVisible={isModalVisible}
        onCancel={handleAssessmentButtonClick}
      />
    </div>
  );
};

export default Content;
