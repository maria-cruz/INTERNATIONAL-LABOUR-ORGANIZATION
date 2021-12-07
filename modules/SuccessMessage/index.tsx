import Button from "antd/lib/button";
import SuccessMessageIcon from "@common/components/Icons/SuccesMessage";
import React from "react";
import router from "next/router";
import useTranslation from "next-translate/useTranslation";

const SuccessMessage = () => {
  const handleLogInClick = () => {
    router.push("/log-in");
  };
  const { t } = useTranslation("success");

  return (
    <section className="success-message-container">
      <div className="success-message-wrapper">
        <SuccessMessageIcon fill="#CCCCCC" width="147" height="140" />
        <div className="heading-container">
          {t("accountSuccessfullyCreated")}
        </div>
        <div className="subheading-container ">
          <p>{t("startLogIn")}</p>
        </div>
        <div className="description-container ">{t("description")}</div>
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

export default SuccessMessage;
