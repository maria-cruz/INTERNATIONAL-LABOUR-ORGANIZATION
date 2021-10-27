import React from "react";
import Button, { ButtonProps } from "antd/lib/button";
import usePersistentState from "@common/methods/usePersistentState";
import nationalities from "@common/constants/nationalities";
import { MONTHS } from "@modules/CreateProfile/helpers/constants";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { defaultFormValues } from "@modules/CreateProfile/helpers/interface";

interface CreateProfilePreviewProps {
  onSubmitClick: ButtonProps["onClick"];
}

const CreateProfilePreview = ({ onSubmitClick }: CreateProfilePreviewProps) => {
  const [storeData] = usePersistentState("create-profile", defaultFormValues);

  const router = useRouter();

  const cookies = parseCookies();

  const checkMonth = MONTHS.filter((item) => item.value === storeData.month);

  const month = checkMonth.map((item) => item.label);

  const checkNationality = nationalities.filter(
    (item) => item.countryCode === storeData.nationality
  );

  const nationality = checkNationality.map((item) => item.nationality);

  const handleBackClick = () => {
    router?.push(`/create-profile/1/${cookies.user_id}`);
  };
  return (
    <div className="create-profile-preview-container">
      <div className="create-profile-preview">
        <div className="create-profile-title">
          <div className="title-container">Profile preview</div>
          <div className="description-container">
            Fill in your personal info and create your account to begin the
            course.
          </div>
        </div>
        <div className="name-text">{`${storeData.firstName} ${storeData.lastName}`}</div>
        <div className="organization-type-text">
          {storeData.organizationType}
        </div>
        <div className="create-profile-preview-column">
          <div className="email-container">
            <div className="text">Email</div>
            <div className="sub-text email-space-bottom">
              {storeData.emailAddress}
            </div>
            <div className="verify-email-text">
              Verify your email address Resend Verification
            </div>
          </div>
          <div className="organization-name-container">
            <div className="text">Organization name</div>
            <div className="sub-text">{storeData.organizationName}</div>
          </div>
        </div>
        <div className="create-profile-preview-column preview-space-bottom">
          <div className="phone-number-container">
            <div className="text">Your phone number</div>
            <div className="sub-text">{storeData.phoneNumber}</div>
          </div>
          <div className="birthday-container">
            <div className="text">Date of birth</div>
            <div className="sub-text">{`${month} ${storeData.day} ${storeData.year}`}</div>
          </div>
        </div>
        <div className="create-profile-preview-column space-bottom">
          <div className="gender-container">
            <div className="text">Sex</div>
            <div className="sub-text">{storeData.gender}</div>
          </div>
          <div className="nationality-container">
            <div className="text">Nationality</div>
            <div className="sub-text">{nationality}</div>
          </div>
        </div>
        <div className="preview-button-container">
          <Button
            className="preview-button"
            type="link"
            onClick={handleBackClick}
          >
            Back
          </Button>
          <Button
            className="preview-button"
            type="primary"
            onClick={onSubmitClick}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfilePreview;
