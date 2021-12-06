import React, { useEffect, useState } from "react";
import Form, { FormInstance, RuleObject } from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import Layout, { Header } from "@common/components/Layout";
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
import useTranslation from "next-translate/useTranslation";
import { SAMPLE_DATA_ORGANIZATION_TYPE } from "@common/constants/organizationType";
import { customLabels } from "@common/constants/countryCustomLabel";

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
  const { t } = useTranslation("create-profile");

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
      return Promise.reject(t("validationMessageDate"));
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
              <div className="title-container">{t("editProfile")}</div>
              <div className="description-container">
                {t("editProfileDescription")}
              </div>
            </div>
            <Form
              form={editProfile}
              layout="vertical"
              initialValues={intialValues}
              onFinish={handleSaveChangesFinish}
              hideRequiredMark={true}
            >
              <div className="edit-profile-form-container">
                <div className="form-column-container">
                  <Form.Item
                    label={t("firstName")}
                    name="firstName"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: t("validationMessageFirstName"),
                      },
                    ]}
                  >
                    <Input className="form-input" />
                  </Form.Item>
                  <Form.Item
                    label={t("firstName")}
                    name="lastName"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: t("validationMessageLastName"),
                      },
                    ]}
                  >
                    <Input className="form-input" />
                  </Form.Item>
                </div>
                <div className="form-column-container">
                  <Form.Item
                    label={t("organizationType")}
                    name="organizationType"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: t("validationMessageOrganizationType"),
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
                          {t(item.key)}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label={t("organizationName")}
                    name="organizationName"
                    className="form-width"
                  >
                    <Input className="form-input" />
                  </Form.Item>
                </div>
                <Form.Item
                  label={t("email")}
                  name="emailAddress"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: t("validationMessageEmail"),
                    },
                  ]}
                >
                  <Input className="form-input" />
                </Form.Item>
                <div className="form-column-container">
                  <div className="country-and-phone-number-container">
                    <Form.Item
                      label={t("country")}
                      name="country"
                      className="form-width-country"
                    >
                      <ReactFlagsSelect
                        className="flag"
                        selected={country}
                        onSelect={handleFlagSelect}
                        showSelectedLabel={false}
                        placeholder={" "}
                        selectedSize={35.8}
                        optionsSize={16}
                        customLabels={customLabels}
                        countries={["IL"]}
                        blacklistCountries
                        searchable={true}
                      />
                    </Form.Item>

                    <Form.Item
                      label={t("phoneNumber")}
                      name="phoneNumber"
                      className="form-width-phone-number"
                    >
                      <Input className="form-input" />
                    </Form.Item>
                  </div>
                  <Form.Item
                    label={t("dateOfBirth")}
                    name="birthDate"
                    className="form-width-birthdate"
                    rules={[{ validator: validationOnBirthDate }]}
                  >
                    <BirthDate />
                  </Form.Item>
                </div>
                <div className="form-column-container">
                  <Form.Item
                    label={t("sex")}
                    name="gender"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: t("validationMessageSex"),
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
                          {t(gender.key)}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label={t("nationality")}
                    name="nationality"
                    className="form-width"
                    rules={[
                      {
                        required: true,
                        message: t("validationMessageNationality"),
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
                    {t("cancel")}
                  </Button>
                  <Button
                    className="btn-continue"
                    htmlType="submit"
                    type="primary"
                  >
                    {t("saveChanges")}
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
