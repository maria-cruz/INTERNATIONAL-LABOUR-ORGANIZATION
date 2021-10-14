import React, { useState } from "react";
import Form, { FormInstance } from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import DatePicker from "antd/lib/date-picker";
import NationalitiesSelect from "@common/components/NationalitiesSelect";
import ReactFlagsSelect, { Bi } from "react-flags-select";
import {
  DAYS,
  GENDER,
  MONTH,
  SAMPLE_DATA_ORGANIZATION_TYPE,
} from "@modules/CreateProfile/helpers/constants";
import BirthDate from "../BirthDate";
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
  const email = form.getFieldValue("emailAddress");
  const isDisabledEmailAddress = email !== "";

  const checkPrice = (_: any, value: any) => {
    if (
      value.month === undefined ||
      value.day === undefined ||
      value.year === undefined
    ) {
      return Promise.reject("Please select date");
    }

    return Promise.resolve();
  };

  console.log(isActiveSubmit ? "primary" : "default");
  return (
    <div className="create-profile-form-container">
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
          <Select className="form-select-organization-type">
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
      <Form.Item label="Email address*" name="emailAddress">
        <Input className="form-input" disabled={isDisabledEmailAddress} />
      </Form.Item>
      <div className="form-column-container">
        <div className="column-container">
          <Form.Item
            label="Country"
            name="country"
            className="form-width-country"
          >
            <ReactFlagsSelect
              className="flag"
              selected={flagCode}
              onSelect={onFlagSelect}
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
          className="form-width-month"
          rules={[{ validator: checkPrice }]}
        >
          <BirthDate />
        </Form.Item>
      </div>
      <div className="form-column-container margin-bottom">
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
          className={`${isActiveSubmit ? "" : "btn-continue"}`}
          htmlType="submit"
          type="primary"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CreateProfileForm;
