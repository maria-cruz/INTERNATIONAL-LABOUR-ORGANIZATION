import React from "react";
import styles from "./styles.module.scss";

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
      <span className={styles["header-title"]}>{title}</span>
    </header>
  );
};

export default Header;
