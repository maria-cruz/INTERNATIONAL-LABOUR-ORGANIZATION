import React from "react";
import NavLink from "@common/components/NavLink";
import Button from "antd/lib/button";
import Select from "antd/lib/select";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@public/images/logo.svg";
import LogoMobile from "@public/images/logo-footer.svg";
import HamburgerMenu from "@common/components/HamburgerMenu";
import useTranslation from "next-translate/useTranslation";

const { Option } = Select;
interface HeaderProps {
  title?: string;
  gap?: string;
  className?: string;
}

const PublicHeader = ({ gap = "0rem", className = "" }: HeaderProps) => {
  const router = useRouter();

  const { pathname } = router;
  const handleEnglishClick = () => {
    router.push(`${pathname}`, "", { locale: "en" });
  };

  const handleArabicClick = () => {
    router.push(`${pathname}`, "", { locale: "ar" });
  };
  const { t } = useTranslation("common");

  return (
    <header className={`header ${className}`} style={{ marginBottom: gap }}>
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
          <NavLink href="/download-guide">{t("downloadGuide")}</NavLink>
          <NavLink href="/faq">{t("faq")}</NavLink>
          <NavLink href="/about-us">{t("aboutUs")}</NavLink>
          <NavLink className={"log-in-link"} href="/log-in">
            {t("logIn")}
          </NavLink>
          <NavLink href="/sign-up">
            <Button type="primary" size="large">
              {t("signUp")}
            </Button>
          </NavLink>
        </div>
        <div className={"divider"} />
        <div className={"language-select"}>
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

      <div className={"right-container-mobile"}>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default PublicHeader;
