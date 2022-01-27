import React, { useState } from "react";
import Location from "@common/components/Icons/Location";
import Email from "@common/components/Icons/Email";
import Telephone from "@common/components/Icons/Telephone";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import SuccessMessage from "@common/components/SuccessMessage";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";

interface HandleContactsProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Inquiry = () => {
  const { t } = useTranslation("about-us");

  const successMesssageProps = {
    subDescription: `${t("successSubDescription")}`,
    description: `${t("successDescription")}`,
  };
  const [isVisibleText, setIsVisibleText] = useState(false);
  const [inquiryForm] = Form.useForm();

  const handleInquiryFinish = (value: HandleContactsProps) => {
    axios
      .post(`${process.env.API_URL}/contacts`, {
        given_name: value.firstName,
        family_name: value.lastName,
        email: value.email,
        message: value.message,
      })

      .then((data) => console.log(data, "success"))
      .then((res) => {
        setIsVisibleText(true);
        setTimeout(() => {
          setIsVisibleText(false);
        }, 8000);
      })
      .then((res) => {
        inquiryForm.resetFields();
      })
      .catch((err) => console.error(err));
  };

  return (
    <section id="contact-us" className="inquiry-container">
      <div className="inquiry-wrapper">
        <div className="inquiry-form">
          {isVisibleText ? (
            <SuccessMessage {...successMesssageProps} />
          ) : (
            <Form
              className="inquiry-form-wrapper"
              layout={"vertical"}
              form={inquiryForm}
              name="nest-messages"
              onFinish={handleInquiryFinish}
            >
              <div className="name-container">
                <Form.Item
                  className="first-name-container"
                  name="firstName"
                  label={t("firstName")}
                  rules={[
                    {
                      required: true,
                      message: `${t("firstNameInput")}`,
                    },
                  ]}
                >
                  <Input className="inquiry-input" />
                </Form.Item>

                <Form.Item
                  className="last-name-container"
                  name="lastName"
                  label={t("lastName")}
                  rules={[
                    {
                      required: true,
                      message: `${t("lastNameInput")}`,
                    },
                  ]}
                >
                  <Input className="inquiry-input" />
                </Form.Item>
              </div>

              <Form.Item
                className="email-container"
                name="email"
                label={t("email")}
                rules={[
                  {
                    required: true,
                    message: `${t("emailValidation")}`,
                  },
                  {
                    type: "email",
                    message: `${t("notValidEmail")}`,
                  },
                ]}
              >
                <Input className="inquiry-input" />
              </Form.Item>

              <Form.Item
                name="message"
                className="message-container"
                label={t("message")}
              >
                <Input.TextArea className="message-input" />
              </Form.Item>
              <Form.Item noStyle>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="inquire-btn"
                >
                  {t("sendMessage")}
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>

        <div className="info-container">
          <div className="contact-us-wrapper">
            <div className="label _section-label">{t("contactUs")}</div>
            <div className="secondary-label _subheading-label">
              {t("contactUsSubheading")}
            </div>

            <div className="details-wrappper">
              <div className="details-item _upper">
                <Location width="20" height="20" fill="#007A50" />
                <p className="details-label">{t("location")}</p>
              </div>
              <div className="details-item">
                <Telephone width="20" height="20" fill="#007A50" />
                <p className="details-label">+961 1 556 803</p>
              </div>
              <div className="details-item">
                <Email width="20" height="20" fill="#007A50" />
                <p className="details-label _email-label">
                  admin@houkouki-fi-al-3amal.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
