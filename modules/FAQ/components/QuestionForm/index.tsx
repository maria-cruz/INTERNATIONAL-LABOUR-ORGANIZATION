import React from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Select from "antd/lib/select";

const SAMPLE_TOPIC = [
  {
    label: "The Employment Contract. ",
    value: 1,
  },
  {
    label: "Termination of Employment Contracts",
    value: 2,
  },
  {
    label: "Social Security and Work Emergencies",
    value: 3,
  },
  {
    label: "other",
    value: 4,
  },
];

const QuestionForm = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const [inquiryForm] = Form.useForm();
  return (
    <section className="form-section-container">
      <div className="form-wrapper">
        <div className="text-container">
          <div className="_subheading-label">Have a Question?</div>
          <div className="form-description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </div>
        </div>
        <Form
          className="inquiry-form-wrapper"
          layout={"vertical"}
          form={inquiryForm}
          name="nest-messages"
          onFinish={onFinish}
        >
          <div className="upper-input-container">
            <Form.Item className="email-container" name="email" label="Email">
              <Input className="form-input" />
            </Form.Item>
            <Form.Item label="Topic" name="topic" className="dropdown-menu">
              <Select className="form-select">
                {SAMPLE_TOPIC.map((item) => (
                  <Select.Option value={item.value} key={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <Form.Item
            name="question"
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
      </div>
    </section>
  );
};

export default QuestionForm;
