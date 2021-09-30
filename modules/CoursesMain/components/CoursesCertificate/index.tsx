import React from "react";
import Image from "next/image";
import HandWritingImage from "@public/images/hand-writing.jpg";
import Button from "antd/lib/button";
import Download from "@common/components/Icons/Download";

const CoursesCertificate = () => {
  return (
    <div className="courses-certificate-container">
      <div className="certificate-card-image-container">
        <Image
          src={HandWritingImage}
          width={553}
          height={303}
          layout="fixed"
          placeholder="blur"
          alt="courses-image"
        />
      </div>
      <div className="card-details-container">
        <div className="card-certificate">Certificate</div>
        <div className="card-title">ILO Participation certificate</div>
        <div className="spacer" />
        <div className="card-hover-details">
          <div className="spacer" />
          <div className="card-description">
            By the end of this unit, the trainee will be able to understand the
            nature of work contracts, their contents and types, and the rights
            and duties of each of the parties to the contract stipulated in the
            relevant laws and regulations and will also be able to distinguish
            between those subject to and excluded from the provisions of these
            laws.
          </div>
          <div className="spacer" />
          <div className="card-view-button">
            <Button type="primary" className="download-btn">
              <Download fill="#ffffff" width="1.4rem" height="1.7rem" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCertificate;
