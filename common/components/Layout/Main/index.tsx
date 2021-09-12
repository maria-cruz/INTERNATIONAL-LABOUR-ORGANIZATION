import React, { ReactNode } from "react";

export interface MainProps {
  children?: string | ReactNode;
  className?: string;
}

const Main = ({ children = "Main", className = "" }: MainProps) => {
  return <section className={`main ${className}`}>{children}</section>;
};

export default Main;
