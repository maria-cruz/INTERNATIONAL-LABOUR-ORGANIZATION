import React from "react";
import styles from "./styles.module.scss";

import Image from "next/image";
import Layout, { Header } from "@common/components/Layout";
import Banner from "@modules/Home/components/Banner";

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

      <Banner />
    </Layout>
  );
};

export default Home;
