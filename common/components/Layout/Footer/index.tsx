import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import LogoFooter from "@public/images/logo-footer.svg";

const Footer = () => {
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
        <span className={styles["description"]}>
          Huqouqi fil 3amal is a learning application developed through an ILO
          project in partnership with government and NGO stakeholders across
          Lebanon. The objective of the app is to raise the awareness of
          training graduates and new entrants to the labour market on their
          rights and responsibilities as workers and to enhance the capacity and
          knowledge of NGOs providing vocational training.
        </span>
      </div>

      <div className={styles["menu-group"]}>
        <div className={styles["upper-menu"]}>
          <div className={styles["menu"]}>
            <span className={styles["menu-title"]}>General</span>
            <Link href={"/sign-up"}>Sign up</Link>
            <Link href={"/log-in"}>Log in</Link>
            <Link href={"/download-guide"}>Download guide</Link>
            <Link href={"/faq"}>FAQ</Link>
          </div>
          <div className={styles["menu"]}>
            <span className={styles["menu-title"]}>About us</span>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
            <Link href={"/terms-of-use"}>Terms of Use</Link>
            <Link href={"/contact-us"}>Contact us</Link>
          </div>
        </div>

        <div className={styles["menu"]}>
          <span className={styles["menu-title"]}>Follow</span>
          <Link href={"/sign-up"}>Facebook</Link>
          <Link href={"/log-in"}>Twitter</Link>
          <Link href={"/download-guide"}>Linkedin</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
