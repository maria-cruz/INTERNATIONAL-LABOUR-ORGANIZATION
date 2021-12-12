import React, { useState } from "react";
import Drawer from "antd/lib/drawer";
import NavLink from "@common/components/NavLink";
import Select from "antd/lib/select";
import classNames from "classnames";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const { Option } = Select;

interface HamburgerMenuProps {
  type: "public" | "private";
}

const HamburgerMenu = ({ type }: HamburgerMenuProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  const handleHamburgerMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleEnglishClick = () => {
    router.push(`${pathname}`, "", { locale: "en" });
  };

  const handleArabicClick = () => {
    router.push(`${pathname}`, "", { locale: "ar" });
  };

  const handleLogOutClick = () => {
    //destroy cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    router.push("/");
  };

  const { t } = useTranslation("common");

  return (
    <>
      <button
        className={classNames("hamburger-menu", { active: isDrawerOpen })}
        onClick={handleHamburgerMenuClick}
      >
        <div className={"line line-1"}></div>
        <div className={"line line-2"}></div>
        <div className={"line line-3"}></div>
      </button>

      <Drawer
        className={"hamburger-menu-drawer"}
        title="Drawer with extra actions"
        placement={"top"}
        visible={isDrawerOpen}
      >
        {type === "public" ? (
          <>
            <NavLink href="/sign-up" exact={true}>
              {t("signUp")}
            </NavLink>
            <NavLink href="/log-in"> {t("logIn")}</NavLink>
            <NavLink href="/download-guide">{t("downloadGuide")}</NavLink>
            <NavLink href="/faq">{t("faq")}</NavLink>
            <NavLink href="/about-us">{t("aboutUs")}</NavLink>
          </>
        ) : (
          <>
            <NavLink href="/courses" exact={true}>
              {t("menu")}
            </NavLink>
            <NavLink href="/profile">{t("userAccount")}</NavLink>
            <div className="nav-link" onClick={handleLogOutClick}>
              {t("logOut")}
            </div>
          </>
        )}

        <div className="lang-select-container">
          <Select
            className={"lang-select"}
            size="large"
            defaultValue="english"
            bordered={false}
            dropdownAlign={{ offset: [0, 4] }}
          >
            <Option value="english">
              <div onClick={handleEnglishClick}>English</div>
            </Option>
            <Option value="arabic">
              <div onClick={handleArabicClick}>العربية</div>
            </Option>
          </Select>
        </div>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
