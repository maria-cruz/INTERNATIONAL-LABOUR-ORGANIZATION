import React from "react";
import { useRouter } from "next/router";
import LeftSideMenu from "./components/LeftSideMenu";
import Form from "antd/lib/form";
import CreateProfileForm from "./components/CreateProfileForm";
import CreateProfilePreview from "./components/CreateProfilePreview";
import axios from "axios";
import useSWR from "swr";

const COUNTRIES_LINK = "https://restcountries.eu/rest/v2/all";

interface CountriesInterface {
  flag: string;
  alpha3Code: string;
}
const CreateProfile = () => {
  const router = useRouter();
  const [createProfile] = Form.useForm();
  const fetcher = (url: string) =>
    axios.get(url).then((res) => {
      const countriesData = res.data.map((item: CountriesInterface) => {
        return {
          flag: item.flag,
          code: item.alpha3Code,
        };
      });

      return countriesData;
    });
  const { data, error } = useSWR(COUNTRIES_LINK, fetcher);

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
                Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet
              </div>
            </div>
            <Form form={createProfile} layout="vertical">
              <CreateProfileForm data={data} />
            </Form>
          </div>
        </div>
      )}
      {router.query.steps === "2" && <CreateProfilePreview />}
    </div>
  );
};

export default CreateProfile;
