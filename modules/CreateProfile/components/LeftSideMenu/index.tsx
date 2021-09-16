import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const LeftSideMenu = () => {
  return (
    <div className={styles["menu-step-container"]}>
      <div className={styles["logo-container"]}>
        <Image src="/images/logo.png" width={215} height={83.41} />
      </div>
      <div className={styles["steps-container"]}>
        <div className={styles["step-one-container"]}>
          <div className={styles["number-container"]}>1</div>
          <div className={styles["text-container"]}>Create your profile</div>
        </div>
        <div className={styles["step-two-container"]}>
          <div className={styles["number-container"]}>2</div>
          <div className={styles["text-container"]}>Profile preview</div>
        </div>
      </div>
      <div className={styles["menu-title-container"]}>
        <div className={styles["title-container"]}>
          Rights & Responsibilities at Work
        </div>
        <div className={styles["description-container"]}>
          Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
