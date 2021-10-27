import React from "react";
// import styles from "./styles.module.scss";
import NavLink from "@common/components/NavLink";
import Button from "antd/lib/button";
import Select from "antd/lib/select";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@public/images/logo.svg";
import LogoMobile from "@public/images/logo-footer.svg";
import PublicHeader from "./PublicHeader";
import PrivateHeader from "./PrivateHeader";
import includes from "lodash/includes";
const { Option } = Select;
interface HeaderProps {
  title?: string;
  gap?: string;
  className?: string;
}

const Header = ({ gap = "0rem", className = "" }: HeaderProps) => {
  const router = useRouter();
  const isActiveNavLink =
    includes(router?.pathname, "courses") ||
    includes(router?.pathname, "profile") ||
    includes(router?.pathname, "courses");
  return (
    <>
      <PublicHeader
        className={`${!isActiveNavLink ? className : "hide-menu"}`}
        gap={gap}
      />
      <PrivateHeader
        className={`${isActiveNavLink ? className : "hide-menu"}`}
        gap={gap}
      />
    </>
  );
};

export default Header;
