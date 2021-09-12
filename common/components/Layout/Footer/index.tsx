import React from "react";
import styles from "./styles.module.scss";

export interface FooterProps {
  isVisible?: boolean;
}

const Footer = ({ isVisible = true }: FooterProps) => {
  return (
    <footer
      className={`${styles["footer"]} ${isVisible ? "" : "_undisplayed"}`}
    ></footer>
  );
};

export default Footer;
