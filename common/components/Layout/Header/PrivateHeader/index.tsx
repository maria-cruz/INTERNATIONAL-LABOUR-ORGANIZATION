import React, { useState } from "react";
import NavLink from "@common/components/NavLink";
import Button from "antd/lib/button";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@public/images/logo.svg";
import LogoMobile from "@public/images/logo-footer.svg";
import HamburgerMenuIcon from "@common/components/Icons/HamburgerMenu";
import Dropdown from "antd/lib/dropdown";
import Menu from "antd/lib/menu";
import HamburgerMenuActiveIcon from "@common/components/Icons/HamburgerMenuActive";
import HamburgerMenu from "@common/components/HamburgerMenu";
import useTranslation from "next-translate/useTranslation";

interface HeaderProps {
  title?: string;
  gap?: string;
  className?: string;
}

const PrivateHeader = ({ gap = "0rem", className = "" }: HeaderProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router?.locale;
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isLogOutButtonLoading, setIsLogOutButtonLoading] = useState(false);
  const [isUserAccountButtonLoading, setIsUserAccountButtonLoading] =
    useState(false);

  const isCoursesPreviewRoute = "/courses/preview/[slug]" === router.route;
  const isCoursesViewRouter = "/courses/view/[slug]" === router.route;
  const isCourses = "/courses" === router.route;

  const handleEnglishClick = () => {
    if (locale === "en") return;
    if (isCoursesPreviewRoute || isCoursesViewRouter || isCourses) {
      router.push(`/courses?category=all`, "", { locale: "en" });
      return;
    }
    router.push("", "", { locale: "en" });
    setIsMenuActive(false);
  };

  const handleArabicClick = () => {
    if (locale === "ar") return;
    if (isCoursesPreviewRoute || isCoursesViewRouter || isCourses) {
      router.push(`/courses?category=all`, "", { locale: "ar" });
      return;
    }
    router.push("", "", { locale: "ar" });
    setIsMenuActive(false);
  };

  const handleLogOutClick = () => {
    setIsLogOutButtonLoading(true);
    //destroy cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    router.push("/");

    setIsMenuActive(false);
  };
  const handleVisibleChange = (e: any) => {
    setIsMenuActive(e);
  };

  const handleLanguageClick = () => {
    setIsMenuActive(false);
  };

  const handleUserAccountClick = () => {
    setIsUserAccountButtonLoading(true);
    router.push("/profile");
  };

  const languageMenu = (
    <Menu className="dropdown-menu">
      <Menu.Item key="english">
        <Button className="btn-menu">
          <div onClick={handleEnglishClick}>English</div>
        </Button>
      </Menu.Item>
      <Menu.Item key="arabic">
        <Button className="btn-menu">
          <div onClick={handleArabicClick}> العربية</div>
        </Button>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu className="dropdown-menu">
      <Menu.Item key="user-account">
        <Button
          className="btn-menu"
          onClick={handleUserAccountClick}
          loading={isUserAccountButtonLoading}
        >
          <div className="menu-title">{t("userAccount")}</div>
        </Button>
      </Menu.Item>
      <Menu.Item key="language">
        <Dropdown
          overlay={languageMenu}
          placement="bottomRight"
          overlayClassName="language-menu-dropdown"
          trigger={["hover"]}
        >
          <Button onClick={handleLanguageClick} className="btn-menu">
            <div className="menu-title">{t("language")}</div>
          </Button>
        </Dropdown>
      </Menu.Item>
      <Menu.Item key="log-out">
        <Button className="btn-menu" loading={isLogOutButtonLoading}>
          <div className="menu-title" onClick={handleLogOutClick}>
            {t("logOut")}
          </div>
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <header
      className={`private-header ${className}`}
      style={{ marginBottom: gap }}
    >
      <div className={"left-container"}>
        <NavLink href="/courses?category=all">
          <div className={"logo-container"}>
            <Image src={Logo} height={79} alt="logo.svg" />
          </div>
          <div className={"logo-container-mobile"}>
            <Image
              src={LogoMobile}
              alt="logo-footer.svg"
              width={50}
              height={42}
            />
          </div>
        </NavLink>
      </div>
      <div className={"right-container"}>
        <div className={"menu"}>
          <NavLink href="/courses" query={"?category=all"}>
            {t("units")}
          </NavLink>
        </div>
        <div className="hamburger-menu-container">
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            trigger={["click"]}
            overlayClassName="hamburger-menu-dropdown"
            onVisibleChange={handleVisibleChange}
          >
            <Button className="btn-dropdown" type="link">
              {isMenuActive ? (
                <HamburgerMenuActiveIcon width="44.59" height="30.71" />
              ) : (
                <HamburgerMenuIcon width="44.59" height="30.71" />
              )}
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className={"right-container-mobile"}>
        <HamburgerMenu type="private" />
      </div>
    </header>
  );
};

export default PrivateHeader;
