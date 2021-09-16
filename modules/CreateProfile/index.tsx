import React from "react";
import LeftSideMenu from "./components/LeftSideMenu";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import { DatePicker } from "antd";

const CreateProfile = () => {
  const [createProfile] = Form.useForm();

  const SAMPLE_DATA_ORGANIZATION_TYPE = [
    {
      label: "Training/academic institution – Staff",
      value: 1,
    },
    {
      label: "Training/academic institution – Student/Trainee",
      value: 2,
    },
    {
      label: "Private Enterprise - Employer",
      value: 3,
    },
    {
      label: "Private Enterprise - Worker",
      value: 4,
    },
    {
      label: "Trade union organization",
      value: 5,
    },
    {
      label: "Employer organization",
      value: 6,
    },
    {
      label: "Non-governmental Organization",
      value: 8,
    },
  ];

  return (
    <div className="create-profile-container">
      <LeftSideMenu />
      <div className="form-create-profile-container">
        <div className="form-container">
          <div className="form-title-container">
            <div className="title-container">Create profile</div>
            <div className="description-container">
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
            </div>
          </div>
          <Form form={createProfile} layout="vertical">
            <div className="form-column-container">
              <Form.Item
                label="First name"
                name="firstName"
                className="form-width"
              >
                <Input className="form-input" />
              </Form.Item>
              <Form.Item
                label="Last name"
                name="lastName"
                className="form-width"
              >
                <Input className="form-input" />
              </Form.Item>
            </div>
            <div className="form-column-container">
              <Form.Item
                label="Organization type"
                name="organizationType"
                className="form-width"
              >
                <Select className="form-select-organization-type">
                  {SAMPLE_DATA_ORGANIZATION_TYPE.map((item) => (
                    <Select.Option value={item.value}>
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
              <Input className="form-input" />
            </Form.Item>
            <div className="form-column-container">
              <div className="column-container">
                <Form.Item
                  label="Country"
                  name="country"
                  className="form-width-country"
                >
                  <Select className="form-select-country" />
                </Form.Item>

                <Form.Item
                  label="Your phone number"
                  name="phoneNumber"
                  className="form-width-phone-number"
                >
                  <Input className="form-input" />
                </Form.Item>
              </div>
              <div className="column-container">
                <Form.Item
                  label="Date of birthday"
                  name="month"
                  className="form-width-month"
                >
                  {/* <Select className="form-select-country" placeholder="Month" /> */}
                  <DatePicker
                    className="form-select-country"
                    picker="month"
                    placeholder="Month"
                  />
                </Form.Item>
                <Form.Item name="day" className="form-width-day">
                  {/* <Select className="form-select-country" placeholder="Day" /> */}
                  <DatePicker
                    className="form-select-country"
                    placeholder="Day"
                  />
                </Form.Item>
                <Form.Item name="year" className="form-width-year">
                  {/* <Select className="form-select-country" placeholder="Year" /> */}
                  <DatePicker
                    className="form-select-country"
                    picker="year"
                    placeholder="Year"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="form-column-container margin-bottom">
              <Form.Item label="Gender" name="gender" className="form-width">
                <Select
                  className="form-select-organization-type"
                  placeholder="Please Select"
                />
              </Form.Item>

              <Form.Item
                label="Nationality"
                name="organizationName"
                className="form-width"
              >
                <Select
                  className="form-select-organization-type"
                  placeholder="Please Select"
                />
              </Form.Item>
            </div>
            <div className="form-button-container">
              <Button className="btn-continue">Continue</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
