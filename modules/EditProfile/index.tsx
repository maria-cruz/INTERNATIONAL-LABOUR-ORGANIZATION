import React from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import DatePicker from "antd/lib/date-picker";
import Layout, { Header } from "@common/components/Layout";

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

const EditProfile = () => {
  const [editProfile] = Form.useForm();

  return (
    <Layout header={<Header title={"Header"} />}>
      <section className="edit-profile-section">
        <div className="form-create-profile-container">
          <div className="form-container">
            <div className="form-title-container">
              <div className="title-container">Create profile</div>
              <div className="description-container">
                Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
              </div>
            </div>
            <Form form={editProfile} layout="vertical">
              <div className="edit-profile-form-container">
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
                  <Input className="form-input" />
                </Form.Item>
                <div className="form-column-container">
                  <div className="column-container">
                    <Form.Item
                      label="Country"
                      name="country"
                      className="form-width-country"
                    >
                      <Select
                        className="form-select-country"
                        dropdownClassName="select-countries-dropdown"
                      >
                        {/* {data.map((item: { code: string; flag: string }) => (
              <Select.Option value={item.code} key={item.code}>
                <Image src={item.flag} height={25} width={35.85} />
              </Select.Option>
            ))} */}
                        {/* <Select> */}
                      </Select>
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
                      <DatePicker
                        className="form-select-country"
                        placeholder="Day"
                      />
                    </Form.Item>
                    <Form.Item name="year" className="form-width-year">
                      <DatePicker
                        className="form-select-country"
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
                  >
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
                  <Button className="btn-cancel" type="link">
                    Cancel
                  </Button>
                  <Button className="btn-continue" type="primary">
                    Save changes
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
