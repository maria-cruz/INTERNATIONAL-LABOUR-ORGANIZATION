import React, { useState } from "react";
import { useRouter } from "next/router";
import ParamLink from "@common/components/ParamLink";

import CheckCircle from "@common/components/Icons/CheckCircle";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import Radio, { RadioChangeEvent } from "antd/lib/radio";

interface ContentProps {
  data: any;
}

const Content = ({ data }: ContentProps) => {
  const [answers, setAnswers] = useState<[] | string[]>([]);

  const [questionModalProps, setQuestionModalProps] = useState({
    isModalVisible: false,
    currentQuestion: 0,
    totalQuestions: 0,
    title: "",
    description: "",
    question: "",
    choices: [{ id: 0, choice: "", is_correct: false }],
  });

  const router = useRouter();
  const tab = router?.query?.tab;

  const isPreAssessmentTab = tab === "pre";
  const isTopicTab = tab === "topic";
  const isPostAssessmentTab = tab === "post";

  const handleAssessmentButtonClick = () => {
    const questionDesc =
      "Answer a few questions to help us understand your current level of knowledge. Don’t worry if you don’t know the answers, just answer as best as you can.";

    if (isPreAssessmentTab) {
      const questionsLength = data?.pre_assessment?.length;
      const questionNum = questionsLength ? 1 : 0;
      const questionIndex = questionNum - 1;

      setQuestionModalProps({
        ...questionModalProps,
        isModalVisible: !questionModalProps?.isModalVisible,
        currentQuestion: questionNum,
        totalQuestions: questionsLength,
        title: "Pre Assessment",
        description: questionDesc,
        question: data?.pre_assessment?.[questionIndex]?.question,
        choices: data?.pre_assessment?.[questionIndex]?.choices,
      });
    }

    if (isPostAssessmentTab) {
      const questionsLength = data?.post_assessment?.length;
      const questionNum = questionsLength ? 1 : 0;
      const questionIndex = questionNum - 1;

      setQuestionModalProps({
        ...questionModalProps,
        isModalVisible: !questionModalProps?.isModalVisible,
        currentQuestion: questionNum,
        totalQuestions: questionsLength,
        title: "Post Assessment",
        description: questionDesc,
        question: data?.post_assessment?.[questionIndex]?.question,
        choices: data?.post_assessment?.[questionIndex]?.choices,
      });
    }
  };

  const handleNextButtonClick = () => {
    if (isPreAssessmentTab) {
      const totalQuestions = questionModalProps?.totalQuestions;
      const nextQuestionNum = questionModalProps?.currentQuestion + 1;
      const nextQuestionIndex = nextQuestionNum - 1;

      const shouldProceedToNextQuestion = totalQuestions >= nextQuestionNum;

      if (shouldProceedToNextQuestion) {
        setQuestionModalProps({
          ...questionModalProps,
          currentQuestion: nextQuestionNum,
          question: data?.pre_assessment?.[nextQuestionIndex]?.question,
          choices: data?.pre_assessment?.[nextQuestionIndex]?.choices,
        });
      }
    }
  };

  const handleAnswersRadio = (e: RadioChangeEvent) => {
    setAnswers([e.target.value]);
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

      <Modal
        className="assessment-modal"
        visible={questionModalProps?.isModalVisible}
        onCancel={handleAssessmentButtonClick}
        footer={false}
        destroyOnClose={true}
      >
        <p className="assessment-modal-title">{questionModalProps?.title}</p>
        <p className="assessment-modal-description">
          {questionModalProps?.description}
        </p>
        <p className="assessment-modal-question">
          {questionModalProps?.question}
        </p>

        <div className="assessment-modal-radio-group">
          <Radio.Group onChange={handleAnswersRadio} value={answers[0]}>
            {questionModalProps?.choices?.map?.(({ choice }) => {
              return <Radio value={choice}>{choice}</Radio>;
            })}
          </Radio.Group>
        </div>

        <div className="assessment-modal-footer">
          <div className="assessment-modal-footer-left-panel">
            <p className="assessment-modal-footer-question-count">{`Q ${questionModalProps?.currentQuestion}/${questionModalProps?.totalQuestions}`}</p>
            {/* <p className="assessment-modal-footer-question-timer">1:28</p> */}
          </div>
          <div className="assessment-modal-footer-right-panel">
            <Button onClick={handleNextButtonClick} type="primary">
              Next
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Content;
