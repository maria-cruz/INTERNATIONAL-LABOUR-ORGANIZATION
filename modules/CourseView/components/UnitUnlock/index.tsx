import Button from "antd/lib/button";
import UnlockedIcon from "@common/components/Icons/Unlocked";
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

  const handleSkipClick = () => {
    setIsVisible(false);
  };

  const handleContinueClick = () => {
    // Reroute the user to the next unit
    // router.push("/log-in");
  };
  return (
    <section
      className={classNames("unit-unlock-container", {
        _undisplay: !isVisible,
      })}
    >
      <div className="unit-unlock-wrapper">
        <div className="unlocked-icon">
          <UnlockedIcon />
        </div>
        <div className="heading-container">{`Unit 3 ${t(
          "unit-unlock-message"
        )}`}</div>
        <div className="subheading-container ">
          <p>{`Social Security And Work Emergencies.`}</p>
        </div>
        <div className="description-container ">{t("description")}</div>
        <Button onClick={handleSkipClick} type="link" className="unit-skip-btn">
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
