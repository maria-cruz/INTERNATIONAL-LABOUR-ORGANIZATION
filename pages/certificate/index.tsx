import * as React from "react";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import getJWT from "@common/methods/getJWT";
import dynamic from "next/dynamic";
const Certificate = dynamic(
  () => import("../../common/components/Certificate"),
  {
    ssr: false,
  }
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = await getJWT(ctx, true);

  const { data: userData } = await axios.get(
    `${process.env.API_URL}/users/me`,
    {
      headers: {
        Authorization: jwt,
      },
    }
  );

  return {
    props: { userData },
  };
};

const Cerificate = ({
  userData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Certificate userData={userData} />;
};

export default Cerificate;
