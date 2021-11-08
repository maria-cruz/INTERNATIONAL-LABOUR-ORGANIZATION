import Button from "antd/lib/button";
import SuccessMessageIcon from "@common/components/Icons/SuccesMessage";
import React from "react";
import router from "next/router";

const SuccessMessage = () => {
  const handleLogInClick = () => {
    router.push("/log-in");
  };
  return (
    <section className="success-message-container">
      <div className="success-message-wrapper">
        <SuccessMessageIcon fill="#CCCCCC" width="147" height="140" />
        <div className="heading-container">Account Successfully Created</div>
        <div className="subheading-container ">
          <p>
            Log in to start learning about your Rights & Responsibilities at
            Work.
          </p>
        </div>
        <div className="description-container ">
          Learn from a comprehensive training that let you learn about your
          rights and responsibilities at work to make you job ready. The
          training includes <span>3 units</span> and <span> 20 sessions</span> ,
          pass the training assessment with 70% score rate to successfully get a
          certificate.
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

export default SuccessMessage;
