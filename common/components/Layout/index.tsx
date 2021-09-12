import React, { ReactNode } from "react";
import Main, { MainProps } from "@common/components/Layout/Main";
import Header from "@common/components/Layout/Header";
import Footer, { FooterProps } from "@common/components/Layout/Footer";
import Background, {
  BackgroundProps,
} from "@common/components/Layout/Background";

interface LayoutProps {
  header?: ReactNode;
  children?: ReactNode;
  mainProps?: MainProps;
  backgroundProps?: BackgroundProps;
  footerProps?: FooterProps;
}

const Layout = ({
  header,
  children,
  mainProps,
  backgroundProps,
  footerProps,
}: LayoutProps) => {
  return (
    <div className="layout">
      <Background {...backgroundProps} />
      {header}
      <Main {...mainProps}>{children}</Main>
      <Footer {...footerProps} />
    </div>
  );
};

export default Layout;
export { Header, Footer };
