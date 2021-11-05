import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Layout, { Header } from "@common/components/Layout";
import Banner from "@modules/Home/components/Banner";
import Partners from "@common/components/Partners";
import useTranslation from "next-translate/useTranslation";
import HomeBanner from "@public/images/bg-banner.jpg";
import IloDevices from "@public/images/ilo-devices.jpg";
import HomeBannerMobile from "@public/images/home-banner-mobile.jpg";
import IloDevicesMobile from "@public/images/ilo-devices-mobile.jpg";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <Layout header={<Header title={"Header"} />}>
      <div className={styles["background"]}>
        <Image
          alt="bg-banner.jpg"
          src={HomeBanner}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
        />
      </div>
      <div className={styles["bg-filter"]}>
        <Banner />
      </div>
      <div className={styles["home-banner-mobile"]}>
        <Image
          alt="home-banner-mobile.jpg"
          src={HomeBannerMobile}
          placeholder="blur"
        />
      </div>
      <Partners />

      <section className={styles["steps-section"]}>
        <div className={styles["steps-container"]}>
          <div className={styles["step-container"]}>
            <div className={styles["logo"]}>
              <Image src="/images/flag.svg" width={33} height={35} />
            </div>
            <div className={styles["text-group"]}>
              <div className={styles["title"]}>{t("title")}</div>
              <div className={styles["description"]}>{t("example")}</div>
            </div>
          </div>

          <div className={styles["step-container"]}>
            <div className={styles["logo"]}>
              <Image src="/images/open-book.svg" width={33} height={35} />
            </div>
            <div className={styles["text-group"]}>
              <div className={styles["title"]}>{t("assessmentsTitle")}</div>
              <div className={styles["description"]}>
                {t("assessmentsDescription")}
              </div>
            </div>
          </div>

          <div className={styles["step-container"]}>
            <div className={styles["logo"]}>
              <Image src="/images/trophy.svg" width={33} height={35} />
            </div>
            <div className={styles["text-group"]}>
              <div className={styles["title"]}>{t("certifiedTitle")}</div>
              <div className={styles["description"]}>
                {t("certifiedDescription")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["visitors-section"]}>
        <div>
          <div className={styles["main-count-container"]}>
            <span className={styles["title"]}>{t("visitorsToday")}</span>
            <span className={styles["count"]}>002897</span>
          </div>
        </div>
        <div className={styles["sub-count-group"]}>
          <div className={styles["sub-count-container"]}>
            <span className={styles["title"]}>{t("thisWeek")}</span>
            <span className={styles["count"]}>5324</span>
          </div>
          <div className={styles["sub-count-container"]}>
            <span className={styles["title"]}>{t("thisMonth")}</span>
            <span className={styles["count"]}>551,324</span>
          </div>
          <div className={styles["sub-count-container"]}>
            <span className={styles["title"]}>{t("total")}</span>
            <span className={styles["count"]}>1,551,532</span>
          </div>
        </div>
      </section>

      <section className={styles["gadgets-section"]}>
        <Image
          src={IloDevices}
          width={1920}
          height={1258}
          alt="ilo-devices.jpg"
          placeholder="blur"
        />
      </section>
      <section className={styles["gadgets-mobile-section"]}>
        <Image
          src={IloDevicesMobile}
          alt="ilo-devices.jpg"
          placeholder="blur"
        />
      </section>
    </Layout>
  );
};

export default Home;
