import React, { useState } from "react";
import Image from "next/image";
import Unit1Banner from "@public/images/unit1-banner.jpg";
import Button from "antd/lib/button";
import BackArrow from "@common/components/Icons/BackArrow";
import ForwardArrow from "@common/components/Icons/ForwardArrow";
import { useRouter } from "next/router";
import classNames from "classnames";
import MobileBanner from "@public/images/carousel-banner-mobile.jpg";
import useTranslation from "next-translate/useTranslation";
interface CarouselBannerProps {
  unit?: number | string;
  title?: string;
  prevSlug?: string;
  nextSlug?: string;
}

const CarouselBanner = ({
  unit = 0,
  title = "Untitled",
  prevSlug,
  nextSlug,
}: CarouselBannerProps) => {
  const [isStartButtonLoading, setIsStartButtonLoading] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();
  const slug = router?.query?.slug;

  const handleStartClick = () => {
    setIsStartButtonLoading(true);
    router.push(`/courses/view/${slug}`);
  };
  const handleBackArrowClick = () => {
    router.push(`/courses/preview/${prevSlug}`);
  };
  const handleForwardArrowClick = () => {
    router.push(`/courses/preview/${nextSlug}`);
  };

  return (
    <div className="carousel-banner-container">
      <div className="banner-container">
        <Image src={Unit1Banner} alt="unit1-banner.jpg" placeholder="blur" />
      </div>
      <div className="banner-mobile-container">
        <Image
          src={MobileBanner}
          alt="carousel-banner-mobile.jpg"
          placeholder="blur"
        />
      </div>
      <div className="bg-filter" />

      <div className="bg-description-container">
        <div className="unit-label">{`${t("unit")} ${unit}`}</div>

        <div className="title-container">
          <div
            className={classNames("back-icon", { _invisible: !prevSlug })}
            onClick={handleBackArrowClick}
          >
            <BackArrow width="3.6rem" height="4.3rem" fill="#8F949D" />
          </div>

          <span className="title">{title}</span>
          <div
            className={classNames("forward-icon", { _invisible: !nextSlug })}
            onClick={handleForwardArrowClick}
          >
            <ForwardArrow width="3.6rem" height="4.3rem" fill="#8F949D" />
          </div>
        </div>

        <Button
          onClick={handleStartClick}
          htmlType="submit"
          type="primary"
          className="start-btn"
          loading={isStartButtonLoading}
        >
          {t("startLesson")}
        </Button>
      </div>
    </div>
  );
};

export default CarouselBanner;
