import Profile from "@modules/Profile";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import getJWT from "@common/methods/getJWT";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const jwt = await getJWT(ctx, true);

  const { data } = await axios.get(`${process.env.API_URL}/users/me`, {
    headers: {
      Authorization: jwt,
    },
  });

  return {
    props: { data },
  };
};

const ProfilePage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Profile profileData={data} />;
};

export default ProfilePage;
