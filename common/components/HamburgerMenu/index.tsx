import React, { useState } from "react";
import Drawer from "antd/lib/drawer";
import NavLink from "@common/components/NavLink";

const HamburgerMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleHamburgerMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <button className={"hamburger-menu"} onClick={handleHamburgerMenuClick}>
        <div className={"line"}></div>
        <div className={"line"}></div>
        <div className={"line"}></div>
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
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
