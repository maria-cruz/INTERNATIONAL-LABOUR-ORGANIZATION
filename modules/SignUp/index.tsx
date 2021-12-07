import React, { useState } from "react";
import Image from "next/image";
import Form, { FormInstance } from "antd/lib/form";
import Input from "antd/lib/input";
import Checkbox from "antd/lib/checkbox";
import Button from "antd/lib/button";
import useTranslation from "next-translate/useTranslation";
import Layout, { Header } from "@common/components/Layout";
import SignUpBg from "@public/images/sign-up-bg.jpg";
import Router from "next/router";
import PasswordRule from "../../common/components/PasswordRule";
import isEmpty from "lodash/isEmpty";
import SignUpBgMobile from "@public/images/sign-up-mobile.jpg";

import {
  isAtleastOneNumberRegex,
  hasUppercaseRegex,
  hasLowercaseRegex,
} from "./regex";
import PreviewPassword from "@common/components/Icons/PreviewPassword";
interface HandleSignUpFinishProps {
  email: string;
  password: string;
}

const SignUp = () => {
  const [signUpForm] = Form.useForm();

  const passwordRuleInitialState = {
    isLongerThanSevenChars: false,
    isAtleastOneNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSpecialCharacters: false,
  };

  const [passwordRule, setPasswordRule] = useState(passwordRuleInitialState);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

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

        Router.push("/success");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    const isLongerThanSevenChars = value.length > 7;

    const isAtleastOneNumber = isAtleastOneNumberRegex.test(value);
    const hasUppercase = hasUppercaseRegex.test(value);
    const hasLowercase = hasLowercaseRegex.test(value);

    console.log(isAtleastOneNumber);
    setPasswordRule({
      ...passwordRule,
      isLongerThanSevenChars,
      isAtleastOneNumber,
      hasUppercase,
      hasLowercase,
    });
    signUpForm.setFields([{ name: "newPassword", errors: [] }]);
  };

  const isCheckAllPasswordRule =
    passwordRule.isLongerThanSevenChars &&
    passwordRule.hasLowercase &&
    passwordRule.hasUppercase &&
    passwordRule.isAtleastOneNumber;

  const isShownPasswordRule =
    passwordRule.isLongerThanSevenChars ||
    passwordRule.hasLowercase ||
    passwordRule.hasUppercase ||
    passwordRule.isAtleastOneNumber;

  const newPasswordValidation = () => ({
    validator(_: {}, newPassword: string) {
      const isEmptyNewPassword = isEmpty(newPassword);

      if (isEmptyNewPassword) return Promise.reject(`${t("enterPassword")}`);

      if (!isCheckAllPasswordRule)
        return Promise.reject(`${t("passwordValidation")}`);

      return Promise.resolve();
    },
  });

  const handlePasswordShowClick = () => {
    setIsPasswordShown(isPasswordShown ? false : true);
  };

  const handleLogInRedirectionClick = () => {
    Router.push(`/log-in`, undefined, {
      scroll: false,
    });
  };

  return (
    <div className="sign-up-container">
      <Layout header={<Header title={"Header"} />}>
        <section className="sign-up-section">
          <div className="background">
            <Image src={SignUpBg} alt="sign-up-bg.jpg" placeholder="blur" />
          </div>
          <div className="background-mobile">
            <Image
              src={SignUpBgMobile}
              alt="sign-up-bg.jpg"
              placeholder="blur"
            />
          </div>
          <div className="sign-up-filter"></div>
          <div className="banner-container">
            <div className="banner-description-container">
              <div className="banner-description-text">
                {t("description")}{" "}
                <span className="journey-text">
                  {" "}
                  {t("descriptionEmphasis")}{" "}
                </span>
              </div>
            </div>
            <div className="sign-up-container">
              <div className="sign-up-title">{t("signUpTitle")}</div>
              <div className="login-container">
                <div className="login-sub-text">{t("loginSubText")}</div>
                <div
                  className="login-text"
                  onClick={handleLogInRedirectionClick}
                >
                  {t("login")}
                </div>
              </div>
              <Form
                form={signUpForm}
                className="sign-up-form-container"
                layout="vertical"
                onFinish={handleSignUpFinish}
                requiredMark={false}
                validateTrigger="submit"
              >
                <Form.Item
                  label={t("emailAddress")}
                  className="email-container"
                  name="email"
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
                  <Input className="sign-up-input" />
                </Form.Item>
                <Form.Item
                  label={t("password")}
                  className="password-container"
                  name="password"
                  rules={[newPasswordValidation]}
                >
                  <Input
                    className="sign-up-input"
                    type={isPasswordShown ? "text" : "password"}
                    onChange={handleNewPasswordChange}
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
                {isShownPasswordRule && (
                  <PasswordRule
                    isLongerThanSevenChars={passwordRule.isLongerThanSevenChars}
                    hasLowercase={passwordRule.hasLowercase}
                    hasUppercase={passwordRule.hasUppercase}
                    isAtleastOneNumber={passwordRule.isAtleastOneNumber}
                  />
                )}

                <Form.Item
                  name="newsAndUpdate"
                  valuePropName="checked"
                  className="sign-up-checkbox-container"
                >
                  <Checkbox className="sign-up-checkbox">
                    {t("newsAndUpdate")}
                  </Checkbox>
                </Form.Item>
                <Form.Item noStyle>
                  <div className="sign-up-btn-container">
                    <Button
                      className="sign-up-btn"
                      type="primary"
                      htmlType="submit"
                    >
                      {t("signUp")}
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default SignUp;
