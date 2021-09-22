import React from "react";
import styles from "./styles.module.scss";
import NavLink from "@common/components/NavLink";
import Button from "antd/lib/button";
import Select from "antd/lib/select";
import Image from "next/image";
import Link from "next/link";
const { Option } = Select;
import useRouter from "next/router";
interface HeaderProps {
  title?: string;
  gap?: string;
  className?: string;
}

const Header = ({ gap = "0rem", className = "" }: HeaderProps) => {
  const router = useRouter;

  const handleEnglishClick = () => {
    router.push("/", "/", { locale: "en" });
  };

  const handleArabicClick = () => {
    router.push("/", "/", { locale: "ar" });
  };

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
            <Option value="english">
              <div onClick={handleEnglishClick}>English</div>
            </Option>

            <Option value="arabic">
              <div onClick={handleArabicClick}> العربية</div>
            </Option>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Header;
