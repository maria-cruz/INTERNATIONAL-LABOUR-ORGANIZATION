import React from "react";
import Flag from "@common/components/Icons/Flag";
import OpenBook from "@common/components/Icons/OpenBook";
import Trophy from "@common/components/Icons/Trophy";
import Button from "antd/lib/button";
const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <div className="how-it-works">
        <div className="how-it-works-title-container">How It Works?</div>
        <div className="how-it-works-icon-and-description-container">
          <div className="icon-container">
            <div className="icon-wrapper">
              <Flag fill="#CCCCCC" height="73" width="71" />
            </div>
            <div className="icon-wrapper">
              <OpenBook fill="#CCCCCC" height="76.5" width="78" />
            </div>
            <div className="icon-wrapper">
              <Trophy fill="#CCCCCC" height="76.5" width="78" />
            </div>
          </div>
          <div className="divider-container">
            <div className="divider-vertical" />
          </div>
          <div className="how-it-works-description-container">
            <div className="description-title-container">Start unit</div>
            <div className="description-container">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </div>
            <div className="description-title-container">
              Learn and fill up assessments
            </div>
            <div className="description-container">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </div>
            <div className="description-title-container">Get certified!</div>
            <div className="description-container">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </div>
          </div>
        </div>
        <div className="done-button-container">
          <Button className="done-btn" type="primary">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
