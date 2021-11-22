import React, { useState, FC } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Select from "antd/lib/select";
import axios from "axios";
import SuccessMessage from "@common/components/SuccessMessage";
import { FaqsProps } from "modules/FAQ/types";
interface QuestionProps {
  email: string;
  topic: string;
  sampleQuestion: string;
}
interface FaqUnitProps {
  faqData: FaqsProps;
}

const validation = {
  required: "${label} is required",
  types: {
    email: "${label} is not a valid email!",
  },
};

const QuestionForm: FC<FaqUnitProps> = ({ faqData }) => {
  const description = {
    description:
      "We have received your message and would like to thank you for writing to us.",
  };
  const [questionForm] = Form.useForm();
  const [isVisibleText, setIsVisibleText] = useState(false);
  const topics = faqData?.topics ?? [];
  const handleFormSubmit = (value: QuestionProps) => {
    axios
      .post(`${process.env.API_URL}/question-inquiries`, {
        email: value.email,
        subject: value.topic,
        question: value.sampleQuestion,
      })

      .then((data) => console.log(data, "success"))
      .then((res) => {
        setIsVisibleText(true);
        setTimeout(() => {
          setIsVisibleText(false);
        }, 5000);
      })
      .then((res) => {
        questionForm.resetFields();
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="form-section-container">
      <div className="form-wrapper">
        <div className="text-container">
          <div className="_subheading-label">Have a Question?</div>
          <div className="form-description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </div>
        </div>
        {isVisibleText ? (
          <SuccessMessage {...description} />
        ) : (
          <Form
            className="inquiry-form-wrapper"
            layout={"vertical"}
            form={questionForm}
            name="nest-messages"
            onFinish={handleFormSubmit}
            validateMessages={validation}
          >
            <div className="upper-input-container">
              <Form.Item
                className="email-container"
                rules={[{ type: "email", required: true }]}
                name="email"
                label="Email"
              >
                <Input className="form-input" />
              </Form.Item>
              <Form.Item label="Topic" name="topic" className="dropdown-menu">
                <Select className="form-select">
                  <Select.Option value="All Topics">All Topics</Select.Option>
                  {topics.map((topic, index: number) => {
                    const topicTitle = topic.title ?? "";
                    return (
                      <Select.Option value={topicTitle} key={index}>
                        {topicTitle}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
            <Form.Item
              name="sampleQuestion"
              className="question-container"
              label="Question"
            >
              <Input.TextArea className="question-input" />
            </Form.Item>
            <Form.Item noStyle>
              <Button type="primary" htmlType="submit" className="form-btn">
                Submit question
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </section>
  );
};

export default QuestionForm;
