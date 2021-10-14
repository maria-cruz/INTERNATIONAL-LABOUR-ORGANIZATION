import React from "react";

import Select, { SelectProps } from "antd/lib/select";
import nationalities from "@common/constants/nationalities";
import DownArrow from "../Icons/DownArrow";
const { Option } = Select;

const NationalitiesSelect = (props: SelectProps<any>) => {
  return (
    <Select
      {...props}
      suffixIcon={<DownArrow width={"1.3rem"} height={"1.3rem"} />}
    >
      {nationalities.map(({ countryCode, nationality }) => (
        <Option key={countryCode} value={countryCode}>
          {nationality}
        </Option>
      ))}
    </Select>
  );
};

export default NationalitiesSelect;
