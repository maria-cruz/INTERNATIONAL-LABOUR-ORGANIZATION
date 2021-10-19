import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Button from "antd/lib/button";
import useRouter from "next/router";
import moment from "moment";
import nationalities from "@common/constants/nationalities";

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
  const { router } = useRouter;

  const checkNationality = nationalities.filter(
    (item) => item.countryCode === profileData.nationality
  );

  const nationality = checkNationality.map((item) => item.nationality);
  const handleEditProfileClick = () => {
    router?.push("/profile/edit");
  };
  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="profile-preview-section">
        <div className="profile-preview-container">
          <div className="profile-preview">
            <div className="profile-title">
              <div className="title-container">Profile preview</div>
              <div className="description-container">
                Please ensure your profile details are up to date.
              </div>
            </div>
            <div className="name-text">{`${profileData.given_name} ${profileData.family_name}`}</div>
            <div className="organization-type-text">
              {profileData.organization_type}
            </div>
            <div className="profile-preview-column">
              <div className="email-container">
                <div className="text">Email</div>
                <div className="sub-text email-space-bottom">
                  {profileData.email}
                </div>
                <div className="verify-email-text">
                  Verify your email address Resend Verification
                </div>
              </div>
              <div className="organization-name-container">
                <div className="text">Organization name</div>
                <div className="sub-text">{profileData.organization_name}</div>
              </div>
            </div>
            <div className="profile-preview-column preview-space-bottom">
              <div className="phone-number-container">
                <div className="text">Your phone number</div>
                <div className="sub-text">{profileData.phone_number}</div>
              </div>
              <div className="birthday-container">
                <div className="text">Date of birth</div>
                <div className="sub-text">
                  {moment(profileData.birth_date).format("ll")}
                </div>
              </div>
            </div>
            <div className="profile-preview-column space-bottom">
              <div className="gender-container">
                <div className="text">Sex</div>
                <div className="sub-text">{profileData.gender}</div>
              </div>
              <div className="nationality-container">
                <div className="text">Nationality</div>
                <div className="sub-text">{nationality}</div>
              </div>
            </div>
            <div className="preview-button-container">
              <Button
                className="btn-submit"
                type="primary"
                onClick={handleEditProfileClick}
              >
                Edit profile
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
