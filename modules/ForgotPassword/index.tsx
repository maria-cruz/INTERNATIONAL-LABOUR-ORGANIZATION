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
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const router = useRouter();
  const [forgotPasswordForm] = Form.useForm();
  const [statusCode, setStatusCode] = useState();
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState(false);
  const { t } = useTranslation("log-in");

  const locale = router?.locale ?? "en";

  const handleForgotPasswordFinish = (value: any) => {
    setIsSubmitButtonLoading(true);
    axios
      .post(`${process.env.API_URL}/auth/forgot-password`, {
        email: value.email,
      })
      .then(() => {
        router.push(`/reset-password-message`, "", { locale: locale });
      })
      .catch((error) => {
        setStatusCode(error.response.status);
        console.log("An error occurred:", error.response);
        setIsSubmitButtonLoading(false);
      });
  };

  const forgotPasswordValidator = () => ({
    validator(_: {}, forgotPassword: string) {
      console.log("forgotPassword", forgotPassword);
      const isEmptyForgotPassword = isEmpty(forgotPassword);

      if (isEmptyForgotPassword)
        return Promise.reject("Please enter your email address.");

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
              <span className="emphasis-text">{t("rights")}</span> &{" "}
              <span className="emphasis-text"> {t("responsibilities")}</span> at
              <span className="emphasis-text"> {t("work")} </span>
            </div>
          </div>
          <div className="forgot-password-container">
            <div className="title">Forgot password?</div>
            <div className="description">
              Enter the email address you used when you joined and we’ll you a
              link to reset your password.
            </div>
            <Form
              form={forgotPasswordForm}
              layout="vertical"
              validateTrigger="submit"
              onFinish={handleForgotPasswordFinish}
            >
              <Form.Item
                name="email"
                label="Email address"
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
                      Sign up?
                    </Button>
                  </div>
                </div>
              )}
              <Button
                className="reset-btn"
                type="primary"
                htmlType="submit"
                loading={isSubmitButtonLoading}
              >
                Reset my password
              </Button>

              <div className="return-to-login-container">
                <Button
                  className="log-in-btn"
                  type="link"
                  onClick={handleLoginClick}
                >
                  <span className="return-to-text">Return to</span>{" "}
                  <span className="log-in-text"> Log in</span>
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
