import React from "react";
import SuccessMessageIcon from "../Icons/SuccesMessage";
const SuccessMessage = ({ description = "", subDescription = "" }) => {
  return (
    <div className="contact-success-container">
      <div className="icon-container">
        <SuccessMessageIcon width="148" height="141" fill="#CCCCCC" />
      </div>

      <div className="success-description">
        <div className="sent-label">Message sent!</div>
        <div className="sent-description">
          <p className="message-upper-description">{description}</p>
          <p className="message-lower-description">{subDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
