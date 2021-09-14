import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
import Button from "antd/lib/button";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <Layout header={<Header title={"Header"} />}>
      <div className={styles["background"]}>
        <Image
          src="/images/group-cheerful-friends.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <section className={styles["banner-section"]}>
        <span className={styles["banner-title"]}>
          <b>Rights</b> {"&"} <b>Responsibilities</b> {"at"} <b>Work</b>
        </span>
        <span className={styles["banner-description"]}>
          Houkouki fi al 3amal is an informative and training application on the
          Lebanese labour laws to better inform workers, employers and greater
          society on their rights and responsibilities at work. The app features
          a question and answer related to key aspects of the labour law, a
          downloadable user-friendly guide/publication, and self-paced training
          modules.
        </span>

        <div className={styles["button-container"]}>
          <Button type="primary" size="middle">
            Log in
          </Button>
          <Button type="default" size="middle">
            Sign up
          </Button>
        </div>

        <div className={styles["watch-link-container"]}>
          <Image src="/images/play-circle-filled.svg" width={33} height={33} />
          <a className={styles["watch-link-text"]}>watch how it works</a>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
