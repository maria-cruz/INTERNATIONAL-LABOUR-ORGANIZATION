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
        <div>
          <Image src="/images/logo.png" width={303} height={117} />
        </div>
        <div>
          <Image src="/images/unicef-logo.png" width={289} height={178} />
        </div>
        <div>
          <Image
            src="/images/italian-agency-logo.png"
            width={229}
            height={189}
          />
        </div>
        <div>
          <Image src="/images/ilo-logo.png" width={326} height={117} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
