import React from "react";
import Button from "antd/lib/button";
import useRouter from "next/router";
import Layout, { Header } from "@common/components/Layout";
import ProfilePreview from "./ProfilePreview";
import EditProfile from "../EditProfile";
import Form from "antd/lib/form";

const Profile = () => {
  const { router } = useRouter;

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="profile-preview-section">
        <ProfilePreview />
      </section>
    </Layout>
  );
};

export default Profile;
