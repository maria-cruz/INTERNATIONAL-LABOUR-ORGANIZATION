import React from "react";
import styles from "./styles.module.scss";
import LeftSideMenu from "./components/LeftSideMenu";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Button from "antd/lib/button";

const CreateProfile = () => {
  const [createProfile] = Form.useForm();

  return (
    <div className={styles["create-profile-container"]}>
      <LeftSideMenu />
      <div className={styles["form-create-profile-container"]}>
        <div className={styles["form-container"]}>
          <div className={styles["form-title-container"]}>
            <div className={styles["title-container"]}>Create profile</div>
            <div className={styles["description-container"]}>
              Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
            </div>
          </div>
          <Form form={createProfile} layout="vertical">
            <div className={styles["form-column-container"]}>
              <Form.Item
                label="First name"
                name="firstName"
                className={styles["form-width"]}
              >
                <Input className={styles["form-input"]} />
              </Form.Item>
              <Form.Item
                label="Last name"
                name="lastName"
                className={styles["form-width"]}
              >
                <Input className={styles["form-input"]} />
              </Form.Item>
            </div>
            <div className={styles["form-column-container"]}>
              <Form.Item
                label="Organization type"
                name="organizationType"
                className={styles["form-width"]}
              >
                <Select className={styles["form-select-organization-type"]} />
              </Form.Item>

              <Form.Item
                label="Organization name"
                name="organizationName"
                className={styles["form-width"]}
              >
                <Input className={styles["form-input"]} />
              </Form.Item>
            </div>
            <Form.Item label="Email address" name="emailAddress">
              <Input className={styles["form-input"]} />
            </Form.Item>
            <div className={styles["form-column-container"]}>
              <div className={styles["column-container"]}>
                <Form.Item
                  label="Country"
                  name="country"
                  className={styles["form-width-country"]}
                >
                  <Select className={styles["form-select-country"]} />
                </Form.Item>

                <Form.Item
                  label="Your phone number"
                  name="phoneNumber"
                  className={styles["form-width-phone-number"]}
                >
                  <Input className={styles["form-input"]} />
                </Form.Item>
              </div>
              <div className={styles["column-container"]}>
                <Form.Item
                  label="Date of birthday"
                  name="month"
                  className={styles["form-width-month"]}
                >
                  <Select
                    className={styles["form-select-country"]}
                    placeholder="Month"
                  />
                </Form.Item>
                <Form.Item name="day" className={styles["form-width-day"]}>
                  <Select
                    className={styles["form-select-country"]}
                    placeholder="Day"
                  />
                </Form.Item>
                <Form.Item name="year" className={styles["form-width-year"]}>
                  <Select
                    className={styles["form-select-country"]}
                    placeholder="Year"
                  />
                </Form.Item>
              </div>
            </div>
            <div
              className={`${styles["form-column-container"]} ${styles["margin-bottom"]}`}
            >
              <Form.Item
                label="Gender"
                name="gender"
                className={styles["form-width"]}
              >
                <Select
                  className={styles["form-select-organization-type"]}
                  placeholder="Please Select"
                />
              </Form.Item>

              <Form.Item
                label="Nationality"
                name="organizationName"
                className={styles["form-width"]}
              >
                <Select
                  className={styles["form-select-organization-type"]}
                  placeholder="Please Select"
                />
              </Form.Item>
            </div>
            <div className={styles["form-button-container"]}>
              <Button className={styles["btn-continue"]}>Continue</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
