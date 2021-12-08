import React from "react";
import Button from "antd/lib/button";
import { useRouter } from "next/router";
import EmailUnfill from "@common/components/Icons/EmailUnFill";
import useTranslation from "next-translate/useTranslation";

const ResetPasswordMessage = () => {
  const { t } = useTranslation("reset-password-message");

  const router = useRouter();
  const locale = router?.locale ?? "en";

  const handleLogInClick = () => {
    router.push(`/log-in`, "", { locale: locale });
  };

  return (
    <section className="reset-password-message-container">
      <div className="success-message-wrapper">
        <EmailUnfill fill="#CCCCCC" width="132.85" height="105.71" />
        <div className="heading-container">{t("resetPasswordSent")}</div>
        <div className="subheading-container ">
          <p>{t("instructionSent")}</p>
        </div>

        <Button
          onClick={handleLogInClick}
          type="primary"
          className="success-message-btn "
        >
          {t("goToLogIn")}
        </Button>
      </div>
    </section>
  );
};

export default ResetPasswordMessage;
