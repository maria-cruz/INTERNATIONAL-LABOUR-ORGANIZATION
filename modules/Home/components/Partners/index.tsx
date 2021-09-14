import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Partners = () => {
  return (
    <section className={styles["partners-section"]}>
      <span className={styles["partners-section-title"]}>
        An International Labour Organization initiative with the help of the
        following partners
      </span>
      <div className={styles["partners-section-logos"]}>
        <Image src="/images/logo.png" width={303} height={117} />
        <Image src="/images/logo.png" width={303} height={117} />
        <Image src="/images/logo.png" width={303} height={117} />
        <Image src="/images/logo.png" width={303} height={117} />
      </div>
    </section>
  );
};

export default Partners;
