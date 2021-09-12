import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

export interface MainProps {
  children?: string | ReactNode;
  className?: string;
}

const Main = ({ children = "Main", className = "" }: MainProps) => {
  return (
    <section className={`${styles["main"]} ${className}`}>{children}</section>
  );
};

export default Main;
