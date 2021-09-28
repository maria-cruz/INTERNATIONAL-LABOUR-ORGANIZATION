import React from "react";
import Location from "@common/components/Icons/Location";
import Email from "@common/components/Icons/Email";
import Telephone from "@common/components/Icons/Telephone";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
/* eslint-enable no-template-curly-in-string */

const Inquiry = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const [inquiryForm] = Form.useForm();
  return (
    <div className="inquiry-container">
      <div className="inquiry-wrapper">
        <div className="inquiry-form">
          <Form
            className="inquiry-form-wrapper"
            layout={"vertical"}
            form={inquiryForm}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              className="first-name-container"
              name="firstName"
              label="First name"
              rules={[{ required: true }]}
            >
              <Input className="inquiry-input" />
            </Form.Item>

            <Form.Item
              className="last-name-container"
              name="lastName"
              label="Last name"
              rules={[{ required: true }]}
            >
              <Input className="inquiry-input" />
            </Form.Item>

            <Form.Item
              className="email-container"
              name="email"
              label="Email"
              rules={[{ type: "email" }]}
            >
              <Input className="inquiry-input" />
            </Form.Item>

            <Form.Item
              name="message"
              className="message-container"
              label="Message"
            >
              <Input.TextArea className="message-input" />
            </Form.Item>
            <Form.Item noStyle>
              <Button type="primary" htmlType="submit" className="inquire-btn">
                Send message
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="info-container">
          <div className="contact-us-wrapper">
            <div className="label _section-label">Contact us</div>
            <div className="secondary-label _subheading-label">
              We’d love to hear from you
            </div>

            <div className="details-wrappper">
              <div className="details-item">
                <Location width="20" height="20" fill="#69BD44" />
                <p className="details-label">
                  Location Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr,
                </p>
              </div>
              <div className="details-item">
                <Telephone width="20" height="20" fill="#69BD44" />
                <p className="details-label">675 308 0000</p>
              </div>
              <div className="details-item">
                <Email width="20" height="20" fill="#69BD44" />
                <p className="details-label _email-label">
                  admin@houkouki-fi-al-3amal.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
