import React, { useEffect, useState } from "react";
import Form, { FormInstance, RuleObject } from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import Layout, { Header } from "@common/components/Layout";
import { SAMPLE_DATA_ORGANIZATION_TYPE } from "./helpers/constants";
import ReactFlagsSelect from "react-flags-select";
import NationalitiesSelect from "@common/components/NationalitiesSelect";
import { GENDER } from "@modules/CreateProfile/helpers/constants";
import DownArrow from "@common/components/Icons/DownArrow";
import BirthDate from "@common/components/BirthDate";
import moment from "moment";
import axios from "axios";
import router from "next/router";
import { parseCookies } from "nookies";
import { EDIT_PROFILE_FORM_VALUES } from "./helpers/interface";

interface EditProfileData {
  nationality: string;
  given_name: string;
  family_name: string;
  organization_type: string;
  email: string;
  organization_name: string;
  phone_number: string;
  gender: string;
  birth_date: string;
  country: string;
}
interface EditProfileProps {
  editProfileData: EditProfileData;
}

const EditProfile = ({ editProfileData }: EditProfileProps) => {
  const cookies = parseCookies();

  const [country, setCountry] = useState("LB");

  useEffect(() => {
    setCountry(editProfileData?.country);
  }, []);

  const month = moment(editProfileData?.birth_date).month();

  const day = moment(editProfileData?.birth_date).date();

  const year = moment(editProfileData?.birth_date).year();

  const intialValues = {
    firstName: editProfileData?.given_name,
    lastName: editProfileData?.family_name,
    organizationType: editProfileData?.organization_type,
    organizationName: editProfileData?.organization_name,
    emailAddress: editProfileData?.email,
    birthDate: {
      month,
      day,
      year: moment(year, "YYYY"),
    },
    gender: editProfileData?.gender,
    phoneNumber: editProfileData?.phone_number,
    nationality: editProfileData?.nationality,
  };
  const [editProfile] = Form.useForm();

  const handleFlagSelect = (country: string) => {
    setCountry(country);
  };

  const validationOnBirthDate = (
    _: RuleObject,
    value: { month: string; day: string; year: string }
  ) => {
    if (
      value.month === undefined ||
      value.day === undefined ||
      value.year === undefined
    ) {
      return Promise.reject("Please select date");
    }

    return Promise.resolve();
  };

  const handleSaveChangesFinish = (value: EDIT_PROFILE_FORM_VALUES) => {
    const year = moment(value.birthDate.year).year();

    const birthYear = moment().set({
      year: year,
      month: value.birthDate.month,
      date: value.birthDate.day,
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
          country: country,
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
      .then(function () {
        router?.push("/profile");
      })
      .catch(function (error) {
        console.log("err", error);
      });
  };

  const handleCancelClick = () => {
    router?.push("/profile");
  };

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="edit-profile-section">
        <div className="form-create-profile-container">
          <div className="form-container">
            <div className="form-title-container">
              <div className="title-container">Edit profile</div>
              <div className="description-container">
                Edit your profile here. This is how other users see you across
                the site.
              </div>
            </div>
            <Form
              form={editProfile}
              layout="vertical"
              initialValues={intialValues}
              onFinish={handleSaveChangesFinish}
            >
              <div className="edit-profile-form-container">
                <div className="form-column-container">
                  <Form.Item
                    label="First name*"
                    name="firstName"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name.",
                      },
                    ]}
                  >
                    <Input className="form-input" />
                  </Form.Item>
                  <Form.Item
                    label="Last name*"
                    name="lastName"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name.",
                      },
                    ]}
                  >
                    <Input className="form-input" />
                  </Form.Item>
                </div>
                <div className="form-column-container">
                  <Form.Item
                    label="Organization type*"
                    name="organizationType"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: "Please input your organization type.",
                      },
                    ]}
                  >
                    <Select
                      className="form-select-organization-type"
                      suffixIcon={
                        <DownArrow width={"1.3rem"} height={"1.3rem"} />
                      }
                    >
                      {SAMPLE_DATA_ORGANIZATION_TYPE.map((item) => (
                        <Select.Option value={item.value} key={item.value}>
                          {item.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Organization name"
                    name="organizationName"
                    className="form-width"
                  >
                    <Input className="form-input" />
                  </Form.Item>
                </div>
                <Form.Item
                  label="Email address*"
                  name="emailAddress"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input your email address.",
                    },
                  ]}
                >
                  <Input className="form-input" />
                </Form.Item>
                <div className="form-column-container">
                  <div className="country-and-phone-number-container">
                    <Form.Item
                      label="Country"
                      name="country"
                      className="form-width-country"
                    >
                      <ReactFlagsSelect
                        className="flag"
                        selected={country}
                        onSelect={handleFlagSelect}
                        showSelectedLabel={false}
                        showOptionLabel={false}
                        placeholder={" "}
                        selectedSize={35.8}
                        optionsSize={35.8}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Your phone number"
                      name="phoneNumber"
                      className="form-width-phone-number"
                    >
                      <Input className="form-input" />
                    </Form.Item>
                  </div>
                  <Form.Item
                    label="Date of birthday*"
                    name="birthDate"
                    className="form-width-birthdate"
                    rules={[{ validator: validationOnBirthDate }]}
                  >
                    <BirthDate />
                  </Form.Item>
                </div>
                <div className="form-column-container">
                  <Form.Item
                    label="Gender*"
                    name="gender"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: "Please select your gender.",
                      },
                    ]}
                  >
                    <Select
                      className="form-select-organization-type"
                      placeholder="Please Select"
                      suffixIcon={
                        <DownArrow width={"1.3rem"} height={"1.3rem"} />
                      }
                    >
                      {GENDER.map((gender) => (
                        <Select.Option value={gender.value} key={gender.value}>
                          {gender.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Nationality*"
                    name="nationality"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: "Please select your nationality.",
                      },
                    ]}
                  >
                    <NationalitiesSelect
                      className="form-select-organization-type"
                      placeholder="Please Select"
                    />
                  </Form.Item>
                </div>
                <div className="form-button-container">
                  <Button
                    className="btn-cancel"
                    type="link"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="btn-continue"
                    htmlType="submit"
                    type="primary"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EditProfile;
