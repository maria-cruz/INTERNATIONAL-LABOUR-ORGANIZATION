import Button from "antd/lib/button";
import SuccessMessageIcon from "@common/components/Icons/SuccesMessage";
import LockedIcon from "@common/components/Icons/Locked";
import React from "react";
import router from "next/router";
import useTranslation from "next-translate/useTranslation";

const UnitUnlock = () => {
  const { t } = useTranslation("unit-unlock");

  const handleSkipClick = () => {
    // Close The Unlock Screen
  };

  const handleContinueClick = () => {
    // Reroute the user to the next unit
    // router.push("/log-in");
  };

  return (
    <section className="unit-unlock-container">
      <div className="unit-unlock-wrapper">
        <div className="locked-icon">
          <LockedIcon />
        </div>
        <div className="heading-container">{`Unit 3 ${t(
          "unit-unlock-message"
        )}`}</div>
        <div className="subheading-container ">
          <p>{`Social Security And Work Emergencies.`}</p>
        </div>
        <div className="description-container ">{t("description")}</div>
        <Button onClick={handleSkipClick} className="unit-skip-btn">
          {t("skip-unit")}
        </Button>
        <Button
          onClick={handleContinueClick}
          type="primary"
          className="unit-unlock-btn "
        >
          {`${t("continue-unit")} 3`}
        </Button>
      </div>
    </section>
  );
};

export default UnitUnlock;
