import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import Form, { FormInstance } from "antd/lib/form";
import Input from "antd/lib/input";
import { setCookie } from "nookies";
import Router from "next/router";
import Button from "antd/lib/button";
import useTranslation from "next-translate/useTranslation";
import HomeBackground from "@public/images/group-cheerful-friends.jpg";

interface HandleLoginFinishProps {
  email: string;
  password: string;
}
const LogIn = () => {
  const [loginForm] = Form.useForm();

  const { t } = useTranslation("log-in");

  const handleLoginFinish = async (value: HandleLoginFinishProps) => {
    const loginInfo = {
      identifier: value.email,
      password: value.password,
    };

    await fetch(`${process.env.API_URL}/auth/local`, {
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
        if (data?.statusCode === 400) return;

        setCookie(null, "jwt", data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });

        Router.push("/create-profile/1/1");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="log-in-section">
        <div className="background">
          <Image
            src={HomeBackground}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="banner-container">
          <div className="banner-description-container">
            <div className="banner-description-text">
              <span className="emphasis-text">{t("rights")}</span> &{" "}
              <span className="emphasis-text"> {t("responsibilities")}</span> at
              <span className="emphasis-text"> {t("work")} </span>
            </div>
          </div>
          <div className="log-in-container">
            <div className="log-in-title">{t("log-in")}</div>
            <div className="login-container">
              <div className="login-sub-text">{t("signUpSubText")}</div>
              <div className="login-text">{t("sign-up")}</div>
            </div>
            <Form
              form={loginForm}
              className="log-in-form-container"
              layout="vertical"
              onFinish={handleLoginFinish}
            >
              <Form.Item
                label={t("emailAddress")}
                className="email-container"
                name="email"
              >
                <Input className="log-in-input" />
              </Form.Item>
              <Form.Item
                label={t("password")}
                className="password-container"
                name="password"
              >
                <Input className="log-in-input" type="password" />
              </Form.Item>
              <div className="forgot-password-btn-container">
                <Button
                  className="forgot-password-btn"
                  type="link"
                  htmlType="submit"
                >
                  {t("forgotPassword")}
                </Button>
              </div>
              <Form.Item noStyle>
                <Button className="log-in-btn" type="primary" htmlType="submit">
                  {t("log-in")}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LogIn;
