import React from "react";
import Button from "antd/lib/button";
import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Home = () => {
  const { t } = useTranslation("home");
  const router = useRouter();
  const locale = router?.locale;

  const handleLoginButtonClick = () => {
    router.push(`/log-in`, "", { locale: locale });
  };

  const handleSignUpButtonClick = () => {
    router.push(`/sign-up`, "", { locale: locale });
  };

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
        <Button
          onClick={handleLoginButtonClick}
          type="primary"
          className={styles["log-in-btn"]}
        >
          {t("logIn")}
        </Button>
        <Button
          onClick={handleSignUpButtonClick}
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
