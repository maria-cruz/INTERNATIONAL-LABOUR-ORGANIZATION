import React, { useState } from "react";
import Image from "next/image";
import Form, { FormInstance } from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import useTranslation from "next-translate/useTranslation";
import Layout, { Header } from "@common/components/Layout";
import SignUpBg from "@public/images/sign-up-bg.jpg";
import PasswordRule from "@common/components/PasswordRule";
import isEmpty from "lodash/isEmpty";
import SignUpBgMobile from "@public/images/sign-up-mobile.jpg";
import axios from "axios";
import { useRouter } from "next/router";

import {
  isAtleastOneNumberRegex,
  hasUppercaseRegex,
  hasLowercaseRegex,
} from "./regex";
import PreviewPassword from "@common/components/Icons/PreviewPassword";
interface HandleResetPasswordFinishProps {
  newPassword: string;
}

const ResetPassword = () => {
  const router = useRouter();
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState(false);
  const [resetPasswordForm] = Form.useForm();
  const locale = router?.locale ?? "en";
  const resetPasswordCode = router?.query?.code;

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

  const handleResetPasswordFinish = (value: HandleResetPasswordFinishProps) => {
    if (!resetPasswordCode) return;
    if (!value?.newPassword) return;

    setIsSubmitButtonLoading(true);
    axios
      .post(`${process.env.API_URL}/auth/reset-password`, {
        code: resetPasswordCode,
        password: value?.newPassword,
        passwordConfirmation: value?.newPassword,
      })
      .then((data: any) => {
        console.log("Your user's password has been changed.");
        router.push(`/log-in`, "", { locale: locale });
      })
      .catch((error) => {
        resetPasswordForm.setFields([
          {
            name: "newPassword",
            errors: [`Something went wrong.`],
          },
        ]);
        console.log("An error occurred:", error.response);
        setIsSubmitButtonLoading(false);
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

    setPasswordRule({
      ...passwordRule,
      isLongerThanSevenChars,
      isAtleastOneNumber,
      hasUppercase,
      hasLowercase,
    });
    resetPasswordForm.setFields([{ name: "newPassword", errors: [] }]);
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

      if (isEmptyNewPassword)
        return Promise.reject("Please enter a new password");

      if (!isCheckAllPasswordRule)
        return Promise.reject("Please enter a valid password.");

      return Promise.resolve();
    },
  });

  const handlePasswordShowClick = () => {
    setIsPasswordShown(isPasswordShown ? false : true);
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
              <div className="sign-up-title">Reset your password</div>
              <div className="login-container">
                <div className="login-sub-text">
                  Please provide a new password to continue using your account.
                </div>
              </div>
              <Form
                form={resetPasswordForm}
                className="sign-up-form-container"
                layout="vertical"
                onFinish={handleResetPasswordFinish}
                requiredMark={false}
                validateTrigger="submit"
              >
                <Form.Item
                  label="New password"
                  className="password-container"
                  name="newPassword"
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
                          loading={isSubmitButtonLoading}
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
                <Form.Item noStyle>
                  <div className="reset-password-btn-container">
                    <Button
                      className="reset-password-btn"
                      type="primary"
                      htmlType="submit"
                      loading={isSubmitButtonLoading}
                    >
                      Reset password
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

export default ResetPassword;
