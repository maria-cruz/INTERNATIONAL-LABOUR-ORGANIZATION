import React from "react";
import Image from "next/image";
import Button from "antd/lib/button";
import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles["banner-section"]}>
      <span className={styles["banner-title"]}>
        <b>Rights</b> {"&"} <b>Responsibilities</b> {"at"} <b>Work</b>
      </span>
      <span className={styles["banner-description"]}>
        {t("bannerDescription")}
      </span>

      <div className={styles["button-container"]}>
        <Button href="/log-in" type="primary" size="middle">
          {t("logIn")}
        </Button>
        <Button href="/sign-up" type="default" size="middle">
          {t("signUp")}
        </Button>
      </div>

      <div className={styles["watch-link-container"]}>
        <Image src="/images/play-circle-filled.svg" width={33} height={33} />
        <a className={styles["watch-link-text"]}>{t("watch")}</a>
      </div>
    </section>
  );
};

export default Home;
