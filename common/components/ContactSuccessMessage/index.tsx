import React from "react";
import SuccessMessageIcon from "../Icons/SuccesMessage";
const ContactSuccessMessage = () => {
  return (
    <div className="contact-success-container">
      <div className="icon-container">
        <SuccessMessageIcon width="148" height="141" fill="#CCCCCC" />
      </div>

      <div className="success-description">
        <div className="sent-label">Message sent!</div>
        <div className="sent-description">
          <p className="message-upper-description">
            We have received your message and would like to thank you for
            writing to us. If your inquiry is urgent, please use the telephone
            number listed below to talk to one of our staff members.
          </p>
          <p className="message-lower-description">
            Otherwise, we will reply by email as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSuccessMessage;
