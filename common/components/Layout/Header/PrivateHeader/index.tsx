import React, { useState } from "react";
import NavLink from "@common/components/NavLink";
import Button from "antd/lib/button";
import Select from "antd/lib/select";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@public/images/logo.svg";
import LogoMobile from "@public/images/logo-footer.svg";
import HamburgerMenu from "@common/components/Icons/HamburgerMenu";
import Dropdown from "antd/lib/dropdown";
import Menu from "antd/lib/menu";
import HamburgerMenuActive from "@common/components/Icons/HamburgerMenuActive";

const { Option } = Select;
interface HeaderProps {
  title?: string;
  gap?: string;
  className?: string;
}

const PrivateHeader = ({ gap = "0rem", className = "" }: HeaderProps) => {
  const router = useRouter();
  const [state, setState] = useState(false);
  const { pathname } = router;
  const handleEnglishClick = () => {
    router.push(`${pathname}`, "", { locale: "en" });
  };

  const handleArabicClick = () => {
    router.push(`${pathname}`, "", { locale: "ar" });
  };

  const handleVisibleChange = (e: any) => {
    setState(e);
  };

  const languageMenu = (
    <Menu className="dropdown-menu">
      <Menu.Item>
        <div onClick={handleEnglishClick}>English</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={handleArabicClick}> العربية</div>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu className="dropdown-menu">
      <Menu.Item>
        <div className="menu-title">User account</div>
      </Menu.Item>
      <Menu.Item>
        <Dropdown
          overlay={languageMenu}
          placement="bottomRight"
          overlayClassName="language-menu-dropdown"
        >
          <div className="menu-title">Language</div>
        </Dropdown>
      </Menu.Item>
      <Menu.Item>
        <div className="menu-title">Log out</div>
      </Menu.Item>
    </Menu>
  );

  console.log(state ? "totoo" : "false");
  return (
    <header
      className={`private-header ${className}`}
      style={{ marginBottom: gap }}
    >
      <div className={"left-container"}>
        <NavLink href="/">
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
            Units
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
              {state ? (
                <HamburgerMenuActive width="44.59" height="30.71" />
              ) : (
                <HamburgerMenu width="44.59" height="30.71" />
              )}
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className={"right-container-mobile"}>
        <div className={"menu"}>
          {" "}
          <div className={"line"}></div>
          <div className={"line"}></div>
          <div className={"line"}></div>
        </div>
      </div>
    </header>
  );
};

export default PrivateHeader;
