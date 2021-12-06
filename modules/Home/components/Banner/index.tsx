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
        <b>{t("rights")}</b> {t("and")} <b>{t("responsibilities")}</b> {t("at")}{" "}
        <b>{t("work")}</b>
      </span>
      <span className={styles["banner-description"]}>
        {t("bannerDescription")}
      </span>

      <div className={styles["button-container"]}>
        <Button href="/log-in" type="primary" className={styles["log-in-btn"]}>
          {t("logIn")}
        </Button>
        <Button
          href="/sign-up"
          type="default"
          className={styles["sign-up-btn"]}
        >
          {t("signUp")}
        </Button>
      </div>
    </section>
  );
};

export default Home;
