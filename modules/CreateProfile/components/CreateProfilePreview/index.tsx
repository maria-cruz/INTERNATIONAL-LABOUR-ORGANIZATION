import React from "react";
import Button from "antd/lib/button";

const CreateProfilePreview = () => {
  return (
    <div className="create-profile-preview-container">
      <div className="create-profile-preview">
        <div className="create-profile-title">
          <div className="title-container">Profile preview</div>
          <div className="description-container">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="name-text">Khashifa Omen</div>
        <div className="organization-type-text">
          Training/academic institution – Student/Trainee
        </div>
        <div className="create-profile-preview-column">
          <div className="email-container">
            <div className="text">Email</div>
            <div className="sub-text email-space-bottom">
              khashifaomer@email.com
            </div>
            <div className="verify-email-text">
              Verify your email address Resend Verification
            </div>
          </div>
          <div className="organization-name-container">
            <div className="text">Organization name</div>
            <div className="sub-text">Tafawaq Academic Institution</div>
          </div>
        </div>
        <div className="create-profile-preview-column preview-space-bottom">
          <div className="phone-number-container">
            <div className="text">Your phone number</div>
            <div className="sub-text">032345678</div>
          </div>
          <div className="birthday-container">
            <div className="text">Date of birth</div>
            <div className="sub-text">Feb 14, 1986</div>
          </div>
        </div>
        <div className="create-profile-preview-column space-bottom">
          <div className="gender-container">
            <div className="text">Sex</div>
            <div className="sub-text">Female</div>
          </div>
          <div className="nationality-container">
            <div className="text">Nationality</div>
            <div className="sub-text">Lebanese</div>
          </div>
        </div>
        <div className="preview-button-container">
          <Button className="btn-back" type="link">
            Back
          </Button>
          <Button className="btn-submit" type="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfilePreview;
