import React from "react";
import Image from "next/image";
import MinistryOfLabourLogo from "@public/images/logo.png";
import AgencyLogo from "@public/images/italian-agency-logo.png";
import AliLogo from "@public/images/sponsors/ali-logo.png";
import FenasolLogo from "@public/images/fenasol-logo.jpeg";
import WiscLogo from "@public/images/wisc-international-logo.png";
import IloLogo from "@public/images/ilo-logo.png";
import UnicefLogo from "@public/images/unicef-logo.png";
import Logo from "@public/images/supporters-logo.svg";
import Carousel from "antd/lib/carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Partners = ({
  subheading = "This is a National Initiative with the Support of the Following Partners",
}) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    pauseOnHover: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    touchThreshold: 1000,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="partners-section">
      <span className="partners-section-title">{subheading}</span>
      <div className="partners-section-logos">
        <Carousel {...settings}>
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
              src={MinistryOfLabourLogo}
              width={258}
              height={100}
              alt="logo.png"
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
              src={AliLogo}
              width={291}
              height={176}
              placeholder="blur"
              alt="ali-logo.png"
            />
          </div>
          <div className="carousel-image-container">
            <Image
              src={FenasolLogo}
              width={190}
              height={200}
              placeholder="blur"
              alt="@public/images/fenasol-logo.jpeg"
            />
          </div>
          <div className="carousel-image-container">
            <Image
              src={WiscLogo}
              width={400}
              height={100}
              placeholder="blur"
              alt="@public/images/wisc-international-logo.png"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
