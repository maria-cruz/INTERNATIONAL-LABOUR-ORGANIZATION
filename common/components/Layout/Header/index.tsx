import React from "react";
import styles from "./styles.module.scss";
import NavLink from "@common/components/NavLink";

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
          <NavLink href="/download-guide">Download Guide</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/">Log In</NavLink>
          <NavLink href="/sign-up">Sign up</NavLink>
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
