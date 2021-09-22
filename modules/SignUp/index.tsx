import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import Form, { FormInstance } from "antd/lib/form";
import Input from "antd/lib/input";
import Checkbox from "antd/lib/checkbox";
import Button from "antd/lib/button";
import useTranslation from "next-translate/useTranslation";

const SignUp = () => {
  const [signUpForm] = Form.useForm();

  const { t } = useTranslation("sign-up");

  const handleSignUpFinish = (value: FormInstance) => {
    console.log("a", value);
  };
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="sign-up-section">
        <div className="background">
          <Image
            src="/images/sign-up-bg.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
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
            >
              <Form.Item
                label={t("emailAddress")}
                className="email-container"
                name="email"
              >
                <Input className="sign-up-input" />
              </Form.Item>
              <Form.Item
                label={t("password")}
                className="password-container"
                name="password"
              >
                <Input className="sign-up-input" type="password" />
              </Form.Item>
              <Form.Item
                name="termsAndCondition"
                valuePropName="checked"
                className="terms-and-condition-container"
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
