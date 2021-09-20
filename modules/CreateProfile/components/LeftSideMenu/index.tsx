import React from "react";
import Image from "next/image";
import Link from "next/link";
const LeftSideMenu = () => {
  return (
    <div className="menu-step-container">
      <div className="menu-step">
        <div className="logo-container">
          <Image src="/images/logo.png" width={215} height={83.41} />
        </div>
        <div className="steps-container">
          <Link href="/create-profile/1/id">
            <div className="step-one-container">
              <div className="number-container">1</div>
              <div className="text-container">Create your profile</div>
            </div>
          </Link>
          <Link href="/create-profile/2/id">
            <div className="step-two-container">
              <div className="number-container">2</div>
              <div className="text-container">Profile preview</div>
            </div>
          </Link>{" "}
        </div>

        <div className="menu-title-container">
          <div className="title-container">
            Rights & Responsibilities at Work
          </div>
          <div className="description-container">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
