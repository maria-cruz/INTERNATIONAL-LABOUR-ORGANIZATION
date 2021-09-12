import React from "react";
import styles from "./styles.module.scss";
import NavLink from "@common/components/NavLink";
import Button from "antd/lib/button";
import Select from "antd/lib/select";
import Image from "next/image";

const { Option } = Select;

interface HeaderProps {
  title?: string;
  gap?: string;
  className?: string;
}

const Header = ({ gap = "0rem", className = "" }: HeaderProps) => {
  return (
    <header
      className={`${styles["header"]} ${className}`}
      style={{ marginBottom: gap }}
    >
      <div className={styles["left-container"]}>
        <NavLink href="/">
          <Image src="/images/logo.png" width={215} height={83.41} />
        </NavLink>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["menu"]}>
          <NavLink href="/download-guide">Download Guide</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink className={styles["log-in-link"]} href="/log-in">
            Log In
          </NavLink>
          <NavLink href="/sign-up">
            <Button type="primary" size="large">
              Sign up
            </Button>
          </NavLink>
        </div>
        <div className={styles["divider"]} />
        <div className={styles["language-select"]}>
          <Select
            size="large"
            defaultValue="english"
            bordered={false}
            dropdownAlign={{ offset: [-100, 4] }}
          >
            <Option value="english">English</Option>
            <Option value="arabic">العربية</Option>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Header;
