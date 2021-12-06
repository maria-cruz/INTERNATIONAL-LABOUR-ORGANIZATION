import React, { useState } from "react";
import Form, { FormInstance, RuleObject } from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import NationalitiesSelect from "@common/components/NationalitiesSelect";
import ReactFlagsSelect from "react-flags-select";
import { GENDER } from "@modules/CreateProfile/helpers/constants";
import BirthDate from "@common/components/BirthDate";
import DownArrow from "@common/components/Icons/DownArrow";
import useTranslation from "next-translate/useTranslation";
import { SAMPLE_DATA_ORGANIZATION_TYPE } from "@common/constants/organizationType";
import { customLabels } from "@common/constants/countryCustomLabel";
import router from "next/router";
interface CreateProfileFormProps {
  onFlagSelect: (code: string) => void;
  flagCode: string;
  form: FormInstance;
  isActiveSubmit: boolean;
}

const CreateProfileForm = ({
  onFlagSelect,
  flagCode,
  form,
  isActiveSubmit,
}: CreateProfileFormProps) => {
  const { t } = useTranslation("create-profile");

  const email = form.getFieldValue("emailAddress");
  const isDisabledEmailAddress = email !== "";

  const checkBirthDate = (
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

  const language = router.locale;

  return (
    <div className="create-profile-form-container">
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
          label={t("lastName")}
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
            dropdownClassName={"create-profile-dropdown"}
            suffixIcon={<DownArrow width={"1.3rem"} height={"1.3rem"} />}
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
      <Form.Item label={t("email")} name="emailAddress">
        <Input className="form-input" disabled={isDisabledEmailAddress} />
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
              selected={flagCode}
              onSelect={onFlagSelect}
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
          rules={[{ validator: checkBirthDate }]}
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
            placeholder={t("pleaseSelect")}
            suffixIcon={<DownArrow width={"1.3rem"} height={"1.3rem"} />}
            dropdownClassName={
              language === "ar" ? "create-profile-dropdown" : ""
            }
          >
            <DownArrow width={"1.3rem"} height={"1.3rem"} />

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
            placeholder={t("pleaseSelect")}
          />
        </Form.Item>
      </div>
      <div className="form-button-container">
        <Button
          className={`${isActiveSubmit ? "" : "btn-continue"}`}
          htmlType="submit"
          type="primary"
        >
          {t("continue")}
        </Button>
      </div>
    </div>
  );
};

export default CreateProfileForm;
