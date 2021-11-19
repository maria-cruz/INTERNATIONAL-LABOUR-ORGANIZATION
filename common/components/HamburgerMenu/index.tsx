import React, { useState } from "react";
import Drawer from "antd/lib/drawer";
import NavLink from "@common/components/NavLink";
import Select from "antd/lib/select";
import classNames from "classnames";
import { useRouter } from "next/router";

const { Option } = Select;

const HamburgerMenu = () => {
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
        <NavLink href="/sign-up" exact={true}>
          Sign up
        </NavLink>
        <NavLink href="/log-in">Log in</NavLink>
        <NavLink href="/download-guide">Download Guide</NavLink>
        <NavLink href="/faq">FAQ</NavLink>
        <NavLink href="/about-us">About Us</NavLink>

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
