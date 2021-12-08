import React from "react";
import Button from "antd/lib/button";
import { useRouter } from "next/router";
import EmailUnfill from "@common/components/Icons/EmailUnFill";
const ResetPasswordMessage = () => {
  const router = useRouter();
  const locale = router?.locale ?? "en";

  const handleLogInClick = () => {
    router.push(`/log-in`, "", { locale: locale });
  };

  return (
    <section className="reset-password-message-container">
      <div className="success-message-wrapper">
        <EmailUnfill fill="#CCCCCC" width="132.85" height="105.71" />
        <div className="heading-container">Reset password email sent</div>
        <div className="subheading-container ">
          <p>
            We’ve sent instructions on how to reset your password to your email.
            You should receive the email fairly quickly. If you can’t find it,
            try checking your spam folder.
          </p>
        </div>

        <Button
          onClick={handleLogInClick}
          type="primary"
          className="success-message-btn "
        >
          Go to Log In page
        </Button>
      </div>
    </section>
  );
};

export default ResetPasswordMessage;
