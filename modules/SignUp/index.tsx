import React from "react";
import Image from "next/image";
import Form, { FormInstance } from "antd/lib/form";
import Input from "antd/lib/input";
import Checkbox from "antd/lib/checkbox";
import Button from "antd/lib/button";
import useTranslation from "next-translate/useTranslation";
import Layout, { Header } from "@common/components/Layout";
import SignUpBg from "@public/images/sign-up-bg.jpg";

import { setCookie } from "nookies";
import Router from "next/router";

interface HandleSignUpFinishProps {
  email: string;
  password: string;
}

const SignUp = () => {
  const [signUpForm] = Form.useForm();

  const { t } = useTranslation("sign-up");

  const handleSignUpFinish = (value: HandleSignUpFinishProps) => {
    const registerInfo = {
      username: value.email,
      email: value.email,
      password: value.password,
    };

    fetch(`${process.env.API_URL}/auth/local/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data?.statusCode === 400) {
          signUpForm.setFields([
            {
              name: "email",
              errors: [`${data?.message[0]?.messages[0]?.message}`],
            },
          ]);
          return;
        }

        Router.push("/log-in");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const checkCheckBox = (rule: any, value: any, callback: any) => {
    if (!value) {
      callback("Please agree the terms and conditions!");
    } else {
      callback();
    }
  };

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="sign-up-section">
        <div className="background">
          <Image
            src={SignUpBg}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <div className="banner-container">
          <div className="banner-description-container">
            <div className="banner-description-text">
              {t("description")}{" "}
              <span className="journey-text"> {t("descriptionEmphasis")} </span>
            </div>
          </div>
          <div className="sign-up-container">
            <div className="sign-up-title">{t("signUpTitle")}</div>
            <div className="login-container">
              <div className="login-sub-text">{t("loginSubText")}</div>
              <div className="login-text">{t("login")}</div>
            </div>
            <Form
              form={signUpForm}
              className="sign-up-form-container"
              layout="vertical"
              onFinish={handleSignUpFinish}
              requiredMark={false}
            >
              <Form.Item
                label={t("emailAddress")}
                className="email-container"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email.",
                  },
                  { type: "email", message: "The input is not valid E-mail!" },
                ]}
              >
                <Input className="sign-up-input" />
              </Form.Item>
              <Form.Item
                label={t("password")}
                className="password-container"
                name="password"
                rules={[
                  { required: true, message: "Please input your password." },
                  {
                    min: 8,
                    message: "Should be a minimum of 8 characters",
                  },
                ]}
              >
                <Input className="sign-up-input" type="password" />
              </Form.Item>
              <Form.Item
                name="termsAndCondition"
                valuePropName="checked"
                className="terms-and-condition-container"
                rules={[{ validator: checkCheckBox }]}
              >
                <Checkbox className="sign-up-checkbox">
                  {t("accept")}{" "}
                  <span className="terms-and-condition-text">
                    {t("termsAndCondition")}
                  </span>
                </Checkbox>
              </Form.Item>
              <Form.Item
                name="newsAndUpdate"
                valuePropName="checked"
                className="sign-up-checkbox-container"
              >
                <Checkbox className="sign-up-checkbox">
                  {t("newAndUpdate")}
                </Checkbox>
              </Form.Item>
              <Form.Item noStyle>
                <Button
                  className="sign-up-btn"
                  type="primary"
                  htmlType="submit"
                >
                  {t("signUp")}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
