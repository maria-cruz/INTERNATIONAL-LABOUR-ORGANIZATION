import React from "react";
import Button, { ButtonProps } from "antd/lib/button";
import usePersistentState from "@common/methods/usePersistentState";
import nationalities from "@common/constants/nationalities";
import { GENDER, MONTHS } from "@modules/CreateProfile/helpers/constants";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { defaultFormValues } from "@modules/CreateProfile/helpers/interface";
import useTranslation from "next-translate/useTranslation";
import { SAMPLE_DATA_ORGANIZATION_TYPE } from "@common/constants/organizationType";

interface CreateProfilePreviewProps {
  onSubmitClick: ButtonProps["onClick"];
}

const CreateProfilePreview = ({ onSubmitClick }: CreateProfilePreviewProps) => {
  const { t } = useTranslation("create-profile");

  const [storeData] = usePersistentState("create-profile", defaultFormValues);

  const router = useRouter();

  const cookies = parseCookies();

  const checkMonth = MONTHS.filter((item) => item.value === storeData.month);

  const month = checkMonth.map((item) => item.key);

  const checkNationality = nationalities.filter(
    (item) => item.countryCode === storeData.nationality
  );

  const nationality = checkNationality.map((item) => item.nationality);

  const handleBackClick = () => {
    router?.push(`/create-profile/1/${cookies.user_id}`);
  };

  const checkOrganizationType = SAMPLE_DATA_ORGANIZATION_TYPE.find(
    (item) => item.value === storeData.organizationType
  );

  const organizationType = checkOrganizationType?.key
    ? checkOrganizationType.key
    : "";

  const checkGender = GENDER.find((item) => item.value === storeData.gender);

  const gender = checkGender?.key ? checkGender.key : "";

  return (
    <div className="create-profile-preview-container">
      <div className="create-profile-preview">
        <div className="create-profile-title">
          <div className="title-container">{t("profilePreview")}</div>
          <div className="description-container">
            {t("createProfileDescription")}
          </div>
        </div>
        <div className="name-text">{`${storeData.firstName} ${storeData.lastName}`}</div>
        <div className="organization-type-container">
          <div className="organization-type-text">{t(organizationType)}</div>
        </div>
        <div className="create-profile-preview-column">
          <div className="email-container">
            <div className="text">{t("emailNotRequired")}</div>
            <div className="sub-text email-space-bottom">
              {storeData.emailAddress}
            </div>
          </div>
          <div className="organization-name-container">
            <div className="text">{t("organizationName")}</div>
            <div className="sub-text">{storeData.organizationName}</div>
          </div>
        </div>
        <div className="create-profile-preview-column preview-space-bottom">
          <div className="phone-number-container">
            <div className="text">{t("phoneNumber")}</div>
            <div className="sub-text">{storeData.phoneNumber}</div>
          </div>
          <div className="birthday-container">
            <div className="text">{t("dateOfBirthNotRequired")}</div>
            <div className="sub-text">{`${t(month.toString())} ${
              storeData.day
            } ${storeData.year}`}</div>
          </div>
        </div>
        <div className="create-profile-preview-column space-bottom">
          <div className="gender-container">
            <div className="text">{t("sex")}</div>
            <div className="sub-text">{t(gender)}</div>
          </div>
          <div className="nationality-container">
            <div className="text">{t("nationality")}</div>
            <div className="sub-text">{nationality}</div>
          </div>
        </div>
        <div className="preview-button-container">
          <Button
            className="preview-button"
            type="link"
            onClick={handleBackClick}
          >
            {t("back")}
          </Button>
          <Button
            className="preview-button"
            type="primary"
            onClick={onSubmitClick}
          >
            {t("submit")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfilePreview;
