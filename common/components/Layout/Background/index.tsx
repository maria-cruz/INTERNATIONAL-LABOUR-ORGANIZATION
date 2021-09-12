import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export interface BackgroundProps {
  src?: string;
}

const Background = ({ src }: BackgroundProps) => {
  if (!src) return null;

  return (
    <>
      <Image
        className={styles["background"]}
        src={src}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </>
  );
};

export default Background;
