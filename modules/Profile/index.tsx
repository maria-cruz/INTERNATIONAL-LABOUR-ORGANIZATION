import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Button from "antd/lib/button";
import useRouter from "next/router";
import moment from "moment";
import nationalities from "@common/constants/nationalities";
import useTranslation from "next-translate/useTranslation";
import { SAMPLE_DATA_ORGANIZATION_TYPE } from "@common/constants/organizationType";
import { GENDER, MONTHS } from "@modules/CreateProfile/helpers/constants";

interface ProfileData {
  nationality: string;
  given_name: string;
  family_name: string;
  organization_type: string;
  email: string;
  organization_name: string;
  phone_number: string;
  gender: string;
  birth_date: string;
}
interface ProfileProps {
  profileData: ProfileData;
}
const Profile = ({ profileData }: ProfileProps) => {
  const { t } = useTranslation("create-profile");

  const { router } = useRouter;

  const currentNationalities = nationalities.filter(
    (nationality) => nationality.countryCode === profileData.nationality
  );

  const nationality = currentNationalities.map(
    (currentNationality) => currentNationality.nationality
  );

  const handleEditProfileClick = () => {
    router?.push("/profile/edit");
  };

  const checkOrganizationType = SAMPLE_DATA_ORGANIZATION_TYPE.find(
    (item) => item.value === profileData.organization_type
  );

  const organizationType = checkOrganizationType?.key
    ? checkOrganizationType.key
    : "";

  const checkGender = GENDER.find((item) => item.value === profileData.gender);

  const gender = checkGender?.key ? checkGender.key : "";

  const checkMonth = moment(profileData.birth_date).month();

  const day = moment(profileData.birth_date).date();
  const year = moment(profileData.birth_date).year();

  const compareMonth = MONTHS.find((item) => item.value === checkMonth);

  const month = compareMonth?.key ? compareMonth.key : "";

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="profile-preview-section">
        <div className="profile-preview-container">
          <div className="profile-preview">
            <div className="profile-title">
              <div className="title-container">{t("profilePreview")}</div>
              <div className="description-container">
                {t("profilePreviewDescription")}
              </div>
            </div>
            <div className="name-text">{`${profileData.given_name} ${profileData.family_name}`}</div>
            <div className="organization-type-container">
              <div className="organization-type-text">
                {t(organizationType)}
              </div>
            </div>
            <div className="profile-preview-column">
              <div className="email-container">
                <div className="text">{t("emailNotRequired")}</div>
                <div className="sub-text email-space-bottom">
                  {profileData.email}
                </div>
                <div className="verify-email-text">
                  Verify your email address Resend Verification
                </div>
              </div>
              <div className="organization-name-container">
                <div className="text">{t("organizationName")}</div>
                <div className="sub-text">{profileData.organization_name}</div>
              </div>
            </div>
            <div className="profile-preview-column preview-space-bottom">
              <div className="phone-number-container">
                <div className="text">{t("phoneNumber")}</div>
                <div className="sub-text">{profileData.phone_number}</div>
              </div>
              <div className="birthday-container">
                <div className="text">{t("dateOfBirth")}</div>
                <div className="sub-text">{`${t(month)} ${day}, ${year}`}</div>
              </div>
            </div>
            <div className="profile-preview-column space-bottom">
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
                className="btn-submit"
                type="primary"
                onClick={handleEditProfileClick}
              >
                {t("editProfile")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
