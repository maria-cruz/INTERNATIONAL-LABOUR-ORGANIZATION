import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Layout, { Header } from "@common/components/Layout";
import Banner from "@modules/Home/components/Banner";
import Partners from "@common/components/Partners";
import useTranslation from "next-translate/useTranslation";
import HomeBanner from "@public/images/group-cheerful-friends.jpg";
const Home = () => {
  const { t } = useTranslation("home");

  return (
    <Layout header={<Header title={"Header"} />}>
      <div className={styles["background"]}>
        <Image
          src={HomeBanner}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
        />
      </div>

      <Banner />
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
              <div className={styles["title"]}>
                Learn and fill up assessments
              </div>
              <div className={styles["description"]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>

          <div className={styles["step-container"]}>
            <div className={styles["logo"]}>
              <Image src="/images/trophy.svg" width={33} height={35} />
            </div>
            <div className={styles["text-group"]}>
              <div className={styles["title"]}>Get certified!</div>
              <div className={styles["description"]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["visitors-section"]}>
        <div>
          <div className={styles["main-count-container"]}>
            <span className={styles["title"]}>Visitors today</span>
            <span className={styles["count"]}>002897</span>
          </div>
        </div>
        <div className={styles["sub-count-group"]}>
          <div className={styles["sub-count-container"]}>
            <span className={styles["title"]}>This week</span>
            <span className={styles["count"]}>5324</span>
          </div>
          <div className={styles["sub-count-container"]}>
            <span className={styles["title"]}>Last week</span>
            <span className={styles["count"]}>4271</span>
          </div>
          <div className={styles["sub-count-container"]}>
            <span className={styles["title"]}>This month</span>
            <span className={styles["count"]}>551,324</span>
          </div>
          <div className={styles["sub-count-container"]}>
            <span className={styles["title"]}>Last month</span>
            <span className={styles["count"]}>524,653</span>
          </div>
          <div className={styles["sub-count-container"]}>
            <span className={styles["title"]}>Total</span>
            <span className={styles["count"]}>1,551,532</span>
          </div>
        </div>
      </section>

      <section className={styles["gadgets-section"]}>
        <div>
          <Image src="/images/ilo-gadgets.jpg" width={1920} height={1080} />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
