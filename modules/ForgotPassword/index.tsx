import React, { useState } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import isEmpty from "lodash/isEmpty";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import HomeBackground from "@public/images/bg-banner.jpg";
import HomeBackgroundMobile from "@public/images/log-in-mobile.jpg";
import useTranslation from "next-translate/useTranslation";
import Router from "next/router";
import axios from "axios";
const ForgotPassword = () => {
  const [forgotPasswordForm] = Form.useForm();

  const [statusCode, setStatusCode] = useState();
  const { t } = useTranslation("log-in");

  const handleForgotPasswordFinish = (value: any) => {
    axios
      .post(`${process.env.API_URL}/auth/forgot-password`, {
        email: value.email,
        url: ".forgot-password",
      })
      .then((response) => {
        console.log("Your user received an email");
      })
      .catch((error) => {
        setStatusCode(error.response.status);

        console.log("An error occurred:", error.response);
      });
  };

  const forgotPasswordValidator = () => ({
    validator(_: {}, forgotPassword: string) {
      console.log("forgotPassword", forgotPassword);
      const isEmptyForgotPassword = isEmpty(forgotPassword);

      if (isEmptyForgotPassword)
        return Promise.reject(`${t("emailValidation")}`);

      return Promise.resolve();
    },
  });

  const handleLoginClick = () => {
    Router.push("log-in", undefined, { scroll: false });
  };

  const handleSignUpClick = () => {
    Router.push("sign-up");
  };
  const handleEmailInputChange = () => {
    forgotPasswordForm.setFields([
      {
        name: "email",
        errors: [],
      },
    ]);
    setStatusCode(undefined);
  };
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="log-in-section">
        <div className="background">
          <Image
            src={HomeBackground}
            alt="bg-banner.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="banner-mobile-container">
          <Image
            src={HomeBackgroundMobile}
            alt="bg-banner.jpg"
            placeholder="blur"
          />
        </div>
        <div className="bg-filter"></div>
        <div className="banner-container">
          <div className="banner-description-container">
            <div className="banner-description-text">
              <span className="emphasis-text">{t("rights")}</span> {t("and")}{" "}
              <span className="emphasis-text"> {t("responsibilities")}</span>{" "}
              {t("at")}
              <span className="emphasis-text"> {t("work")} </span>
            </div>
          </div>
          <div className="forgot-password-container">
            <div className="title">{t("forgotPassword")}</div>
            <div className="description">{t("enterEmailAddress")}</div>
            <Form
              form={forgotPasswordForm}
              layout="vertical"
              validateTrigger="submit"
              onFinish={handleForgotPasswordFinish}
            >
              <Form.Item
                name="email"
                label={`${t("emailAddress")}`}
                rules={[forgotPasswordValidator]}
              >
                <Input onChange={handleEmailInputChange} />
              </Form.Item>
              {statusCode === 400 && (
                <div className="error-message-container">
                  <div className="error-message">
                    We don’t recognise this email. Do you need to
                  </div>
                  <div className="sign-up-btn-container">
                    <Button
                      className="sign-up-btn"
                      type="link"
                      onClick={handleSignUpClick}
                    >
                      {t("signUp?")}
                    </Button>
                  </div>
                </div>
              )}
              <Button className="reset-btn" type="primary" htmlType="submit">
                {t("resetMyPassword")}
              </Button>

              <div className="return-to-login-container">
                <Button
                  className="log-in-btn"
                  type="link"
                  onClick={handleLoginClick}
                >
                  <span className="return-to-text">{t("returnTo")}</span>{" "}
                  <span className="log-in-text"> {t("log-in")}</span>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
