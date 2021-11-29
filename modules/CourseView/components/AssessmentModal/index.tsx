import React, { useState } from "react";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import Radio, { RadioChangeEvent } from "antd/lib/radio";
import { DescriptionsProps } from "antd";

interface ContentProps {
  isVisible?: boolean;
  onCancel: () => void;

  title?: string;
  description?: string;
  question?: string;
}

const Content = ({
  isVisible = false,
  onCancel,
  title = "Assessment",
  description = `Answer a few questions to help us understand your current level of
  knowledge. Don’t worry if you don’t know the answers, just answer as
  best as you can.`,
  question = `1. What Is Lorem Ipsum?`,
}: ContentProps) => {
  const [answers, setAnswers] = useState<[] | string[]>([]);

  const handleAnswersRadio = (e: RadioChangeEvent) => {
    setAnswers([e.target.value]);
  };

  return (
    <Modal
      className="assessment-modal"
      visible={isVisible}
      onCancel={onCancel}
      footer={false}
      destroyOnClose={true}
    >
      <p className="assessment-modal-title">{title}</p>
      <p className="assessment-modal-description">{description}</p>
      <p className="assessment-modal-question">{question}</p>

      <div className="assessment-modal-radio-group">
        <Radio.Group onChange={handleAnswersRadio} value={answers[0]}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>

      <div className="assessment-modal-footer">
        <div className="assessment-modal-footer-left-panel">
          <p className="assessment-modal-footer-question-count">Q1/5</p>
          <p className="assessment-modal-footer-question-timer">1:28</p>
        </div>
        <div className="assessment-modal-footer-right-panel">
          <Button type="primary">Next</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Content;
