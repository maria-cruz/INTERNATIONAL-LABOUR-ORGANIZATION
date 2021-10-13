import React, { useState } from "react";
import Form, { FormInstance } from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import DatePicker from "antd/lib/date-picker";
import NationalitiesSelect from "@common/components/NationalitiesSelect";
import ReactFlagsSelect from "react-flags-select";
import {
  DAYS,
  GENDER,
  MONTH,
  SAMPLE_DATA_ORGANIZATION_TYPE,
} from "@modules/CreateProfile/helpers/constants";
interface CreateProfileFormProps {
  onFlagSelect: (code: string) => void;
  flagCode: string;
  form: FormInstance;
}

const CreateProfileForm = ({
  onFlagSelect,
  flagCode,
  form,
}: CreateProfileFormProps) => {
  const email = form.getFieldValue("emailAddress");
  const isDisabledEmailAddress = email !== "";

  return (
    <div className="create-profile-form-container">
      <div className="form-column-container">
        <Form.Item
          label="First name"
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
          label="Last name"
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
          label="Organization type"
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
      <Form.Item label="Email address" name="emailAddress">
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
            rules={[
              {
                required: true,
                message: "Please input your phone number.",
              },
            ]}
          >
            <Input className="form-input" />
          </Form.Item>
        </div>
        <div className="column-container">
          <Form.Item
            label="Date of birthday"
            name="month"
            className="form-width-month"
            rules={[
              {
                required: true,
                message: "Please select month.",
              },
            ]}
          >
            <Select className="form-select-country" placeholder="Month">
              {MONTH.map((month: any) => (
                <Select.Option value={month.value} key={month.value}>
                  {month.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="day"
            className="form-width-day"
            rules={[
              {
                required: true,
                message: "Please select day.",
              },
            ]}
          >
            <Select className="form-select-country" placeholder="Day">
              {DAYS.map((day) => (
                <Select.Option value={day.value} key={day.value}>
                  {day.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="year"
            className="form-width-year"
            rules={[
              {
                required: true,
                message: "Please select year.",
              },
            ]}
          >
            <DatePicker
              className="date-picker-year"
              picker="year"
              placeholder="Year"
            />
          </Form.Item>
        </div>
      </div>
      <div className="form-column-container margin-bottom">
        <Form.Item
          label="Gender"
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
          label="Nationality"
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
        <Button className="btn-continue" htmlType="submit">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CreateProfileForm;
