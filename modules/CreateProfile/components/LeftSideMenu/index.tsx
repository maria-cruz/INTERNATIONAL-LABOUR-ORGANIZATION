import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const LeftSideMenu = () => {
  const { t } = useTranslation("create-profile");

  const router = useRouter();

  const isActiveStepOne = router.query.steps === "1";
  const isActiveStepTwo = router.query.steps === "2";

  return (
    <div className="left-side-menu-container">
      <div className="left-side-menu">
        <div className="logo-container">
          <Image src="/images/logo-footer.svg" width={120} height={100} />
        </div>
        <div className="steps-container">
          <div className="step-container step-1">
            <div
              className={`step-number ${
                isActiveStepOne ? "-active-number" : ""
              }`}
            >
              1
            </div>
            <div
              className={`step-text ${isActiveStepOne ? "-active-text" : ""}`}
            >
              {t("createYourProfile")}
            </div>
          </div>
          <div className="step-container">
            <div
              className={`step-number ${
                isActiveStepTwo ? "-active-number" : ""
              }`}
            >
              2
            </div>
            <div
              className={`step-text ${isActiveStepTwo ? "-active-text" : ""}`}
            >
              {t("profilePreview")}
            </div>
          </div>
        </div>

        <div className="menu-title-container">
          {t("rightsAndResponsibilities")}
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
