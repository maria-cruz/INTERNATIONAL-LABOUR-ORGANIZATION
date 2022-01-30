import Button from "antd/lib/button";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import React, { useState } from "react";
import router from "next/router";
import useTranslation from "next-translate/useTranslation";
import classNames from "classnames";

interface UnitUnlockProps {
  visible?: boolean;
}

const UnitUnlock = ({ visible = false }: UnitUnlockProps) => {
  const { t } = useTranslation("unit-unlock");

  const [isVisible, setIsVisible] = useState(visible);
  const [isContinueButtonLoading, setIsContinueButtonLoading] = useState(false);

  const handleSkipClick = () => {
    setIsVisible(false);
  };

  const handleContinueClick = () => {
    setIsContinueButtonLoading(true);
    router.push("/courses?category=all");
  };

  return (
    <section
      className={classNames("unit-unlock-container", {
        _undisplay: !isVisible,
      })}
    >
      <div className="unit-unlock-wrapper">
        <div className="unlocked-icon">
          <CheckCircleOutline width="120" height="120" />
        </div>
        <div className="heading-container">{t("heading")}</div>
        <div className="subheading-container ">
          <p>{t("subheading")}</p>
        </div>
        <div className="description-container ">{t("description")}</div>
        <Button onClick={handleSkipClick} type="link" className="unit-skip-btn">
          {t("skip")}
        </Button>
        <Button
          onClick={handleContinueClick}
          type="primary"
          className="unit-unlock-btn"
          loading={isContinueButtonLoading}
        >
          {t("continue")}
        </Button>
      </div>
    </section>
  );
};

export default UnitUnlock;
