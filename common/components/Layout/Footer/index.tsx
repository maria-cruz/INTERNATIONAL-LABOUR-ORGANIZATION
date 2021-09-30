import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div>
        <Image src="/images/logo.svg" width={110} height={110} />
      </div>
      <div className={styles["description-container"]}>
        <span className={styles["description"]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy
          eirmod tempor iLorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumyeirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et
        </span>
      </div>
      <div className={styles["menu-group"]}>
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
