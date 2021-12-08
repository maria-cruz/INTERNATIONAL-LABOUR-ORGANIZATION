import React, { useState } from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import { setCookie } from "nookies";
import Router from "next/router";
import Button from "antd/lib/button";
import useTranslation from "next-translate/useTranslation";
import HomeBackground from "@public/images/bg-banner.jpg";
import HomeBackgroundMobile from "@public/images/log-in-mobile.jpg";
import PreviewPassword from "@common/components/Icons/PreviewPassword";
interface HandleLoginFinishProps {
  email: string;
  password: string;
}
const LogIn = () => {
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState(false);
  const [loginForm] = Form.useForm();

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { t } = useTranslation("log-in");

  const handleLoginFinish = (value: HandleLoginFinishProps) => {
    setIsSubmitButtonLoading(true);

    const loginInfo = {
      identifier: value.email,
      password: value.password,
    };

    fetch(`${process.env.API_URL}/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data?.statusCode === 400) {
          loginForm.setFields([
            {
              name: "email",
              errors: [`Email might be invalid`],
            },
            {
              name: "password",
              errors: [`Password might be invalid`],
            },
          ]);
          setIsSubmitButtonLoading(false);
          return;
        }

        setCookie(null, "user_id", data.user.id, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        setCookie(null, "jwt", data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        const hasNoData =
          !data.user.given_name ||
          !data.user.family_name ||
          !data.user.organization_type ||
          !data.user.birth_date ||
          !data.user.gender ||
          !data.user.nationality;

        if (hasNoData) {
          Router.push(`/create-profile/1/${data.user.id}`);
          return;
        }

        Router.push(`/courses?category=all`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitButtonLoading(false);
      });
  };

  const handleForgotPasswordClick = () => {
    Router.push(`/forgot-password`, undefined, {
      scroll: false,
    });
  };

  const handlePasswordShowClick = () => {
    setIsPasswordShown(isPasswordShown ? false : true);
  };

  const handleSignUpRedirectionClick = () => {
    Router.push(`/sign-up`, undefined, {
      scroll: false,
    });
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

          <div className="log-in-container">
            <div className="log-in-title">{t("log-in")}</div>
            <div className="sign-up-container">
              <div className="login-sub-text">{t("signUpSubText")}</div>
              <div
                className="login-text"
                onClick={handleSignUpRedirectionClick}
              >
                {t("signUp")}
              </div>
            </div>
            <Form
              form={loginForm}
              className="log-in-form-container"
              layout="vertical"
              onFinish={handleLoginFinish}
              requiredMark={false}
            >
              <Form.Item
                label={t("emailAddress")}
                className="email-container"
                name="email"
                rules={[{ required: true, message: `${t("emailValidation")}` }]}
              >
                <Input className="log-in-input" />
              </Form.Item>
              <Form.Item
                label={t("password")}
                className="password-container"
                name="password"
                rules={[{ required: true, message: `${t("enterPassword")}` }]}
              >
                <Input
                  className="log-in-input"
                  type={isPasswordShown ? "text" : "password"}
                  suffix={
                    <>
                      <Button
                        className="password-shown-btn"
                        type="link"
                        onClick={handlePasswordShowClick}
                      >
                        <PreviewPassword width="22" height="15" />
                      </Button>
                    </>
                  }
                />
              </Form.Item>
              <div className="forgot-password-btn-container">
                <Button
                  className="forgot-password-btn"
                  type="link"
                  onClick={handleForgotPasswordClick}
                >
                  {t("forgotPassword")}
                </Button>
              </div>
              <Form.Item noStyle>
                <div className="login-btn-container">
                  <Button
                    className="log-in-btn"
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitButtonLoading}
                  >
                    {t("log-in")}
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LogIn;
