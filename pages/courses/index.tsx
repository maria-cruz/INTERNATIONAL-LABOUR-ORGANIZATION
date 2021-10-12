import CoursesMain from "@modules/CoursesMain";
import axios from "axios";

import useJWT from "@common/hooks/useJWT";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = await useJWT(ctx, true);

  let data: any[] = [];

  await axios
    .get(`${process.env.API_URL}/units`, {
      headers: {
        Authorization: jwt,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      data = [];
      console.error(err);
    });

  return {
    props: { data },
  };
};

export default CoursesMain;
