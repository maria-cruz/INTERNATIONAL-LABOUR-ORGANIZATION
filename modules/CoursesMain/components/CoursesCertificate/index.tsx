import React from "react";
import Image from "next/image";
import HandWritingImage from "@public/images/hand-writing.jpg";
import Button from "antd/lib/button";
import Download from "@common/components/Icons/Download";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const CoursesCertificate = () => {
  const { t } = useTranslation("courses");

  const router = useRouter();
  const handleDownloadClick = () => {
    router.push("/certificate");
  };

  return (
    <div className="courses-certificate-container">
      <div className="certificate-card-image-container">
        <Image
          src={HandWritingImage}
          width={553}
          height={303}
          placeholder="blur"
          alt="courses-image"
        />
      </div>
      <div className="card-details-container">
        <div className="card-certificate">{t("certificate")}</div>
        <div className="card-title">{t("certificateTitle")}</div>
        <div className="spacer" />
        <div className="card-hover-details">
          <div className="spacer" />
          <div className="card-description">
            {t("downloadCertificateDescription")}
          </div>
          <div className="spacer" />
          <div className="card-view-button">
            <Button
              onClick={handleDownloadClick}
              type="primary"
              className="download-btn"
            >
              <Download fill="#ffffff" width="1.4rem" height="1.7rem" />
              {t("download")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCertificate;
