import React from "react";
import styles from "./styles.module.scss";

import Link from "next/link";

interface HeaderProps {
  title?: string;
  gap?: string;
  className?: string;
}

const Header = ({
  title = "Untitled",
  gap = "0rem",
  className = "",
}: HeaderProps) => {
  return (
    <header
      className={`${styles["header"]} ${className}`}
      style={{ marginBottom: gap }}
    >
      <div className={styles["left-container"]}>Logo</div>
      <div className={styles["right-container"]}>
        <div className={styles["menu"]}>
          <Link href="">Download Guide</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="">About Us</Link>
          <Link href="/">Log In</Link>
          <Link href="">Sign up</Link>
        </div>
        <div className={styles["divider"]} />
        <div className={styles["language-select"]}>
          <span> English</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
