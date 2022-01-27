import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import LogoFooter from "@public/images/logo-footer.svg";
import useTranslation from "next-translate/useTranslation";
import Facebook from "@common/components/Icons/Facebook";
import Twitter from "@common/components/Icons/Twitter";
import LinkedIn from "@common/components/Icons/LinkedIn";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className={styles["footer"]}>
      <div className={styles["description-container"]}>
        <div className={styles["footer-logo-container"]}>
          <Image
            className={styles["footer-image"]}
            src={LogoFooter}
            alt="logo.svg"
          />
        </div>
        <span className={styles["description"]}>{t("footerDescription")}</span>
      </div>

      <div className={styles["menu-group"]}>
        <div className={styles["upper-menu"]}>
          <div className={styles["menu"]}>
            <span className={styles["menu-title"]}>{t("general")}</span>
            <Link href={"/sign-up"}>{t("signUp")}</Link>
            <Link href={"/log-in"}>{t("logIn")}</Link>
            <Link href={"/download-guide"}>{t("downloadGuide")}</Link>
            <Link href={"/faq"}>{t("faq")}</Link>
          </div>
          <div className={styles["menu"]}>
            <span className={styles["menu-title"]}>{t("aboutUs")}</span>
            <Link href={"/about-us#contact-us"}>{t("contactUs")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
