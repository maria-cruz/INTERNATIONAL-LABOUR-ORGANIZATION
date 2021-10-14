import React, { useState } from "react";
import { useRouter } from "next/router";
import LeftSideMenu from "./components/LeftSideMenu";
import Form from "antd/lib/form";
import CreateProfileForm from "./components/CreateProfileForm";
import CreateProfilePreview from "./components/CreateProfilePreview";
import axios from "axios";
import useSWRImmutable from "swr/immutable";
import { parseCookies } from "nookies";
import moment from "moment";
import usePersistentState from "@common/methods/usePersistentState";
import {
  CREATE_PROFILE_FORM_VALUES,
  defaultFormValues,
} from "./helpers/interface";

const CreateProfile = () => {
  const [country, setCountry] = useState("LB");
  const [isActive, setIsActive] = useState(false);
  const [storeData, setStoreData] = usePersistentState(
    "create-profile",
    defaultFormValues
  );
  const router = useRouter();
  const [form] = Form.useForm();
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

  const { data } = useSWRImmutable(
    [`${process.env.API_URL}/users/me`, cookies.jwt],
    fetcher
  );

  const handleFlagSelect = (country: string) => {
    setCountry(country);
  };

  const handleCreateProfileFinish = (value: CREATE_PROFILE_FORM_VALUES) => {
    const year = moment(value.birthDate.year).year();
    setStoreData({
      ...storeData,
      firstName: value.firstName,
      lastName: value.lastName,
      organizationType: value.organizationType,
      organizationName: value.organizationName,
      emailAddress: value.emailAddress,
      country: country,
      phoneNumber: value.phoneNumber,
      gender: value.gender,
      nationality: value.nationality,
      month: value.birthDate.month,
      day: value.birthDate.day,
      year: year,
    });

    router?.push(`/create-profile/2/${cookies.user_id}`);
  };

  const handleSubmitClick = () => {
    const birthYear = moment().set({
      year: storeData.year,
      month: storeData.month,
      date: storeData.day,
    });

    const birthDate = moment(birthYear).toISOString(true);

    axios
      .put(
        `${process.env.API_URL}/users/${cookies.user_id}`,
        {
          given_name: storeData.firstName,
          family_name: storeData.lastName,
          organization_type: storeData.organizationType,
          organization_name: storeData.organizationName,
          email: storeData.emailAddress,
          country: country,
          phone_number: storeData.phoneNumber,
          gender: storeData.gender,
          nationality: storeData.nationality,
          birth_date: birthDate,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies?.jwt}`,
          },
        }
      )
      .then(function () {
        router?.push("/how-it-works");
      })
      .catch(function (error) {
        console.log("err", error);
      });
  };

  const onFieldsChange = (
    _change: {},
    allValues: CREATE_PROFILE_FORM_VALUES
  ) => {
    const isFirstName = allValues.firstName !== "";
    const isLastName = allValues.lastName !== "";
    const isOrganizationType = allValues.organizationType !== "";
    const isMonth = allValues.birthDate.month !== "";
    const isDay = allValues.birthDate.day !== "";
    const isYear = allValues.birthDate.year !== "";
    const isGender = allValues.gender !== "";
    const isNationality = allValues.nationality !== "";

    const hasValues =
      isFirstName &&
      isLastName &&
      isOrganizationType &&
      isMonth &&
      isDay &&
      isYear &&
      isGender &&
      isNationality;

    if (hasValues) {
      setIsActive(true);
    }

    if (!hasValues) {
      setIsActive(false);
    }
  };

  const initialValues = {
    firstName: storeData.firstName,
    lastName: storeData.lastName,
    organizationType: storeData.organizationType,
    organizationName: storeData.organizationName,
    emailAddress: data?.email ?? storeData.emailAddress,
    country: country,
    phoneNumber: storeData.phoneNumber,
    gender: storeData.gender,
    nationality: storeData.nationality,
    birthDate: {
      month: storeData.month,
      day: storeData.day,
      year: storeData.year ? moment(storeData.year, "YYYY") : undefined,
    },
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
                Fill in your personal info and create your account to begin the
                course.
              </div>
            </div>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleCreateProfileFinish}
              initialValues={initialValues}
              requiredMark={false}
              onValuesChange={onFieldsChange}
            >
              <CreateProfileForm
                form={form}
                flagCode={country}
                onFlagSelect={handleFlagSelect}
                isActiveSubmit={isActive}
              />
            </Form>
          </div>
        </div>
      )}
      {router.query.steps === "2" && (
        <CreateProfilePreview onSubmitClick={handleSubmitClick} />
      )}
    </div>
  );
};

export default CreateProfile;
