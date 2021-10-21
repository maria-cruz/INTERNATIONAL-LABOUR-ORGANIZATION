import React from "react";
import Image from "next/image";
import AgencyLogo from "@public/images/italian-agency-logo.png";
import IloLogo from "@public/images/ilo-logo.png";
import UnicefLogo from "@public/images/unicef-logo.png";
import Logo from "@public/images/supporters-logo.svg";
import Carousel from "antd/lib/carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Partners = ({
  subheading = "This app was developed by an ILO project with the following partners",
}) => {
  return (
    <section className="partners-section">
      <span className="partners-section-title">{subheading}</span>
      <div className="partners-section-logos">
        <div className="carousel-image-container">
          <Image
            src={Logo}
            width={189}
            height={189}
            alt="supporters-logo.svg"
          />
        </div>
        <div className="carousel-image-container">
          <Image
            src={UnicefLogo}
            width={289}
            height={178}
            placeholder="blur"
            alt="@public/images/unicef-logo.png"
          />
        </div>
        <div className="carousel-image-container">
          <Image
            src={AgencyLogo}
            width={229}
            height={189}
            placeholder="blur"
            alt="italian-agency-logo.png"
          />
        </div>
        <div className="carousel-image-container">
          <Image
            src={IloLogo}
            width={326}
            height={117}
            placeholder="blur"
            alt="@public/images/ilo-logo.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
