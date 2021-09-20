import React from "react";
import { useRouter } from "next/router";
import LeftSideMenu from "./components/LeftSideMenu";
import Form from "antd/lib/form";
import CreateProfileForm from "./components/CreateProfileForm";
import CreateProfilePreview from "./components/CreateProfilePreview";

const CreateProfile = () => {
  const router = useRouter();
  const [createProfile] = Form.useForm();

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
            <Form form={createProfile} layout="vertical">
              <CreateProfileForm />
            </Form>
          </div>
        </div>
      )}
      {router.query.steps === "2" && <CreateProfilePreview />}
    </div>
  );
};

export default CreateProfile;
