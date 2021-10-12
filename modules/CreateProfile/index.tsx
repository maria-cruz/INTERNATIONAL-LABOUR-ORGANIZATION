import React, { useState } from "react";
import { useRouter } from "next/router";
import LeftSideMenu from "./components/LeftSideMenu";
import Form from "antd/lib/form";
import CreateProfileForm from "./components/CreateProfileForm";
import CreateProfilePreview from "./components/CreateProfilePreview";
import axios from "axios";
import useSWR from "swr";
import { parseCookies } from "nookies";
import moment from "moment";

const CreateProfile = () => {
  const [flag, setFlag] = useState("");

  const router = useRouter();
  const [createProfile] = Form.useForm();
  const cookies = parseCookies();
  const fetcher = (url: string) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${cookies?.jwt}`,
        },
      })
      .then((res) => {
        return {
          email: res.data.email,
        };
      });

  const { data } = useSWR(
    [`${process.env.API_URL}/users/me`, cookies.jwt],
    fetcher
  );

  const handleFlagSelect = (e: string) => {
    console.log("a", e);
    setFlag(e);
  };

  const handleCreateProfileFinish = (value: any) => {
    const year = moment(value.year).year();

    const birthYear = moment().set({
      year: year,
      month: value.month,
      date: value.day,
    });

    const birthDate = moment(birthYear).toISOString(true);

    axios
      .put(
        `${process.env.API_URL}/users/${cookies.user_id}`,
        {
          given_name: value.firstName,
          family_name: value.lastName,
          organization_type: value.organizationType,
          organization_name: value.organizationName,
          email: value.emailAddress,
          country: flag,
          phone_number: value.phoneNumber,
          gender: value.gender,
          nationality: value.nationality,
          birth_date: birthDate,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies?.jwt}`,
          },
        }
      )
      .then(function (response) {
        console.log("res", response);
      })
      .catch(function (error) {
        console.log("err", error);
      });

    console.log("ye");
  };
  const email = createProfile.getFieldValue("emailAddress");
  const isDisabledEmailAddress = !email;
  const initialValues = {
    emailAddress: data?.email,
  };
  if (!data) return <div>loading</div>;
  return (
    <div className="create-profile-container">
      <LeftSideMenu />
      {router.query.steps === "1" && (
        <div className="form-create-profile-container">
          <div className="form-container">
            <div className="form-title-container">
              <div className="title-container">Create profile</div>
              <div className="description-container">
                Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
              </div>
            </div>
            <Form
              form={createProfile}
              layout="vertical"
              onFinish={handleCreateProfileFinish}
              initialValues={initialValues}
              requiredMark={false}
            >
              <CreateProfileForm
                flagCode={flag}
                onFlagSelect={handleFlagSelect}
                isDisabledEmailAddress={isDisabledEmailAddress}
              />
            </Form>
          </div>
        </div>
      )}
      {router.query.steps === "2" && <CreateProfilePreview />}
    </div>
  );
};

export default CreateProfile;
