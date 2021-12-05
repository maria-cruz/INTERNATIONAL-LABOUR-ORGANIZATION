import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import Radio, { RadioChangeEvent } from "antd/lib/radio";

import getJWT from "@common/methods/getJWT";
import updateProgress from "@common/methods/updateProgress";
import getTargetProgress from "@common/methods/getTargetProgress";
import classNames from "classnames";

interface ContentProps {
  currentContentData: any;
  currentUnitId: number | null;
  currentProgressData: any;
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
  isRetake: false,

  scoreBoard: {
    isVisible: false,
    correctAnswers: 0,
    isPassed: false,
  },
};

const Content = ({ currentContentData, currentProgressData }: ContentProps) => {
  const [retakeAssessment, setRetakeAssessment] = useState(false);
  const [answers, setAnswers] = useState<[] | string[]>([]);
  const [quizValues, setQuizValues] = useState(DEFAULT_QUIZ_VALUES);
  const jwt = getJWT(undefined, true);
  const router = useRouter();
  const tab = router?.query?.tab;
  const topic = router?.query?.topic;

  useEffect(() => {
    setRetakeAssessment(false);
  }, [tab, topic]);

  const currentTopicProgress = getTargetProgress(
    currentContentData?.id,
    currentProgressData
  );

  const isPreAssessmentDone = !!currentTopicProgress?.pre_assessment;
  const isPostAssessmentDone = !!currentTopicProgress?.post_assessment;

  const isPreAssessmentTab = tab === "pre";
  const isTopicTab = tab === "topic";
  const isPostAssessmentTab = tab === "post";

  const showPreAssessmentResult = isPreAssessmentDone && !retakeAssessment;
  const showPostAssessmentResult = isPostAssessmentDone && !retakeAssessment;
  const showPreAssessmentTest = isPreAssessmentTab;
  const showPostAssessmentTest = isPostAssessmentTab;

  const isPostAssessmentPassed =
    currentTopicProgress?.post_assessment?.is_passed;

  const refreshData = () => {
    router.replace(router.asPath, undefined, {
      scroll: false,
    });
  };

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

    const questionsLength = assessmentData?.length;
    const questionNum = questionsLength ? 1 : 0;
    const questionIndex = questionNum - 1;

    setQuizValues({
      ...quizValues,
      currentQuestion: questionNum,
      totalQuestions: questionsLength,
      isModalVisible: !quizValues?.isModalVisible,
      isSubmitAnswersVisible: false,
      title: title,
      description: questionDesc,
      question: assessmentData?.[questionIndex]?.question,
      choices: assessmentData?.[questionIndex]?.choices,

      scoreBoard: {
        isVisible: false,
        correctAnswers: 0,
        isPassed: false,
      },
    });
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

    const totalQuestions = quizValues?.totalQuestions ?? 0;
    const correctAnswers = correctAnswersCheck?.filter?.(
      (isCorrect: boolean) => {
        return isCorrect;
      }
    )?.length;

    const passingPercentage = 70;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    const isPassed = scorePercentage >= passingPercentage;

    const scoreBoard = {
      isVisible: true,
      correctAnswers: correctAnswers,
      isPassed: isPassed,
    };

    setQuizValues({
      ...quizValues,
      scoreBoard,
    });

    /* Payload */

    let newProgressData: any = {
      topic_id: currentContentData?.id,
    };

    if (isPreAssessmentTab) {
      newProgressData = {
        ...newProgressData,

        pre_assessment: {
          correct_answers: correctAnswers,
          total_questions: totalQuestions,
          is_passed: isPassed,
        },
      };
    }

    if (isPostAssessmentTab) {
      newProgressData = {
        ...newProgressData,

        post_assessment: {
          correct_answers: correctAnswers,
          total_questions: totalQuestions,
          is_passed: isPassed,
        },
      };
    }

    updateProgress(newProgressData, currentProgressData, jwt, refreshData);
  };

  const handleAnswersRadio = (e: RadioChangeEvent) => {
    const currentIndex = quizValues?.currentQuestion - 1;
    let newAnswers = [...answers];
    newAnswers[currentIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleContinueSessionClick = () => {
    setQuizValues(DEFAULT_QUIZ_VALUES);
    setAnswers([]);
  };

  const handleRetakeClick = () => {
    setQuizValues(DEFAULT_QUIZ_VALUES);
    setAnswers([]);
    setRetakeAssessment(true);
  };

  const videoHTML = currentContentData?.media_embed?.rawData?.html;
  return (
    <div className="content-container">
      <section className="unit-content">
        {showPreAssessmentTest ? (
          <>
            <div className="title">Pre assessment</div>
            {showPreAssessmentResult ? (
              <div className="assessment-result content-box-container">
                <p className="assessment-score-text">You've scored</p>
                <p className="assessment-score-number">{`${currentTopicProgress?.pre_assessment?.correct_answers}/${currentTopicProgress?.pre_assessment?.total_questions}`}</p>
                <p className="assessment-result-thanks">
                  Thank you for completing this pre-assessment.
                </p>
                <Button
                  onClick={handleRetakeClick}
                  className="assessment-result-button"
                  type="primary"
                >
                  Retake assessment
                </Button>
              </div>
            ) : (
              <div>
                <div className="content-box-container">
                  <div className={"assessment-title"}>Pre assessment test</div>
                  <div className={"assessment-description"}>
                    Help us understand your starting knowledge by completing a
                    few pre assessment questions.
                  </div>
                  <Button
                    onClick={handleAssessmentButtonClick}
                    className={"assessment-button"}
                    type="primary"
                  >
                    Take pre assessment
                  </Button>
                </div>
              </div>
            )}
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

        {showPostAssessmentTest ? (
          <>
            <div className="title">Post assessment</div>
            {showPostAssessmentResult ? (
              <div className="assessment-result content-box-container">
                <p className="assessment-score-text">You've scored</p>
                <p
                  className={classNames("assessment-score-number", {
                    failed: !isPostAssessmentPassed,
                  })}
                >{`${currentTopicProgress?.post_assessment?.correct_answers}/${currentTopicProgress?.post_assessment?.total_questions}`}</p>
                <p
                  className={classNames("assessment-result-mark", {
                    failed: !isPostAssessmentPassed,
                  })}
                >
                  {isPostAssessmentPassed ? "Passed!" : "Failed"}
                </p>
                <p className="assessment-result-thanks">
                  Thank you for completing this post-assessment.
                </p>
                <Button
                  onClick={handleRetakeClick}
                  className={classNames("assessment-result-button", {
                    failed: !isPostAssessmentPassed,
                  })}
                  type="primary"
                >
                  Retake assessment
                </Button>
              </div>
            ) : (
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
            )}
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
            <p
              className={classNames("assessment-modal-score-number", {
                failed: !quizValues?.scoreBoard?.isPassed,
              })}
            >{`${quizValues?.scoreBoard?.correctAnswers}/${quizValues?.totalQuestions}`}</p>

            {!quizValues?.scoreBoard?.isPassed ? (
              <p className="assessment-modal-result-mark">Failed</p>
            ) : null}

            <p className="assessment-modal-result-thanks">
              Thank you for completing this assessment.
            </p>
            <Button
              onClick={handleContinueSessionClick}
              className={classNames("assessment-modal-result-button", {
                failed: !quizValues?.scoreBoard?.isPassed,
              })}
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
