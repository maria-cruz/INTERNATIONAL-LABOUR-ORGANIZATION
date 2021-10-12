import CoursesMain from "@modules/CoursesMain";
import axios from "axios";

import useJWT from "@common/hooks/useJWT";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = await useJWT(ctx, true);

  const { data } = await axios.get(`${process.env.API_URL}/units`, {
    headers: {
      Authorization: jwt,
    },
  });

  return {
    props: { data },
  };
};

const CoursesPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CoursesMain allCoursesData={data} />;
};

export default CoursesPage;
