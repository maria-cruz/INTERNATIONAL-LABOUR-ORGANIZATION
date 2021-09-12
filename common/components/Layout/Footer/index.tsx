import React from "react";

export interface FooterProps {
  isVisible?: boolean;
}

const Footer = ({ isVisible = true }: FooterProps) => {
  return (
    <footer className={`footer ${isVisible ? "" : "_undisplayed"}`}></footer>
  );
};

export default Footer;
