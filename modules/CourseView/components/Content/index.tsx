import React, { useState } from "react";
import { useRouter } from "next/router";
import ParamLink from "@common/components/ParamLink";

import CheckCircle from "@common/components/Icons/CheckCircle";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import Radio, { RadioChangeEvent } from "antd/lib/radio";

import axios from "axios";
import getJWT from "@common/methods/getJWT";
import getUserId from "@common/methods/getUserId";

interface ContentProps {
  currentContentData: any;
  currentUnitId: number | null;
  currentProgress: any;
}

const DEFAULT_QUIZ_VALUES = {
  isModalVisible: false,
  isSubmitAnswersVisible: false,
  currentQuestion: 0,
  totalQuestions: 0,
  title: "",
  description: "",
  question: "",
  choices: [{ id: 0, choice: "", is_correct: false }],

  scoreBoard: {
    isVisible: false,
    correctAnswers: 0,
  },
};

const Content = ({
  currentContentData,
  currentUnitId,
  currentProgress,
}: ContentProps) => {
  const [answers, setAnswers] = useState<[] | string[]>([]);
  const [quizValues, setQuizValues] = useState(DEFAULT_QUIZ_VALUES);
  const jwt = getJWT(undefined, true);
  const userId = getUserId();

  const router = useRouter();
  const tab = router?.query?.tab;

  const isPreAssessmentTab = tab === "pre";
  const isTopicTab = tab === "topic";
  const isPostAssessmentTab = tab === "post";

  const handleAssessmentButtonClick = () => {
    let assessmentData = [];
    let title = "Assessment";
    if (isPreAssessmentTab) {
      assessmentData = currentContentData?.pre_assessment;
      title = "Pre Assessment";
    }
    if (isPostAssessmentTab) {
      assessmentData = currentContentData?.post_assessment;
      title = "Post Assessment";
    }
    const questionDesc =
      "Answer a few questions to help us understand your current level of knowledge. Don’t worry if you don’t know the answers, just answer as best as you can.";

    if (isPreAssessmentTab) {
      const questionsLength = assessmentData?.length;
      const questionNum = questionsLength ? 1 : 0;
      const questionIndex = questionNum - 1;

      setQuizValues({
        ...quizValues,
        currentQuestion: questionNum,
        totalQuestions: questionsLength,
        isModalVisible: !quizValues?.isModalVisible,
        isSubmitAnswersVisible: false,
        title: "Pre Assessment",
        description: questionDesc,
        question: assessmentData?.[questionIndex]?.question,
        choices: assessmentData?.[questionIndex]?.choices,

        scoreBoard: {
          isVisible: false,
          correctAnswers: 0,
        },
      });
    }
  };

  const handleNextButtonClick = () => {
    let assessmentData = [];
    if (isPreAssessmentTab) assessmentData = currentContentData?.pre_assessment;
    if (isPostAssessmentTab)
      assessmentData = currentContentData?.post_assessment;

    const totalQuestions = quizValues?.totalQuestions;
    const nextQuestionNum = quizValues?.currentQuestion + 1;
    const nextQuestionIndex = nextQuestionNum - 1;

    const shouldProceedToNextQuestion = totalQuestions >= nextQuestionNum;
    const isFinalQuestion = totalQuestions == nextQuestionNum;

    if (shouldProceedToNextQuestion) {
      setQuizValues({
        ...quizValues,
        currentQuestion: nextQuestionNum,
        isSubmitAnswersVisible: isFinalQuestion,
        question: assessmentData?.[nextQuestionIndex]?.question,
        choices: assessmentData?.[nextQuestionIndex]?.choices,
      });
    }
  };

  const handleSubmitAnswerClick = () => {
    let assessmentData = [];
    if (isPreAssessmentTab) assessmentData = currentContentData?.pre_assessment;
    if (isPostAssessmentTab)
      assessmentData = currentContentData?.post_assessment;

    const answerKeys = assessmentData?.map?.((assessment: any) => {
      let answers;
      answers = assessment?.choices?.filter?.((choice: any) => {
        return choice?.is_correct;
      });
      answers = answers?.map((choice: any) => {
        return choice?.choice;
      });
      return answers;
    });

    const correctAnswersCheck = answers?.map?.(
      (answer: string, idx: number) => {
        const isAnswerCorrect = answerKeys?.[idx]?.includes?.(answer);
        return !!isAnswerCorrect;
      }
    );

    const correctAnswers = correctAnswersCheck?.filter?.(
      (isCorrect: boolean) => {
        return isCorrect;
      }
    )?.length;

    const scoreBoard = {
      isVisible: true,
      correctAnswers: correctAnswers,
    };

    setQuizValues({
      ...quizValues,
      scoreBoard,
    });

    /* Payload */

    const topic_id = currentContentData?.id
      ? `${currentContentData?.id}`
      : null;
    const unit = currentUnitId;
    const user = userId;

    // axios
    //   .post(
    //     `${process.env.API_URL}/progresses`,
    //     {
    //       unit,
    //       user,
    //       topics: [
    //         {
    //           topic_id,
    //         },
    //       ],
    //     },
    //     {
    //       headers: {
    //         Authorization: jwt,
    //       },
    //     }
    //   )
    //   .then((currentContentData) => {
    //     console.log(currentContentData);
    //   })
    //   .catch((err) => console.error(err));
  };

  const handleAnswersRadio = (e: RadioChangeEvent) => {
    const currentIndex = quizValues?.currentQuestion - 1;
    let newAnswers = [...answers];
    newAnswers[currentIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleContinueSessionClick = () => {
    setQuizValues(DEFAULT_QUIZ_VALUES);
  };

  const videoHTML = currentContentData?.media_embed?.rawData?.html;
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
            <div className="title">{currentContentData?.title}</div>
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
        visible={quizValues?.isModalVisible}
        onCancel={handleAssessmentButtonClick}
        footer={false}
        destroyOnClose={true}
      >
        {!quizValues?.scoreBoard?.isVisible ? (
          <>
            <p className="assessment-modal-title">{quizValues?.title}</p>
            <p className="assessment-modal-description">
              {quizValues?.description}
            </p>
            <p className="assessment-modal-question">{quizValues?.question}</p>

            <div className="assessment-modal-radio-group">
              <Radio.Group
                onChange={handleAnswersRadio}
                value={answers?.[quizValues?.currentQuestion - 1]}
              >
                {quizValues?.choices?.map?.(({ choice }) => {
                  return <Radio value={choice}>{choice}</Radio>;
                })}
              </Radio.Group>
            </div>

            <div className="assessment-modal-footer">
              <div className="assessment-modal-footer-left-panel">
                <p className="assessment-modal-footer-question-count">{`Q ${quizValues?.currentQuestion}/${quizValues?.totalQuestions}`}</p>
                {/* <p className="assessment-modal-footer-question-timer">1:28</p> */}
              </div>
              <div className="assessment-modal-footer-right-panel">
                {quizValues?.isSubmitAnswersVisible ? (
                  <Button onClick={handleSubmitAnswerClick} type="primary">
                    Submit
                  </Button>
                ) : (
                  <Button onClick={handleNextButtonClick} type="primary">
                    Next
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : null}

        {quizValues?.scoreBoard?.isVisible ? (
          <div className="assessment-modal-result">
            <p className="assessment-modal-score-text">You've scored</p>
            <p className="assessment-modal-score-number">{`${quizValues?.scoreBoard?.correctAnswers}/${quizValues?.totalQuestions}`}</p>
            {/* <p className="assessment-modal-result-mark">Passed!</p> */}
            <p className="assessment-modal-result-thanks">
              Thank you for completing this pre-assessment.
            </p>
            <Button
              onClick={handleContinueSessionClick}
              className="assessment-modal-result-button"
              type="primary"
            >
              Continue session
            </Button>
          </div>
        ) : null}
      </Modal>
    </div>
  );
};

export default Content;
