import React from "react";
import Flag from "@common/components/Icons/Flag";
import OpenBook from "@common/components/Icons/OpenBook";
import Trophy from "@common/components/Icons/Trophy";
import Button from "antd/lib/button";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
const HowItWorks = () => {
  const { t } = useTranslation("how-it-works");

  return (
    <div className="how-it-works-container">
      <div className="how-it-works">
        <div className="how-it-works-title-container">{t("howItWorks")}</div>
        <div className="how-it-works-icon-and-description-container">
          <div className="icon-container">
            <div className="icon-wrapper">
              <Flag fill="#EE161F" height="73" width="71" />
            </div>
            <div className="icon-wrapper">
              <OpenBook fill="#EE161F" height="76.5" width="78" />
            </div>
            <div className="icon-wrapper">
              <Trophy fill="#EE161F" height="76.5" width="78" />
            </div>
          </div>
          <div className="divider-container">
            <div className="divider-vertical" />
          </div>
          <div className="how-it-works-description-container">
            <div className="start-unit-container">
              <div className="flag-icon-wrapper">
                <Flag fill="#EE161F" className="flag-icon" />
              </div>
              <div className="start-unit">
                <div className="description-title-container">
                  {t("startUnit")}
                </div>
                <div className="description-container">
                  {t("startUnitDescription")}
                </div>
              </div>
            </div>
            <div className="assessments-container">
              <div className="flag-icon-wrapper">
                <OpenBook fill="#EE161F" className="open-book-icon" />
              </div>
              <div className="assessments">
                <div className="description-title-container">
                  {t("learnAndCompleteAssessments")}
                </div>
                <div className="description-container">
                  {t("learnAndCompleteAssessmentsDescription")}
                </div>
              </div>
            </div>
            <div className="get-certified-container">
              <div className="flag-icon-wrapper">
                <Trophy fill="#EE161F" className="trophy-icon" />
              </div>
              <div className="get-certified">
                <div className="description-title-container">
                  {t("getCertified")}
                </div>
                <div className="description-container">
                  {t("getCertifiedDescription")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="done-button-container">
          <Link href="/courses?category=all">
            <Button className="done-btn" type="primary">
              Done
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
