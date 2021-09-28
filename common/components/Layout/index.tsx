import React, { ReactNode } from "react";
import Main, { MainProps } from "@common/components/Layout/Main";
import Header from "@common/components/Layout/Header";
import Footer from "@common/components/Layout/Footer";
import Background, {
  BackgroundProps,
} from "@common/components/Layout/Background";

interface LayoutProps {
  header?: ReactNode;
  children?: ReactNode;
  mainProps?: MainProps;
  backgroundProps?: BackgroundProps;
  className?: string;
}

const Layout = ({
  header,
  children,
  mainProps,
  backgroundProps,
}: LayoutProps) => {
  return (
    <div className="layout">
      <Background {...backgroundProps} />
      {header}
      <Main {...mainProps}>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
export { Header, Footer };
