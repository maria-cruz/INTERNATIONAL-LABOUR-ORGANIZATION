import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const LeftSideMenu = () => {
  const router = useRouter();

  const isActiveStepOne = router.query.steps === "1";
  const isActiveStepTwo = router.query.steps === "2";

  return (
    <div className="menu-step-container">
      <div className="menu-step">
        <div className="logo-container">
          <Image src="/images/logo-footer.svg" width={120} height={100} />
        </div>
        <div className="steps-container">
          <div className="step-one-container">
            <div
              className={`${
                isActiveStepOne ? "-active-number" : " number-container"
              }  `}
            >
              1
            </div>
            <div
              className={`${
                isActiveStepOne ? "-active-text" : "text-container"
              }  `}
            >
              Create your profile
            </div>
          </div>
          <div className="step-two-container">
            <div
              className={`${
                isActiveStepTwo ? "-active-number" : " number-container"
              }  `}
            >
              2
            </div>
            <div
              className={`${
                isActiveStepTwo ? "-active-text" : " text-container"
              }  `}
            >
              Profile preview
            </div>
          </div>
        </div>

        <div className="menu-title-container">
          <div className="title-container">
            Rights & Responsibilities at Work
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
