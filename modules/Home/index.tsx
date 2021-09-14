import React from "react";
import Layout, { Header } from "@common/components/Layout";
import Image from "next/image";
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
    </Layout>
  );
};

export default Home;
